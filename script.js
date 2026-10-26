/* =========================================================
   PREMIUM PORTFOLIO JS - Nitish Singh Creative Portfolio
   Revision 3.1: Final Layout and Interaction Corrections
   ========================================================= */

// Linear Interpolation for smooth follow/easing
const lerp = (a, b, n) => (1 - n) * a + n * b;

// Global state for archive & modals
let currentPrimaryCategory = 'featured';
let currentLightboxProject = null;
let currentGalleryIndex = 0;
let currentLightboxGallery = [];

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
    
    // 1. Custom Mouse Cursor Engine
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
        
        if(cursor) {
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        }
    });

    const render = () => {
        if (!document.body.classList.contains('modal-open')) {
            outlineX = lerp(outlineX, mouseX, 0.15);
            outlineY = lerp(outlineY, mouseY, 0.15);
            if(outline) {
                outline.style.left = outlineX + 'px';
                outline.style.top = outlineY + 'px';
            }

            glowX = lerp(glowX, mouseX, 0.05);
            glowY = lerp(glowY, mouseY, 0.05);
            if(bgGlow) {
                bgGlow.style.left = glowX + 'px';
                bgGlow.style.top = glowY + 'px';
            }
        }

        requestAnimationFrame(render);
    };
    render();

    // Attach hover effects using high-performance event delegation (avoids memory leaks & repeated listener loops)
    document.addEventListener('mouseover', (e) => {
        if (outline && e.target.closest('a, button, select, .filter-pill, .modal-thumb, .modal-close-btn, .modal-nav-arrow, .card-action-btn, .case-study-item-card, .case-study-back-btn, .edition-card-media, .bento-card-thumb, .physical-img-wrap')) {
            outline.classList.add('hover-active');
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (outline && e.target.closest('a, button, select, .filter-pill, .modal-thumb, .modal-close-btn, .modal-nav-arrow, .card-action-btn, .case-study-item-card, .case-study-back-btn, .edition-card-media, .bento-card-thumb, .physical-img-wrap')) {
            outline.classList.remove('hover-active');
        }
    });

    attachCursorHovers = function() {
        // No-op for backwards compatibility with dynamic renders
    };

    // 2. Magnetic Buttons Engine (Replaced with rock-solid CSS hover)
    function attachMagnetics() {
        // Disabled JS magnetic movement to guarantee 100% reliable physical button clickability
    }
    attachMagnetics();

    // 3. 3D Tilt Cards (Replaced with high-performance, non-interfering CSS hover glow)
    attachTiltCards = function() {
        // Disabled JS 3D matrix transforms on mousemove so clicks are never cancelled
    };
    attachTiltCards();

    // 4. Scroll Reveal via IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                
                if (entry.target.classList.contains('reveal-mask')) {
                    const lines = entry.target.querySelectorAll('.reveal-line');
                    lines.forEach(l => l.classList.add('is-revealed'));
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-mask, .reveal-up');
    revealElements.forEach(el => scrollObserver.observe(el));

    // 5. Active Section Navigation Spy
    const navItems = document.querySelectorAll('.nav-links .nav-item[data-section]');
    const sectionsToWatch = ['work', 'motion-editing', 'perspectives', 'archive', 'creator-journey', 'physical-creations', 'recognition', 'contact'];
    
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 220;
        let currentSectionId = '';

        sectionsToWatch.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                const top = el.offsetTop;
                const height = el.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                    currentSectionId = id;
                }
            }
        });

        navItems.forEach(item => {
            const sec = item.getAttribute('data-section');
            if (sec === currentSectionId || (sec === 'work' && (currentSectionId === 'motion-editing' || currentSectionId === 'archive'))) {
                item.classList.add('is-active');
            } else {
                item.classList.remove('is-active');
            }
        });
    });

    // 6. Smooth Scroll Anchor Click
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            if (targetId.startsWith('#case-study/') || targetId.startsWith('#works/')) return; // Handled by router
            
            try {
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    closeMobileMenu();
                }
            } catch (err) {
                // Ignore invalid query selectors
            }
        });
    });

    // 7. Mobile Navigation Drawer Controls
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
        if(mobileMenu) {
            mobileMenu.classList.remove('is-active');
            document.body.style.overflow = 'initial';
        }
    }

    // 8. Global Draggable Quick Button with LocalStorage Persistence
    const dragBtn = document.getElementById('draggable-btn');
    if (dragBtn) {
        const STORAGE_KEY = 'nitish_draggable_btn_pos';
        const dragBtnText = dragBtn.querySelector('.btn-text');

        const contactHref = dragBtn.getAttribute('href') || 'contact/index.html';

        function updateDragBtn() {
            if (dragBtnText) dragBtnText.textContent = 'CONNECT';
            dragBtn.href = contactHref;
            dragBtn.removeAttribute('target');
        }
        updateDragBtn();
        window.addEventListener('resize', updateDragBtn);

        // Restore saved position on page load and reload
        function restoreDragBtnPosition() {
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
            } catch (e) {}
        }
        restoreDragBtnPosition();
        window.addEventListener('resize', restoreDragBtnPosition);
        
        let isDragging = false;
        let hasDragged = false;
        let startX = 0, startY = 0;
        let initialLeft = 0, initialTop = 0;

        function startDrag(clientX, clientY) {
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

        function moveDrag(clientX, clientY) {
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

        function stopDrag() {
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

        // Mouse listeners
        dragBtn.addEventListener('mousedown', (e) => {
            startDrag(e.clientX, e.clientY);
            e.preventDefault();
        });
        window.addEventListener('mousemove', (e) => moveDrag(e.clientX, e.clientY));
        window.addEventListener('mouseup', stopDrag);

        // Touch listeners
        dragBtn.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                startDrag(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: true });
        window.addEventListener('touchmove', (e) => {
            if (isDragging && e.touches.length === 1) {
                moveDrag(e.touches[0].clientX, e.touches[0].clientY);
                if (e.cancelable) e.preventDefault();
            }
        }, { passive: false });
        window.addEventListener('touchend', stopDrag);

        dragBtn.addEventListener('click', (e) => {
            if (hasDragged) {
                e.preventDefault();
                e.stopPropagation();
            }
        });
    }

    // 9. Render Motion Section (Unbroken 3-col Grid)
    renderMotionSection();

    // 10. Creative Archive 6 Primary Tabs & Preview
    setupPrimaryArchiveTabs();
    setupArchiveActionButton();
    renderHomepageArchive();

    // 11. Behance Link Configuration Binding
    setupBehanceLink();

    // 12. Centralized Hash Routing (Flagship Case Studies & Route Redirects)
    handleHashRouting();
    window.addEventListener('hashchange', handleHashRouting);
    window.addEventListener('popstate', handleHashRouting);

    // 13. Keyboard Navigation for Modals & Overlays
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
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
   CENTRALIZED HASH ROUTER
   Supports:
   - #case-study/:editionId (e.g. #case-study/idt3, #case-study/idt4)
   - #works/:route (cleanly redirects to works/[category]/index.html)
   ========================================================= */

function handleHashRouting() {
    const hash = window.location.hash;
    
    if (hash.startsWith('#case-study/')) {
        const editionId = hash.replace('#case-study/', '').trim();
        openCaseStudy(editionId, false);
    } else if (hash.startsWith('#works/')) {
        const route = hash.replace('#works/', '').trim();
        const catMap = {
            'all': 'works/index.html',
            'branding': 'works/branding/index.html',
            'graphic-design': 'works/graphics/index.html',
            'graphics': 'works/graphics/index.html',
            'motion': 'works/motionvideo/index.html',
            '3d': 'works/mockups/index.html',
            'social': 'works/socialcontent/index.html'
        };
        const dest = catMap[route] || 'works/index.html';
        window.location.href = dest;
    } else {
        const csView = document.getElementById('caseStudyView');
        if (csView && csView.classList.contains('is-active')) {
            csView.classList.remove('is-active');
        }
        document.body.style.overflow = 'initial';
    }
}

/* =========================================================
   FLAGSHIP CASE STUDY ROUTER & OVERLAY ENGINE
   ========================================================= */

function openCaseStudy(editionId, updateHash = true) {
    if (editionId === 'idt3') {
        window.location.href = 'ideathon/3/index.html';
        return;
    }
    if (editionId === 'idt4') {
        window.location.href = 'ideathon/4/index.html';
        return;
    }

    if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.flagshipCaseStudies) return;
    const study = PORTFOLIO_DATA.flagshipCaseStudies[editionId];
    if (!study) return;

    if (updateHash) {
        window.history.pushState(null, '', `#case-study/${editionId}`);
    }

    const overlay = document.getElementById('caseStudyView');
    const container = document.getElementById('caseStudyContent');
    if (!overlay || !container) return;

    // Render Case Study View
    container.innerHTML = `
        <div class="case-study-hero">
            <img src="${study.heroImage}" alt="${study.title}">
        </div>

        <div style="margin-bottom: 2.5rem;">
            <span class="project-tag" style="color: var(--accent-cyan); font-size: 0.9rem;">SIT IDEATHON EDITION ${study.edition} CASE STUDY</span>
            <h1 class="display-sm" style="margin-top: 0.5rem; margin-bottom: 0.5rem;">${study.title}</h1>
            <p style="font-size: 1.25rem; color: var(--accent-indigo); font-weight: 600;">${study.subtitle}</p>
        </div>

        <div class="case-study-meta-grid">
            <div>
                <h3 style="font-size: 1.4rem; color: #fff; margin-bottom: 1rem;">Project Overview</h3>
                <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.8; margin-bottom: 1.5rem;">
                    ${study.overview}
                </p>

                <h4 style="font-size: 1.1rem; color: #fff; margin-bottom: 0.8rem; text-transform: uppercase;">Key Creative Responsibilities</h4>
                <ul class="case-study-list" style="margin-bottom: 1.5rem;">
                    ${study.responsibilities.map(r => `<li>${r}</li>`).join('')}
                </ul>
            </div>

            <div class="meta-box">
                <div class="meta-row">
                    <div class="meta-label">Timeframe</div>
                    <div class="meta-val">${study.timeframe}</div>
                </div>
                <div class="meta-row">
                    <div class="meta-label">Official Committee Role</div>
                    <div class="meta-val">${study.officialRole}</div>
                </div>
                <div class="meta-row">
                    <div class="meta-label">Creative Responsibility</div>
                    <div class="meta-val">${study.creativeRole}</div>
                </div>
                <div class="meta-row">
                    <div class="meta-label">Institution</div>
                    <div class="meta-val">Siliguri Institute of Technology</div>
                </div>
            </div>
        </div>

        <!-- Video Feature -->
        <div class="case-study-section">
            <h3 class="case-study-section-title">Event Video Production</h3>
            <p class="case-study-section-desc">
                Cut in Premiere Pro, coordinating pacing, typography, and music synchronization.
            </p>
            <div class="tilt-wrapper" style="max-width: 900px;" onclick="openVideoModal('${study.youtubeId}', '${study.videoTitle.replace(/'/g, "\\'")}')">
                <div class="tilt-element glass-card" style="padding: 0; border-radius: 20px;">
                    <div style="position: relative; aspect-ratio: 16/9; overflow: hidden;">
                        <img src="${study.heroImage}" alt="${study.videoTitle}" style="width: 100%; height: 100%; object-fit: cover;">
                        <div class="video-play-badge">
                            <div class="video-play-btn">
                                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" style="transform: translateX(2px);"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div style="padding: 1.5rem 2rem; display: flex; justify-content: space-between; align-items: center; background: var(--bg-darker);">
                        <div>
                            <h4 style="font-size: 1.2rem; color: #fff;">${study.videoTitle}</h4>
                            <span style="font-family: monospace; font-size: 0.8rem; color: var(--accent-cyan);">CLICK TO PLAY FULL RESOLUTION</span>
                        </div>
                        <span class="btn sm secondary"><span class="btn-text">PLAY VIDEO</span></span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Grouped Deliverable Galleries -->
        ${study.sections.map((sec, secIdx) => `
            <div class="case-study-section">
                <h3 class="case-study-section-title">${sec.heading}</h3>
                <p class="case-study-section-desc">${sec.description}</p>
                <div class="case-study-gallery-grid">
                    ${sec.items.map((item, itemIdx) => `
                        <div class="case-study-item-card" onclick="openDirectGalleryModal('${editionId}', ${secIdx}, ${itemIdx})">
                            <img src="${item.src}" alt="${item.title}" loading="lazy">
                            <div class="case-study-item-info">
                                <div class="case-study-item-title">${item.title}</div>
                                <div class="case-study-item-type">${item.type}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('')}

        <!-- Publications & Documents (if available) -->
        ${study.publications && study.publications.length > 0 ? `
            <div class="case-study-section">
                <h3 class="case-study-section-title">Official Event Publications</h3>
                <p class="case-study-section-desc">Documented publications and compilations from the event.</p>
                <div>
                    ${study.publications.map(pub => `
                        <div class="case-study-doc-card">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                                <div>
                                    <div style="font-weight: 700; color: #fff;">${pub.title}</div>
                                    <span style="font-family: monospace; font-size: 0.75rem; color: var(--text-muted);">${pub.type}</span>
                                </div>
                            </div>
                            <a href="${pub.path}" target="_blank" class="btn sm secondary">
                                <span class="btn-text">OPEN DOCUMENT ↗</span>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}

        <!-- Closing Contribution Summary -->
        <div class="case-study-section" style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--glass-border); border-radius: 20px; padding: 2.5rem;">
            <h3 style="font-size: 1.3rem; color: var(--accent-cyan); margin-bottom: 0.8rem; text-transform: uppercase;">Closing Summary of Contribution</h3>
            <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.8;">
                ${study.summary}
            </p>
        </div>
    `;

    overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    overlay.scrollTop = 0;
    attachCursorHovers();
}

function closeCaseStudy() {
    const overlay = document.getElementById('caseStudyView');
    if (!overlay) return;
    overlay.classList.remove('is-active');
    document.body.style.overflow = 'initial';

    // If current hash is a case study, revert to #work without reloading
    if (window.location.hash.startsWith('#case-study/')) {
        window.history.pushState(null, '', '#work');
    }
}

// Open high-res lightbox from a specific case-study section
function openDirectGalleryModal(editionId, secIdx, itemIdx) {
    if (!PORTFOLIO_DATA.flagshipCaseStudies) return;
    const study = PORTFOLIO_DATA.flagshipCaseStudies[editionId];
    if (!study || !study.sections[secIdx]) return;

    const allItems = study.sections[secIdx].items;
    openCustomGalleryModal(allItems, itemIdx, `${study.title} — ${study.sections[secIdx].heading}`);
}

/* =========================================================
   MOTION SECTION RENDERER (Unbroken 3-Column Grid)
   ========================================================= */

function renderMotionSection() {
    const container = document.getElementById('motionGridContainer') || document.getElementById('motionGroupsContainer');
    if (!container || typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.motionWorks) return;

    container.innerHTML = PORTFOLIO_DATA.motionWorks.map(item => {
        const isLocal = !!item.localVideo;
        const ytId = item.youtubeId || (item.link ? extractYouTubeId(item.link) : '');
        const ytUrl = item.link || (ytId ? `https://youtu.be/${ytId}` : '#');
        const clickParam = isLocal 
            ? `'${item.localVideo}', '${item.title.replace(/'/g, "\\'")}', true`
            : `'${ytId}', '${item.title.replace(/'/g, "\\'")}', false`;

        return `
            <div class="tilt-wrapper">
                <div class="tilt-element glass-card motion-card">
                    <div class="motion-card-thumb" onclick="openVideoModal(${clickParam})" style="cursor: pointer;">
                        <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
                        <div class="video-play-badge">
                            <div class="video-play-btn">
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style="transform: translateX(2px);"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div class="motion-card-body">
                        <div>
                            <span class="motion-card-meta">${item.category} • ${item.year}</span>
                            <h4 class="motion-card-title">${item.title}</h4>
                            <p class="motion-card-desc">${item.description}</p>
                        </div>
                        <div class="motion-card-tags">
                            ${(item.techniques || []).map(t => `<span class="tag-tech">${t}</span>`).join('')}
                        </div>
                        <div class="motion-card-actions" style="display: flex; gap: 0.6rem; margin-top: 1.25rem; flex-wrap: wrap;">
                            <button onclick="openVideoModal(${clickParam})" class="btn sm secondary" style="flex: 1; padding: 0.6rem 0.8rem; font-size: 0.76rem;">
                                <span class="btn-text">PLAY IN POPUP ▶</span>
                            </button>
                            <a href="${ytUrl}" target="_blank" rel="noopener noreferrer" class="btn sm" style="background: rgba(255,255,255,0.06); border: 1px solid var(--glass-border); padding: 0.6rem 0.9rem; font-size: 0.76rem;" onclick="event.stopPropagation();">
                                <span class="btn-text">YOUTUBE ↗</span>
                            </a>
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
   CREATIVE ARCHIVE: 6 PRIMARY TABS (4-Card Homepage Preview)
   ========================================================= */

const categoryActionLabels = {
    'featured': 'EXPLORE ALL WORKS →',
    'branding': 'EXPLORE ALL BRANDING WORKS →',
    'graphics': 'EXPLORE ALL GRAPHIC DESIGN WORKS →',
    'motion': 'EXPLORE ALL MOTION WORKS →',
    '3d': 'EXPLORE ALL 3D WORKS →',
    'social': 'EXPLORE ALL SOCIAL CONTENT →'
};

const categoryToWorksHref = {
    'featured': 'works/index.html',
    'branding': 'works/branding/index.html',
    'graphics': 'works/graphics/index.html',
    'motion': 'works/motionvideo/index.html',
    '3d': 'works/mockups/index.html',
    'social': 'works/socialcontent/index.html'
};

function setupPrimaryArchiveTabs() {
    const pills = document.querySelectorAll('.filter-bar-primary .filter-pill');
    pills.forEach(pill => {
        pill.addEventListener('click', function() {
            pills.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            
            currentPrimaryCategory = this.getAttribute('data-category') || 'featured';
            renderHomepageArchive();
        });
    });
}

function setupArchiveActionButton() {
    // Native multi-page link navigation to clean folder directories
}

function renderHomepageArchive() {
    if(typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.projects) return;

    let displayProjects = [];

    if (currentPrimaryCategory === 'featured') {
        // Up to 4 curated projects representing the strongest and broadest range
        const featuredIds = ['tech-channel-logo', 'laldingpuii-logo', 'sit-technovision-posters', 'gta6-disc'];
        displayProjects = featuredIds
            .map(id => PORTFOLIO_DATA.projects.find(p => p.id === id))
            .filter(Boolean);

        // Fallback if any ID is missing
        if (displayProjects.length < 4) {
            const extras = PORTFOLIO_DATA.projects.filter(p => !displayProjects.some(dp => dp.id === p.id));
            displayProjects = displayProjects.concat(extras.slice(0, 4 - displayProjects.length));
        }
    } else {
        displayProjects = PORTFOLIO_DATA.projects.filter(p => {
            return (p.categories && p.categories.includes(currentPrimaryCategory))
                || (p.primaryCategory === currentPrimaryCategory);
        }).slice(0, 4);
    }

    renderBentoGrid(displayProjects, 'bentoGridContainer');

    // Update bottom action button text and destination URL
    const actionBtn = document.getElementById('archiveCategoryActionBtn');
    const actionBtnText = document.getElementById('archiveActionBtnText');
    if (actionBtn) {
        actionBtn.href = categoryToWorksHref[currentPrimaryCategory] || 'works/index.html';
    }
    if (actionBtnText) {
        actionBtnText.textContent = categoryActionLabels[currentPrimaryCategory] || 'EXPLORE ALL WORKS →';
    }
}

/* =========================================================
   DEDICATED CATEGORY PAGES / REDIRECT STUBS
   Directs any residual calls to clean folder directories
   ========================================================= */

function openCategoryPage(routeKey) {
    const catMap = {
        'all': 'works/index.html',
        'branding': 'works/branding/index.html',
        'graphic-design': 'works/graphics/index.html',
        'graphics': 'works/graphics/index.html',
        'motion': 'works/motionvideo/index.html',
        '3d': 'works/mockups/index.html',
        'social': 'works/socialcontent/index.html'
    };
    const dest = catMap[routeKey] || 'works/index.html';
    window.location.href = dest;
}

function closeCategoryPage() {
    // No-op for MPA architecture
}

/* =========================================================
   GENERIC ROW-MAJOR CARD GRID RENDERER
   Fills consecutive cells without gaps or offsets
   ========================================================= */

function renderBentoGrid(projects, containerId = 'bentoGridContainer') {
    const container = document.getElementById(containerId);
    if(!container) return;

    container.innerHTML = '';

    if(projects.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; padding: 4rem 2rem; text-align: center; border: 1px dashed var(--glass-border); border-radius: 16px;">
                <p style="font-size: 1.2rem; color: var(--text-muted); margin-bottom: 1rem;">No projects match this category at this time.</p>
            </div>
        `;
        return;
    }

    projects.forEach((p) => {
        const box = document.createElement('div');
        box.className = 'bento-box tilt-wrapper';
        
        let clickHandler = '';
        let actionMarkup = '';
        const escapedTitle = p.title.replace(/'/g, "\\'");

        if (p.isCaseStudy && p.caseStudyEdition) {
            const csUrl = p.caseStudyEdition === 'idt3' ? 'ideathon/3/index.html' : 'ideathon/4/index.html';
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
            clickHandler = `openVideoModal('${p.localVideo}', '${escapedTitle}', true)`;
            actionMarkup = `
                <button type="button" onclick="openVideoModal('${p.localVideo}', '${escapedTitle}', true)" class="btn sm secondary card-action-btn">
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

        box.innerHTML = `
            <div class="tilt-element glass-card bento-card">
                <div class="bento-card-thumb" onclick="${clickHandler}" style="cursor: pointer;">
                    <img src="${p.thumbnail}" alt="${p.title}" loading="lazy">
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
                            ${(p.tools || []).slice(0, 3).map(t => `<span class="tag-tech">${t}</span>`).join('')}
                        </div>
                        ${actionMarkup}
                    </div>
                </div>
            </div>
        `;
        container.appendChild(box);
    });

    attachTiltCards();
    attachCursorHovers();
}

/* =========================================================
   BEHANCE PROFILE LINK BINDING
   ========================================================= */

function setupBehanceLink() {
    const behanceBtn = document.getElementById('behanceProfileLink');
    if (!behanceBtn) return;

    const behanceUrl = "https://www.behance.net/technologyhell";
    behanceBtn.href = behanceUrl;
    behanceBtn.target = '_blank';
    behanceBtn.rel = 'noopener noreferrer';
    behanceBtn.removeAttribute('onclick');
    behanceBtn.onclick = null;
}

/* =========================================================
   LIGHTBOX & GALLERY MODAL
   ========================================================= */

function openProjectLightbox(projectId) {
    if(typeof PORTFOLIO_DATA === 'undefined') return;
    
    let project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project && PORTFOLIO_DATA.physicalProjects) {
        project = PORTFOLIO_DATA.physicalProjects.find(p => p.id === projectId);
    }
    if (!project) return;

    const gallery = project.gallery && project.gallery.length > 0 
        ? project.gallery 
        : [{ src: project.thumbnail, original: project.original || project.thumbnail, title: project.title, type: project.categoryLabel }];

    openCustomGalleryModal(gallery, 0, project.title, project.description, project.categoryLabel, project.year, project.tools);
}

function openCustomGalleryModal(galleryItems, initialIdx = 0, title = '', desc = '', category = '', year = '', tools = []) {
    currentLightboxGallery = galleryItems;
    currentGalleryIndex = initialIdx;

    const modal = document.getElementById('lightboxModal');
    if (!modal) return;

    const curItem = galleryItems[initialIdx] || {};
    const titleEl = document.getElementById('lightboxTitle');
    const descEl = document.getElementById('lightboxDescription');
    const catEl = document.getElementById('lightboxCategoryTag');

    if (titleEl) titleEl.innerText = curItem.title || title || 'Creative Asset';
    if (descEl) descEl.innerText = curItem.caption || desc || '';
    if (catEl) catEl.innerText = curItem.type || (category && year ? `${category} • ${year}` : (category || 'Creative Asset'));

    const toolsContainer = document.getElementById('lightboxTools');
    if (toolsContainer) {
        toolsContainer.innerHTML = (tools || []).map(t => `<span class="tag-tech">${t}</span>`).join('') || '';
    }

    const extraActions = document.getElementById('lightboxExtraActions');
    if (extraActions) {
        extraActions.innerHTML = '';
    }

    const prevBtn = document.getElementById('lightboxPrevBtn');
    const nextBtn = document.getElementById('lightboxNextBtn');
    const thumbStrip = document.getElementById('lightboxThumbStrip');

    if (galleryItems.length > 1) {
        if (prevBtn) prevBtn.style.display = 'flex';
        if (nextBtn) nextBtn.style.display = 'flex';
        if (thumbStrip) {
            thumbStrip.style.display = 'flex';
            thumbStrip.innerHTML = galleryItems.map((item, idx) => `
                <div onclick="setLightboxSlide(${idx})" class="modal-thumb ${idx === initialIdx ? 'active' : ''}">
                    <img src="${item.src}" alt="${item.title || ''}" loading="lazy">
                </div>
            `).join('');
        }
    } else {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        if (thumbStrip) {
            thumbStrip.style.display = 'none';
            thumbStrip.innerHTML = '';
        }
    }

    setLightboxSlide(initialIdx);
    modal.classList.add('is-active');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
}

function openIdeathonLightbox(edition) {
    const modal = document.getElementById('lightboxModal');
    if (!modal) return;

    let title = '';
    let desc = '';
    let category = '';
    let year = '';
    let tools = [];
    let imgSrc = '';
    let exploreHref = '';
    let exploreLabel = '';
    let ytUrl = '';

    if (edition === 3 || edition === '3' || edition === '3.0') {
        imgSrc = '_CreativeWorkCollection/IDT/3/id3_montagethumbnail.jpg';
        title = 'SIT Ideathon 3.0 — Event Identity & Production';
        category = 'Flagship Case Study';
        year = '2024–2025';
        desc = 'Visual identity and event collateral including promotional flyers, stage banners, logo treatments, tiered participant credentials, dummy checks, and the event recap video.';
        tools = ['Vice President', 'Brand Identity', 'Stage Banners', 'Premiere Pro'];
        exploreHref = 'ideathon/3/index.html';
        exploreLabel = 'EXPLORE 3.0 →';
        ytUrl = 'https://youtu.be/fYRBwF7v4Vk';
    } else if (edition === 4 || edition === '4' || edition === '4.0') {
        imgSrc = '_CreativeWorkCollection/IDT/4/id4_backdropbanner.jpg';
        title = 'SIT Ideathon 4.0 — Brand System & Production';
        category = 'Flagship Case Study';
        year = '2025–2026';
        desc = 'Visual identity and complete collateral suite including grand stage backdrops, red-carpet photography walls, posters, credentials, digital displays, publications, and opening montage.';
        tools = ['President', 'Stage Backdrops', 'Digital Displays', 'Opening Montage'];
        exploreHref = 'ideathon/4/index.html';
        exploreLabel = 'EXPLORE 4.0 →';
        ytUrl = 'https://youtu.be/3i-MoULXUFg';
    } else {
        return;
    }

    currentLightboxGallery = [{ src: imgSrc, original: imgSrc, title: title, type: category }];
    currentGalleryIndex = 0;

    const mainImg = document.getElementById('lightboxMainImage');
    const titleEl = document.getElementById('lightboxTitle');
    const descEl = document.getElementById('lightboxDescription');
    const catEl = document.getElementById('lightboxCategoryTag');
    const rawLink = document.getElementById('lightboxRawLink');
    const toolsContainer = document.getElementById('lightboxTools');
    const prevBtn = document.getElementById('lightboxPrevBtn');
    const nextBtn = document.getElementById('lightboxNextBtn');
    const thumbStrip = document.getElementById('lightboxThumbStrip');
    const extraActions = document.getElementById('lightboxExtraActions');

    if (mainImg) {
        mainImg.src = imgSrc;
        mainImg.alt = title;
    }
    if (titleEl) titleEl.innerText = title;
    if (descEl) descEl.innerText = desc;
    if (catEl) catEl.innerText = `${category} • ${year}`;
    if (rawLink) rawLink.href = imgSrc;

    if (toolsContainer) {
        toolsContainer.innerHTML = tools.map(t => `<span class="tag-tech">${t}</span>`).join('');
    }

    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    if (thumbStrip) {
        thumbStrip.style.display = 'none';
        thumbStrip.innerHTML = '';
    }

    if (extraActions) {
        extraActions.innerHTML = `
            <a href="${exploreHref}" class="btn sm primary">
                <span class="btn-text">${exploreLabel}</span>
            </a>
            <a href="${ytUrl}" target="_blank" rel="noopener noreferrer" class="btn sm secondary">
                <span class="btn-text">YOUTUBE ↗</span>
            </a>
            <a href="https://ideathon.pages.dev" target="_blank" rel="noopener noreferrer" class="btn sm secondary" style="border-color: rgba(0, 242, 254, 0.4); color: var(--accent-cyan);">
                <span class="btn-text">VISIT SITE ↗</span>
            </a>
        `;
    }

    modal.classList.add('is-active');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
}

function setLightboxSlide(index) {
    if (!currentLightboxGallery || currentLightboxGallery.length === 0) return;
    
    currentGalleryIndex = (index + currentLightboxGallery.length) % currentLightboxGallery.length;
    const current = currentLightboxGallery[currentGalleryIndex];

    const mainImg = document.getElementById('lightboxMainImage');
    const rawLink = document.getElementById('lightboxRawLink');

    if (mainImg) {
        mainImg.decoding = 'async';
        mainImg.src = current.src;
        mainImg.alt = current.title || 'Artwork Preview';
    }
    if (rawLink) {
        rawLink.href = current.original || current.src;
    }

    const titleEl = document.getElementById('lightboxTitle');
    const descEl = document.getElementById('lightboxDescription');
    const catEl = document.getElementById('lightboxCategoryTag');
    if (titleEl && current.title) titleEl.innerText = current.title;
    if (descEl && current.caption) descEl.innerText = current.caption;
    if (catEl && current.type) catEl.innerText = current.type;

    const thumbs = document.querySelectorAll('#lightboxThumbStrip .modal-thumb');
    thumbs.forEach((t, i) => {
        if (i === currentGalleryIndex) t.classList.add('active');
        else t.classList.remove('active');
    });

    // Asynchronously preload adjacent gallery images to ensure instantaneous navigation without lag
    if (currentLightboxGallery.length > 1) {
        const nextItem = currentLightboxGallery[(currentGalleryIndex + 1) % currentLightboxGallery.length];
        const prevItem = currentLightboxGallery[(currentGalleryIndex - 1 + currentLightboxGallery.length) % currentLightboxGallery.length];
        if (nextItem && nextItem.src) { const imgN = new Image(); imgN.src = nextItem.src; }
        if (prevItem && prevItem.src) { const imgP = new Image(); imgP.src = prevItem.src; }
    }
}

function nextLightboxSlide() {
    setLightboxSlide(currentGalleryIndex + 1);
}

function prevLightboxSlide() {
    setLightboxSlide(currentGalleryIndex - 1);
}

function closeLightboxModal() {
    const modal = document.getElementById('lightboxModal');
    if(!modal) return;
    modal.classList.remove('is-active');
    document.body.classList.remove('modal-open');
    const mainImg = document.getElementById('lightboxMainImage');
    if (mainImg) mainImg.src = '';
    const extraActions = document.getElementById('lightboxExtraActions');
    if (extraActions) extraActions.innerHTML = '';
    currentLightboxGallery = [];
    document.body.style.overflow = 'initial';
}

/* =========================================================
   VIDEO MODAL ENGINE (YouTube Embeds & Native MP4s)
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

    if (titleEl) titleEl.innerText = title || 'Video Player';

    if (isLocal || (typeof source === 'string' && source.endsWith('.mp4'))) {
        wrap.innerHTML = `
            <video controls autoplay class="video-native-player" src="${source}" playsinline></video>
        `;
        if (ytLinkEl) ytLinkEl.style.display = 'none';
    } else {
        const ytId = extractYouTubeId(source);
        wrap.innerHTML = `
            <iframe id="videoIframe" src="https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1" title="${title || 'Video Player'}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="width: 100%; height: 100%; border: none;"></iframe>
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
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const wrap = document.getElementById('videoPlayerWrap');
    if (wrap) wrap.innerHTML = '';
    if (modal) modal.classList.remove('is-active');
    document.body.classList.remove('modal-open');
    if (!document.getElementById('caseStudyView')?.classList.contains('is-active')) {
        document.body.style.overflow = 'initial';
    }
}

