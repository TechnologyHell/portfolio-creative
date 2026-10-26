/* =========================================================
   NITISH SINGH — MULTI-PAGE APPLICATION ENGINE (shared.js)
   Shared interactions, persistent draggable button, modals & rendering
   ========================================================= */

// Linear Interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

// Path resolver for root vs subdirectory (supports depth 1 '../' and depth 2 '../../')
function fixPath(path) {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:') || path.startsWith('#')) {
        return path;
    }
    const prefix = window.PATH_PREFIX || (window.IS_SUBDIR ? (window.SUBDIR_DEPTH === 2 ? '../../' : '../') : '');
    if (prefix) {
        if (path.startsWith(prefix)) return path;
        return prefix + path.replace(/^(\.\.\/)+/, '');
    }
    return path;
}

// Clean URL handling for live servers (removes /index.html from URL bar if hosted on http/https)
if (window.location.protocol !== 'file:' && window.location.pathname.endsWith('/index.html')) {
    const cleanPath = window.location.pathname.replace(/\/index\.html$/, '/') + window.location.search + window.location.hash;
    window.history.replaceState(null, '', cleanPath);
}

// Protocol-aware link handler: ensures local file:/// testing directly opens pages without folder listings
document.addEventListener('click', (e) => {
    if (window.location.protocol !== 'file:') return;
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return;

    if (href.endsWith('/')) {
        e.preventDefault();
        window.location.href = href + 'index.html';
    } else if (href === '..' || href === '.') {
        e.preventDefault();
        window.location.href = href + '/index.html';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // 1. Mouse Cursor & Follower Engine
    const cursor = document.getElementById('cursor');
    const outline = document.getElementById('cursor-follower');
    const bgGlow = document.getElementById('bg-glow');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outlineX = mouseX;
    let outlineY = mouseY;
    let glowX = mouseX;
    let glowY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (cursor) {
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        }
    });

    const render = () => {
        outlineX = lerp(outlineX, mouseX, 0.15);
        outlineY = lerp(outlineY, mouseY, 0.15);
        if (outline) {
            outline.style.left = outlineX + 'px';
            outline.style.top = outlineY + 'px';
        }

        glowX = lerp(glowX, mouseX, 0.05);
        glowY = lerp(glowY, mouseY, 0.05);
        if (bgGlow) {
            bgGlow.style.left = glowX + 'px';
            bgGlow.style.top = glowY + 'px';
        }

        requestAnimationFrame(render);
    };
    render();

    // 2. Cursor Hover Effects (only real interactive targets)
    attachCursorHovers = function() {
        const hoverElements = document.querySelectorAll('a, button, select, .filter-pill, .modal-thumb, .modal-close-btn, .modal-nav-arrow, .card-action-btn, .case-study-item-card, .back-btn-pill, .contact-card, .edition-card-media, .bento-card-thumb');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                if (outline) outline.classList.add('hover-active');
            });
            el.addEventListener('mouseleave', () => {
                if (outline) outline.classList.remove('hover-active');
            });
        });
    };
    attachCursorHovers();

    // 3. Magnetic Physics (Replaced with rock-solid CSS hover)
    function attachMagnetics() {
        // Disabled JS magnetic movement to guarantee 100% reliable physical button clickability
    }
    attachMagnetics();

    // 4. 3D Card Tilt Physics (Replaced with high-performance, non-interfering CSS hover glow)
    attachTiltCards = function() {
        // Disabled JS 3D matrix transforms on mousemove so clicks are never cancelled
    };
    attachTiltCards();

    // 5. Mobile Menu Drawer
    const mobileToggle = document.getElementById('mobileNavToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileClose = document.getElementById('mobileMenuClose');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.add('is-active');
            document.body.style.overflow = 'hidden';
        });
    }
    if (mobileClose && mobileMenu) {
        mobileClose.addEventListener('click', closeMobileMenu);
    }
    document.querySelectorAll('.mobile-menu-drawer a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    function closeMobileMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove('is-active');
            document.body.style.overflow = 'initial';
        }
    }

    // 6. Global Draggable Quick Connect Button with LOCAL STORAGE PERSISTENCE
    initPersistentDraggableBtn();

    // 7. Auto-render Category Grid if data-category exists
    const categoryPage = document.body.getAttribute('data-category');
    if (categoryPage) {
        renderCategoryPageGrid(categoryPage);
    }

    // 8. Auto-render Achievements if on achievements page
    if (document.body.getAttribute('data-page') === 'achievements') {
        renderAchievementsPage();
    }

    // 9. Keyboard controls (Modals & Navigation)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCaseStudy();
            closeLightboxModal();
            closeVideoModal();
            closeMobileMenu();
        } else if (e.key === 'ArrowRight' && currentLightboxGallery.length > 1) {
            nextLightboxSlide();
        } else if (e.key === 'ArrowLeft' && currentLightboxGallery.length > 1) {
            prevLightboxSlide();
        }
    });

    // Close on backdrop clicks
    document.getElementById('lightboxModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'lightboxModal') closeLightboxModal();
    });
    document.getElementById('videoModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'videoModal') closeVideoModal();
    });
});

/* =========================================================
   PERSISTENT DRAGGABLE CONNECT BUTTON
   Remembers its exact coordinates across reload and page switches
   ========================================================= */

function initPersistentDraggableBtn() {
    const dragBtn = document.getElementById('draggable-btn');
    if (!dragBtn) return;

    const STORAGE_KEY = 'nitish_draggable_btn_pos';
    const dragBtnText = dragBtn.querySelector('.btn-text');

    function updateBtnLabel() {
        if (!dragBtnText) return;
        if (window.innerWidth <= 768) {
            dragBtnText.textContent = 'RESUME';
            dragBtn.href = 'https://drive.google.com/file/d/1DieFi6Mk-B6EoKDMg8yGlseBv7SV4-5v/view?usp=sharing';
            dragBtn.target = '_blank';
        } else {
            dragBtnText.textContent = 'CONNECT';
            dragBtn.href = 'mailto:nitishsinghslg@gmail.com';
            dragBtn.removeAttribute('target');
        }
    }
    updateBtnLabel();
    window.addEventListener('resize', updateBtnLabel);

    // Position Restorer
    function restorePosition() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return;
        try {
            const pos = JSON.parse(saved);
            if (typeof pos.x === 'number' && typeof pos.y === 'number') {
                const width = dragBtn.offsetWidth || 120;
                const height = dragBtn.offsetHeight || 44;
                const maxX = Math.max(10, window.innerWidth - width - 10);
                const maxY = Math.max(10, window.innerHeight - height - 10);
                const clampedX = Math.max(10, Math.min(pos.x, maxX));
                const clampedY = Math.max(10, Math.min(pos.y, maxY));

                dragBtn.style.position = 'fixed';
                dragBtn.style.left = clampedX + 'px';
                dragBtn.style.top = clampedY + 'px';
                dragBtn.style.right = 'auto';
                dragBtn.style.bottom = 'auto';
            }
        } catch (e) {
            console.error('Could not restore draggable position', e);
        }
    }
    restorePosition();
    window.addEventListener('resize', restorePosition);

    // Dragging Logic
    let isDragging = false;
    let hasDragged = false;
    let startX = 0, startY = 0;
    let initialLeft = 0, initialTop = 0;

    function handleStart(clientX, clientY) {
        isDragging = true;
        hasDragged = false;
        dragBtn.classList.add('is-dragging');

        startX = clientX;
        startY = clientY;

        const rect = dragBtn.getBoundingClientRect();
        initialLeft = rect.left;
        initialTop = rect.top;

        dragBtn.style.position = 'fixed';
        dragBtn.style.right = 'auto';
        dragBtn.style.bottom = 'auto';
        dragBtn.style.left = initialLeft + 'px';
        dragBtn.style.top = initialTop + 'px';
    }

    function handleMove(clientX, clientY) {
        if (!isDragging) return;
        const dx = clientX - startX;
        const dy = clientY - startY;

        if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
            hasDragged = true;
        }

        const width = dragBtn.offsetWidth || 120;
        const height = dragBtn.offsetHeight || 44;
        let newX = initialLeft + dx;
        let newY = initialTop + dy;

        newX = Math.max(8, Math.min(newX, window.innerWidth - width - 8));
        newY = Math.max(8, Math.min(newY, window.innerHeight - height - 8));

        dragBtn.style.left = newX + 'px';
        dragBtn.style.top = newY + 'px';
    }

    function handleEnd() {
        if (!isDragging) return;
        isDragging = false;
        dragBtn.classList.remove('is-dragging');

        if (hasDragged) {
            const rect = dragBtn.getBoundingClientRect();
            localStorage.setItem(STORAGE_KEY, JSON.stringify({
                x: rect.left,
                y: rect.top
            }));
        }
    }

    // Mouse bindings
    dragBtn.addEventListener('mousedown', (e) => {
        handleStart(e.clientX, e.clientY);
        e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
        handleMove(e.clientX, e.clientY);
    });

    window.addEventListener('mouseup', handleEnd);

    // Touch bindings
    dragBtn.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            handleStart(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
        if (isDragging && e.touches.length === 1) {
            handleMove(e.touches[0].clientX, e.touches[0].clientY);
            if (e.cancelable) e.preventDefault();
        }
    }, { passive: false });

    window.addEventListener('touchend', handleEnd);

    // Click interceptor: prevent opening link if dragged
    dragBtn.addEventListener('click', (e) => {
        if (hasDragged) {
            e.preventDefault();
            e.stopPropagation();
        }
    });
}

/* =========================================================
   CATEGORY PAGE GRID RENDERER
   Renders projects according to category in row-major order
   ========================================================= */

function renderCategoryPageGrid(catKey) {
    if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.projects) return;

    const container = document.getElementById('worksGridContainer');
    if (!container) return;

    let projects = [];
    if (catKey === 'all') {
        projects = [...PORTFOLIO_DATA.projects];
        if (PORTFOLIO_DATA.physicalProjects) {
            PORTFOLIO_DATA.physicalProjects.forEach(pp => {
                if (!projects.some(p => p.id === pp.id)) projects.push(pp);
            });
        }
    } else {
        projects = PORTFOLIO_DATA.projects.filter(p => {
            return (p.categories && p.categories.includes(catKey)) || (p.primaryCategory === catKey);
        });
        if (catKey === '3d' && PORTFOLIO_DATA.physicalProjects) {
            PORTFOLIO_DATA.physicalProjects.forEach(pp => {
                if (!projects.some(p => p.id === pp.id)) projects.push(pp);
            });
        }
    }

    const countBadge = document.getElementById('worksCountBadge');
    if (countBadge) {
        countBadge.textContent = `${projects.length} PROJECTS IN COLLECTION`;
    }

    if (projects.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; padding: 4rem 2rem; text-align: center; border: 1px dashed var(--glass-border); border-radius: 16px;">
                <p style="font-size: 1.2rem; color: var(--text-muted);">No projects currently cataloged in this collection.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = projects.map(p => {
        let clickHandler = '';
        let actionMarkup = '';
        const escapedTitle = p.title.replace(/'/g, "\\'");

        if (p.isCaseStudy && p.caseStudyEdition) {
            const csUrl = p.caseStudyEdition === 'idt3' ? fixPath('ideathon/3/index.html') : fixPath('ideathon/4/index.html');
            clickHandler = `window.location.href='${csUrl}'`;
            actionMarkup = `
                <a href="${csUrl}" class="btn sm primary card-action-btn">
                    <span>READ CASE STUDY →</span>
                </a>
            `;
        } else if (p.youtubeId) {
            clickHandler = `openVideoModal('${p.youtubeId}', '${escapedTitle}', false)`;
            actionMarkup = `
                <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
                    <button type="button" onclick="openVideoModal('${p.youtubeId}', '${escapedTitle}', false)" class="btn sm secondary card-action-btn">
                        <span>PLAY ▶</span>
                    </button>
                    <a href="https://youtu.be/${p.youtubeId}" target="_blank" rel="noopener noreferrer" class="btn sm card-action-btn" style="background: rgba(255,255,255,0.06); border: 1px solid var(--glass-border);" onclick="event.stopPropagation();">
                        <span>YOUTUBE ↗</span>
                    </a>
                </div>
            `;
        } else if (p.localVideo) {
            clickHandler = `openVideoModal('${fixPath(p.localVideo)}', '${escapedTitle}', true)`;
            actionMarkup = `
                <button type="button" onclick="openVideoModal('${fixPath(p.localVideo)}', '${escapedTitle}', true)" class="btn sm secondary card-action-btn">
                    <span>PLAY VIDEO ▶</span>
                </button>
            `;
        } else {
            clickHandler = `openProjectLightbox('${p.id}')`;
            actionMarkup = `
                <button type="button" onclick="openProjectLightbox('${p.id}')" class="btn sm secondary card-action-btn">
                    <span>VIEW PROJECT ↗</span>
                </button>
            `;
        }

        const thumbSrc = fixPath(p.thumbnail);

        return `
            <div class="bento-box tilt-wrapper">
                <div class="tilt-element glass-card bento-card">
                    <div class="bento-card-thumb" onclick="${clickHandler}" style="cursor: pointer;">
                        <img src="${thumbSrc}" alt="${p.title}" loading="lazy">
                        ${p.youtubeId || p.localVideo ? `
                            <div class="video-play-badge">
                                <div class="video-play-btn">
                                    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" style="transform: translateX(2px);"><path d="M8 5v14l11-7z"/></svg>
                                </div>
                            </div>
                        ` : ''}
                    </div>

                    <div class="bento-card-body">
                        <div class="bento-card-info" onclick="${clickHandler}" style="cursor: pointer;">
                            <div class="bento-card-meta">
                                <span class="project-tag" style="margin: 0;">${p.categoryLabel} • ${p.year}</span>
                                ${p.isCaseStudy ? `<span class="chip" style="font-size: 0.7rem; color: var(--accent-cyan); border-color: rgba(0,242,254,0.3); margin: 0;">FLAGSHIP CASE STUDY</span>` : ''}
                            </div>
                            <h4 class="bento-card-title">${p.title}</h4>
                            <p class="bento-card-desc">${p.description}</p>
                        </div>
                        <div class="bento-card-footer">
                            <div class="bento-card-tags">
                                ${(p.tags || []).map(t => `<span class="tag-tech">${t}</span>`).join('')}
                            </div>
                            ${actionMarkup}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    attachTiltCards();
    attachCursorHovers();
}

/* =========================================================
   ACHIEVEMENTS PAGE RENDERER
   ========================================================= */

function renderAchievementsPage() {
    if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.achievements) return;
    const container = document.getElementById('achievementsGridContainer');
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.achievements.map((item, idx) => {
        return `
            <div class="tilt-wrapper">
                <div class="tilt-element glass-card achievement-card">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.25rem;">
                        <span class="chip">${item.badge}</span>
                        <span style="font-family: monospace; color: var(--accent-cyan); font-weight: 700;">${item.year}</span>
                    </div>
                    <h4>${item.title}</h4>
                    <p class="company" style="color: var(--accent-indigo); font-weight: 600; font-size: 0.95rem; margin-bottom: 0.8rem;">${item.org}</p>
                    <p class="description">${item.desc}</p>
                </div>
            </div>
        `;
    }).join('');

    attachTiltCards();
    attachCursorHovers();
}

/* =========================================================
   LIGHTBOX MODAL ENGINE
   ========================================================= */

function openProjectLightbox(projectId) {
    if (typeof PORTFOLIO_DATA === 'undefined') return;
    let project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project && PORTFOLIO_DATA.physicalProjects) {
        project = PORTFOLIO_DATA.physicalProjects.find(p => p.id === projectId);
    }
    if (!project) return;

    const galleryItems = (project.gallery && project.gallery.length > 0)
        ? project.gallery.map(item => ({
            src: fixPath(typeof item === 'string' ? item : item.src),
            original: fixPath(item.original || (typeof item === 'string' ? item : item.src)),
            title: item.title || project.title,
            caption: item.caption || project.description
        }))
        : [{
            src: fixPath(project.thumbnail),
            original: fixPath(project.originalPath || project.thumbnail),
            title: project.title,
            caption: project.description
        }];

    openCustomGalleryModal(galleryItems, 0, project.title, project);
}

let currentLightboxProjectContext = null;

function openCustomGalleryModal(galleryItems, startIndex = 0, title = '', projectContext = null) {
    currentLightboxGallery = galleryItems;
    currentGalleryIndex = startIndex;
    currentLightboxProjectContext = projectContext;

    const modal = document.getElementById('lightboxModal');
    if (!modal) return;

    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    renderCurrentLightboxSlide(projectContext);
    attachCursorHovers();
}

function renderCurrentLightboxSlide(projectContext = null) {
    if (!currentLightboxGallery || currentLightboxGallery.length === 0) return;
    if (!projectContext) projectContext = currentLightboxProjectContext;

    const item = currentLightboxGallery[currentGalleryIndex];
    const mainImg = document.getElementById('lightboxMainImage');
    const titleEl = document.getElementById('lightboxTitle');
    const descEl = document.getElementById('lightboxDescription');
    const catEl = document.getElementById('lightboxCategoryTag');
    const toolsEl = document.getElementById('lightboxTools');
    const rawLink = document.getElementById('lightboxRawLink');
    const prevBtn = document.getElementById('lightboxPrevBtn');
    const nextBtn = document.getElementById('lightboxNextBtn');
    const strip = document.getElementById('lightboxThumbStrip');

    if (mainImg) mainImg.src = fixPath(item.src);
    if (titleEl) titleEl.textContent = item.title || (projectContext ? projectContext.title : '');
    if (descEl) descEl.textContent = item.caption || (projectContext ? projectContext.description : '');

    if (catEl) {
        catEl.textContent = projectContext ? (projectContext.categoryLabel || projectContext.category) : 'Artwork Preview';
    }

    if (toolsEl) {
        const tools = projectContext ? (projectContext.tools || projectContext.tags || []) : [];
        toolsEl.innerHTML = tools.map(t => `<span class="tag-tech">${t}</span>`).join('');
    }

    if (rawLink) {
        const targetPath = item.original || item.src;
        if (targetPath) {
            rawLink.href = fixPath(targetPath);
            rawLink.style.display = 'inline-block';
        } else {
            rawLink.style.display = 'none';
        }
    }

    if (prevBtn) prevBtn.style.display = currentLightboxGallery.length > 1 ? 'flex' : 'none';
    if (nextBtn) nextBtn.style.display = currentLightboxGallery.length > 1 ? 'flex' : 'none';

    if (strip) {
        if (currentLightboxGallery.length > 1) {
            strip.style.display = 'flex';
            strip.innerHTML = currentLightboxGallery.map((thumb, idx) => `
                <div class="modal-thumb ${idx === currentGalleryIndex ? 'active' : ''}" onclick="setLightboxIndex(${idx})">
                    <img src="${fixPath(thumb.src)}" alt="Thumbnail ${idx + 1}">
                </div>
            `).join('');
        } else {
            strip.style.display = 'none';
        }
    }
}

function setLightboxIndex(idx) {
    currentGalleryIndex = idx;
    renderCurrentLightboxSlide();
}

function nextLightboxSlide() {
    if (currentLightboxGallery.length <= 1) return;
    currentGalleryIndex = (currentGalleryIndex + 1) % currentLightboxGallery.length;
    renderCurrentLightboxSlide();
}

function prevLightboxSlide() {
    if (currentLightboxGallery.length <= 1) return;
    currentGalleryIndex = (currentGalleryIndex - 1 + currentLightboxGallery.length) % currentLightboxGallery.length;
    renderCurrentLightboxSlide();
}

function closeLightboxModal() {
    const modal = document.getElementById('lightboxModal');
    if (!modal) return;
    modal.classList.remove('is-active');
    if (!document.getElementById('caseStudyView')?.classList.contains('is-active')) {
        document.body.style.overflow = 'initial';
    }
}

/* =========================================================
   VIDEO MODAL ENGINE
   ========================================================= */

function extractYouTubeId(urlOrId) {
    if (!urlOrId) return '';
    const clean = String(urlOrId).trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(clean)) return clean;
    const match = clean.match(/(?:youtu\.be\/|youtube\.com\/(?:shorts\/|embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : clean;
}

function openVideoModal(source, title, isLocal = false) {
    const modal = document.getElementById('videoModal');
    const wrap = document.getElementById('videoPlayerWrap');
    const titleEl = document.getElementById('videoModalTitle');
    let ytLinkEl = document.getElementById('videoModalYtLink');

    if (!modal || !wrap) return;

    if (titleEl) titleEl.textContent = title || 'Video Showcase';

    if (isLocal || (typeof source === 'string' && source.endsWith('.mp4'))) {
        wrap.innerHTML = `
            <video class="video-native-player" controls autoplay playsinline preload="metadata">
                <source src="${fixPath(source)}" type="video/mp4">
                Your browser does not support HTML5 video playback.
            </video>
        `;
        if (ytLinkEl) ytLinkEl.style.display = 'none';
    } else {
        const ytId = extractYouTubeId(source);
        const embedUrl = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`;
        wrap.innerHTML = `
            <iframe id="videoIframe" src="${embedUrl}" title="${title || 'Video Player'}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="width: 100%; height: 100%; border: none;"></iframe>
        `;
        if (!ytLinkEl) {
            const footer = modal.querySelector('.modal-container > div:last-child');
            if (footer) {
                ytLinkEl = document.createElement('a');
                ytLinkEl.id = 'videoModalYtLink';
                ytLinkEl.target = '_blank';
                ytLinkEl.rel = 'noopener noreferrer';
                ytLinkEl.className = 'btn sm';
                ytLinkEl.style.fontSize = '0.75rem';
                ytLinkEl.style.textDecoration = 'none';
                ytLinkEl.style.marginLeft = 'auto';
                ytLinkEl.style.marginRight = '1rem';
                ytLinkEl.innerHTML = '<span>WATCH ON YOUTUBE ↗</span>';
                footer.insertBefore(ytLinkEl, footer.lastElementChild);
            }
        }
        if (ytLinkEl) {
            ytLinkEl.href = `https://youtu.be/${ytId}`;
            ytLinkEl.style.display = 'inline-flex';
        }
    }

    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const wrap = document.getElementById('videoPlayerWrap');
    if (!modal) return;

    modal.classList.remove('is-active');
    if (wrap) wrap.innerHTML = '';
    if (!document.getElementById('caseStudyView')?.classList.contains('is-active')) {
        document.body.style.overflow = 'initial';
    }
}

/* =========================================================
   FLAGSHIP CASE STUDY OVERLAY ENGINE
   ========================================================= */

function openCaseStudy(editionId) {
    if (editionId === 'idt3') {
        window.location.href = fixPath('ideathon/3/index.html');
        return;
    }
    if (editionId === 'idt4') {
        window.location.href = fixPath('ideathon/4/index.html');
        return;
    }

    if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.flagshipCaseStudies) return;
    const study = PORTFOLIO_DATA.flagshipCaseStudies[editionId];
    if (!study) return;

    const overlay = document.getElementById('caseStudyView');
    const content = document.getElementById('caseStudyContent');
    if (!overlay || !content) return;

    content.innerHTML = `
        <div class="case-study-hero">
            <span class="project-tag" style="color: var(--accent-cyan);">${study.edition} FLAGSHIP CASE STUDY</span>
            <h1 class="display-sm" style="margin-top: 0.5rem; margin-bottom: 0.5rem;">${study.title}</h1>
            <p class="case-study-subtitle" style="font-size: 1.25rem; color: var(--accent-indigo); font-weight: 700; margin-bottom: 1.5rem;">${study.subtitle}</p>
            
            <div class="case-study-meta-grid">
                <div class="case-study-meta-item">
                    <span class="label">TIMEFRAME</span>
                    <span class="val">${study.timeframe}</span>
                </div>
                <div class="case-study-meta-item">
                    <span class="label">ORGANIZATIONAL ROLE</span>
                    <span class="val">${study.officialRole}</span>
                </div>
                <div class="case-study-meta-item">
                    <span class="label">CREATIVE & MEDIA LEAD</span>
                    <span class="val" style="color: var(--accent-cyan); font-weight: 700;">${study.creativeRole}</span>
                </div>
            </div>
        </div>

        <div class="case-study-hero-image" style="margin-bottom: 4rem; border-radius: 16px; overflow: hidden; border: 1px solid var(--glass-border);">
            <img src="${fixPath(study.heroImage)}" alt="${study.title}" style="width: 100%; aspect-ratio: 16/9; object-fit: cover;">
        </div>

        <div class="case-study-section">
            <h3 class="display-sm" style="font-size: 1.8rem;">Executive Overview</h3>
            <p style="color: var(--text-muted); font-size: 1.1rem; line-height: 1.8; margin-top: 1rem;">${study.overview}</p>
        </div>

        <div class="case-study-section" style="margin-top: 3.5rem;">
            <h3 class="display-sm" style="font-size: 1.8rem; margin-bottom: 1.5rem;">Core Design & Production Responsibilities</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
                ${study.responsibilities.map(r => `
                    <div style="padding: 1.25rem 1.5rem; background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); border-radius: 12px; display: flex; align-items: center; gap: 0.75rem;">
                        <span style="color: var(--accent-cyan); font-weight: bold;">✦</span>
                        <span style="font-size: 0.95rem; color: #eee;">${r}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        ${study.sections.map((sec, sIdx) => `
            <div class="case-study-section" style="margin-top: 4.5rem;">
                <h3 class="display-sm" style="font-size: 1.8rem;">${sec.heading}</h3>
                <p style="color: var(--text-muted); font-size: 1.05rem; margin-top: 0.5rem; margin-bottom: 2rem;">${sec.description}</p>
                <div class="bento-grid">
                    ${sec.items.map((item, iIdx) => `
                        <div class="tilt-wrapper">
                            <div class="tilt-element glass-card case-study-item-card" onclick="openStudyGalleryModal('${study.id}', ${sIdx}, ${iIdx})">
                                <div style="aspect-ratio: 16/10; overflow: hidden; background: #000; border-radius: 8px;">
                                    <img src="${fixPath(item.src)}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">
                                </div>
                                <div style="padding: 1.25rem 0 0 0; display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        <span class="project-tag" style="margin: 0; font-size: 0.75rem;">${item.type}</span>
                                        <h4 style="font-size: 1.1rem; color: #fff; margin-top: 0.3rem;">${item.title}</h4>
                                    </div>
                                    <span style="color: var(--accent-cyan); font-size: 0.85rem; font-family: monospace;">VIEW ↗</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('')}

        ${study.publications && study.publications.length > 0 ? `
            <div class="case-study-section" style="margin-top: 4.5rem;">
                <h3 class="display-sm" style="font-size: 1.8rem; margin-bottom: 1rem;">Official Publications & Documents</h3>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    ${study.publications.map(pub => `
                        <a href="${fixPath(pub.path)}" target="_blank" class="btn secondary magnetic" style="display: inline-flex; align-items: center; gap: 0.75rem;">
                            <span>📄</span>
                            <span class="btn-text">${pub.title} ↗</span>
                        </a>
                    `).join('')}
                </div>
            </div>
        ` : ''}

        <div class="case-study-section" style="margin-top: 4.5rem; padding: 2.5rem; background: rgba(0, 242, 254, 0.03); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 16px;">
            <h4 style="font-size: 1.3rem; color: #fff; margin-bottom: 0.8rem;">Reflections & Event Impact</h4>
            <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.8;">${study.summary}</p>
        </div>
    `;

    overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    overlay.scrollTop = 0;
    attachCursorHovers();
    attachTiltCards();
}

function openStudyGalleryModal(editionId, secIdx, itemIdx) {
    if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.flagshipCaseStudies) return;
    const study = PORTFOLIO_DATA.flagshipCaseStudies[editionId];
    if (!study || !study.sections[secIdx]) return;

    const allItems = study.sections[secIdx].items;
    openCustomGalleryModal(allItems, itemIdx, `${study.title} — ${study.sections[secIdx].heading}`);
}

function closeCaseStudy() {
    const overlay = document.getElementById('caseStudyView');
    if (!overlay) return;
    overlay.classList.remove('is-active');
    document.body.style.overflow = 'initial';
}

/* =========================================================
   CONTACT PAGE TOAST HELPER
   ========================================================= */

function copyToClipboard(text, message = 'COPIED TO CLIPBOARD!') {
    navigator.clipboard.writeText(text).then(() => {
        showCopyToast(message);
    }).catch(err => {
        console.error('Failed to copy text', err);
    });
}

function showCopyToast(msg) {
    let toast = document.getElementById('copyToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'copyToast';
        toast.className = 'copy-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('is-active');
    setTimeout(() => {
        toast.classList.remove('is-active');
    }, 2800);
}
