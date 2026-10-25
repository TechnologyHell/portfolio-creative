/* =========================================================
   DEDICATED WORKS PAGE JS - Nitish Singh Creative Portfolio
   Multi-Page Application: All Works & Archive Repository
   ========================================================= */

// Linear Interpolation for smooth follow/easing
const lerp = (a, b, n) => (1 - n) * a + n * b;

// Global state for works page
let currentWorksCategory = 'all';
let currentLightboxGallery = [];
let currentGalleryIndex = 0;

let attachTiltCards = () => {};
let attachCursorHovers = () => {};

const categoryMeta = {
    'all': {
        title: 'All Creative Works.',
        label: 'SHOWING ALL WORKS',
        badge: 'ALL CATEGORIES',
        desc: 'Comprehensive repository spanning visual identity systems, motion design, posters, 3D mockups, physical prototypes, and digital creator content.',
        filter: () => true
    },
    'branding': {
        title: 'Branding & Identity.',
        label: 'SHOWING BRANDING & IDENTITY',
        badge: 'BRANDING & IDENTITY',
        desc: 'Complete visual identity systems, event emblems, promotional collateral packages, and brand style guides.',
        filter: (p) => (p.categories && p.categories.includes('branding')) || p.primaryCategory === 'branding'
    },
    'graphics': {
        title: 'Graphic Design.',
        label: 'SHOWING GRAPHIC DESIGN',
        badge: 'GRAPHIC DESIGN',
        desc: 'Posters, social banners, editorial layouts, typography experiments, and key visual artworks.',
        filter: (p) => (p.categories && p.categories.includes('graphics')) || p.primaryCategory === 'graphics'
    },
    'motion': {
        title: 'Motion & Video.',
        label: 'SHOWING MOTION & VIDEO',
        badge: 'MOTION & VIDEO',
        desc: 'Rhythm editing, cinematic typography, trailer pacing, speed ramping, and kinetic visual storytelling.',
        filter: (p) => (p.categories && p.categories.includes('motion')) || p.primaryCategory === 'motion'
    },
    '3d': {
        title: '3D & Mockups.',
        label: 'SHOWING 3D & MOCKUPS',
        badge: '3D & PACKAGING',
        desc: 'Hard-surface modelling, Blender compositions, device mockups, retail packaging concepts, and CAD prototypes.',
        filter: (p) => (p.categories && p.categories.includes('3d')) || p.primaryCategory === '3d'
    },
    'social': {
        title: 'Social Content.',
        label: 'SHOWING SOCIAL CONTENT',
        badge: 'PRODUCT & SOCIAL',
        desc: 'High-CTR YouTube thumbnails, digital marketing collateral, channel branding, and creator graphics.',
        filter: (p) => (p.categories && p.categories.includes('social')) || p.primaryCategory === 'social'
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Mouse Cursor Engine
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

        requestAnimationFrame(render);
    };
    render();

    // Attach hover effects
    attachCursorHovers = function() {
        const hoverElements = document.querySelectorAll('a, button, select, .hover-trigger, .tilt-wrapper, .filter-pill, .modal-thumb, .modal-close-btn, .modal-nav-arrow, .case-study-item-card, .back-btn-pill');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                if(outline) outline.classList.add('hover-active');
            });
            el.addEventListener('mouseleave', () => {
                if(outline) outline.classList.remove('hover-active');
            });
        });
    };
    attachCursorHovers();

    // 2. Magnetic Buttons
    function attachMagnetics() {
        const magnetics = document.querySelectorAll('.magnetic, .magnetic-huge');
        magnetics.forEach(btn => {
            btn.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const strength = this.getAttribute('data-magnetic-strength') || 20; 
                const hx = rect.left + rect.width / 2;
                const hy = rect.top + rect.height / 2;
                const dx = e.clientX - hx;
                const dy = e.clientY - hy;
                const maxPx = parseInt(strength);
                const x = (dx / (rect.width / 2)) * maxPx;
                const y = (dy / (rect.height / 2)) * maxPx;

                this.style.transform = `translate(${x}px, ${y}px)`;
            });

            btn.addEventListener('mouseleave', function() {
                 this.style.transform = 'translate(0px, 0px)';
            });
        });
    }
    attachMagnetics();

    // 3. 3D Tilt Cards
    attachTiltCards = function() {
        const cards = document.querySelectorAll('.tilt-wrapper');
        cards.forEach(card => {
            const tiltEl = card.querySelector('.tilt-element');
            const glare = card.querySelector('.glare');
            if(!tiltEl) return;

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const xc = (x / rect.width) * 2 - 1;
                const yc = (y / rect.height) * 2 - 1;
                const maxTilt = 8;
                const rotateX = yc * -maxTilt;
                const rotateY = xc * maxTilt;

                tiltEl.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                
                if (glare) {
                    const glareX = (x / rect.width) * 100;
                    const glareY = (y / rect.height) * 100;
                    glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18) 0%, transparent 60%)`;
                }
            });

            card.addEventListener('mouseleave', () => {
                tiltEl.style.transform = `rotateX(0deg) rotateY(0deg)`;
                if(glare) {
                    glare.style.background = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)`;
                }
            });
        });
    };
    attachTiltCards();

    // 4. Mobile Menu Drawer
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

    // 5. Draggable Quick Button
    const dragBtn = document.getElementById('draggable-btn');
    if(dragBtn) {
        const dragBtnText = dragBtn.querySelector('.btn-text');
        function updateDragBtn() {
            if (window.innerWidth <= 768) {
                dragBtnText.textContent = 'RESUME';
                dragBtn.href = 'assets/Nitish_Singh_Creative_Resume.pdf';
                dragBtn.target = '_blank';
            } else {
                dragBtnText.textContent = 'CONNECT';
                dragBtn.href = 'mailto:nitishsinghslg@gmail.com';
                dragBtn.removeAttribute('target');
            }
        }
        updateDragBtn();
        window.addEventListener('resize', updateDragBtn);
    }

    // 6. Setup Category Filter Tabs
    setupCategoryPills();

    // 7. Initial Load from Query Params
    const initialCategory = getCategoryFromUrl();
    setActiveCategory(initialCategory, false);

    // 8. Popstate listener for back/forward navigation
    window.addEventListener('popstate', () => {
        const cat = getCategoryFromUrl();
        setActiveCategory(cat, false);
    });

    // 9. Keyboard controls
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

function getCategoryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    if (!cat || cat === 'all' || cat === 'featured') return 'all';
    if (cat === 'graphic-design') return 'graphics';
    return categoryMeta[cat] ? cat : 'all';
}

function setupCategoryPills() {
    const pills = document.querySelectorAll('.filter-bar-primary .filter-pill');
    pills.forEach(pill => {
        pill.addEventListener('click', function() {
            const cat = this.getAttribute('data-category') || 'all';
            setActiveCategory(cat, true);
        });
    });
}

function setActiveCategory(catKey, updateUrl = true) {
    currentWorksCategory = catKey;

    // Update active pill state
    document.querySelectorAll('.filter-bar-primary .filter-pill').forEach(pill => {
        if (pill.getAttribute('data-category') === catKey) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });

    // Update URL if requested
    if (updateUrl) {
        const newUrl = catKey === 'all' ? 'works.html' : `works.html?category=${catKey}`;
        window.history.pushState(null, '', newUrl);
    }

    renderWorksGrid(catKey);
}

function renderWorksGrid(catKey) {
    if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.projects) return;

    const meta = categoryMeta[catKey] || categoryMeta['all'];
    const container = document.getElementById('worksGridContainer');
    const descEl = document.getElementById('worksCategoryDescription');
    const labelEl = document.getElementById('worksCategoryLabel');
    const countBadge = document.getElementById('worksCountBadge');
    const filterIndicator = document.getElementById('worksActiveFilterIndicator');

    if (descEl) descEl.textContent = meta.desc;
    if (labelEl) labelEl.textContent = meta.label;
    if (filterIndicator) filterIndicator.textContent = meta.badge;

    // Filter projects matching category
    let projects = PORTFOLIO_DATA.projects.filter(meta.filter);

    // If '3d' or 'all', append physical creations without duplicates
    if ((catKey === '3d' || catKey === 'all') && PORTFOLIO_DATA.physicalProjects) {
        PORTFOLIO_DATA.physicalProjects.forEach(pp => {
            if (!projects.some(p => p.id === pp.id)) {
                projects.push(pp);
            }
        });
    }

    if (countBadge) {
        countBadge.textContent = `${projects.length} PROJECTS IN COLLECTION`;
    }

    if (!container) return;
    container.innerHTML = '';

    if (projects.length === 0) {
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
        if (p.isCaseStudy && p.caseStudyEdition) {
            clickHandler = `openCaseStudy('${p.caseStudyEdition}')`;
        } else if (p.youtubeId) {
            clickHandler = `openVideoModal('${p.youtubeId}', '${p.title.replace(/'/g, "\\'")}', false)`;
        } else if (p.localVideo) {
            clickHandler = `openVideoModal('${p.localVideo}', '${p.title.replace(/'/g, "\\'")}', true)`;
        } else {
            clickHandler = `openProjectLightbox('${p.id}')`;
        }

        box.innerHTML = `
            <div class="tilt-element glass-card bento-card" onclick="${clickHandler}">
                <div class="glare"></div>
                <div class="bento-card-thumb">
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
                    <div class="bento-card-info">
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
                        <span class="bento-card-action">VIEW PROJECT ↗</span>
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
    document.getElementById('lightboxTitle').innerText = title || galleryItems[initialIdx].title;
    document.getElementById('lightboxDescription').innerText = desc || '';
    document.getElementById('lightboxCategoryTag').innerText = category && year ? `${category} • ${year}` : (category || 'Creative Asset');

    const toolsContainer = document.getElementById('lightboxTools');
    if (toolsContainer) {
        toolsContainer.innerHTML = (tools || []).map(t => `<span class="tag-tech">${t}</span>`).join('') || '';
    }

    const prevBtn = document.getElementById('lightboxPrevBtn');
    const nextBtn = document.getElementById('lightboxNextBtn');
    const thumbStrip = document.getElementById('lightboxThumbStrip');

    if (galleryItems.length > 1) {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
        thumbStrip.style.display = 'flex';
        
        thumbStrip.innerHTML = galleryItems.map((item, idx) => `
            <div onclick="setLightboxSlide(${idx})" class="modal-thumb ${idx === initialIdx ? 'active' : ''}">
                <img src="${item.src}" alt="${item.title || ''}">
            </div>
        `).join('');
    } else {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        thumbStrip.style.display = 'none';
        thumbStrip.innerHTML = '';
    }

    setLightboxSlide(initialIdx);
    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
}

function setLightboxSlide(index) {
    if (!currentLightboxGallery || currentLightboxGallery.length === 0) return;
    
    currentGalleryIndex = (index + currentLightboxGallery.length) % currentLightboxGallery.length;
    const current = currentLightboxGallery[currentGalleryIndex];

    const mainImg = document.getElementById('lightboxMainImage');
    const rawLink = document.getElementById('lightboxRawLink');

    mainImg.src = current.src;
    mainImg.alt = current.title || 'Artwork Preview';
    rawLink.href = current.original || current.src;

    const thumbs = document.querySelectorAll('#lightboxThumbStrip .modal-thumb');
    thumbs.forEach((t, i) => {
        if (i === currentGalleryIndex) t.classList.add('active');
        else t.classList.remove('active');
    });
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
    document.getElementById('lightboxMainImage').src = '';
    currentLightboxGallery = [];
    document.body.style.overflow = 'initial';
}

/* =========================================================
   VIDEO MODAL ENGINE
   ========================================================= */

function openVideoModal(source, title, isLocal = false) {
    const modal = document.getElementById('videoModal');
    const wrap = document.getElementById('videoPlayerWrap');
    document.getElementById('videoModalTitle').innerText = title;

    if (isLocal || source.endsWith('.mp4')) {
        wrap.innerHTML = `
            <video controls autoplay class="video-native-player" src="${source}" playsinline></video>
        `;
    } else {
        wrap.innerHTML = `
            <iframe id="videoIframe" src="https://www.youtube.com/embed/${source}?autoplay=1&rel=0" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
    }

    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const wrap = document.getElementById('videoPlayerWrap');
    if(wrap) wrap.innerHTML = '';
    if(modal) modal.classList.remove('is-active');
    document.body.style.overflow = 'initial';
}

/* =========================================================
   CASE STUDY OVERLAY ENGINE (FOR WORKS PAGE)
   ========================================================= */

function openCaseStudy(editionId) {
    if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.flagshipCaseStudies) return;
    const study = PORTFOLIO_DATA.flagshipCaseStudies[editionId];
    if (!study) return;

    const overlay = document.getElementById('caseStudyView');
    const container = document.getElementById('caseStudyContent');
    if (!overlay || !container) return;

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
                    <div class="glare"></div>
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
}

function openDirectGalleryModal(editionId, secIdx, itemIdx) {
    if (!PORTFOLIO_DATA.flagshipCaseStudies) return;
    const study = PORTFOLIO_DATA.flagshipCaseStudies[editionId];
    if (!study || !study.sections[secIdx]) return;

    const allItems = study.sections[secIdx].items;
    openCustomGalleryModal(allItems, itemIdx, `${study.title} — ${study.sections[secIdx].heading}`);
}
