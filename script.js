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

// Helper references for interaction bindings
let attachTiltCards = () => {};
let attachCursorHovers = () => {};

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

    // Attach hover effects to interactive elements
    attachCursorHovers = function() {
        const hoverElements = document.querySelectorAll('a, button, select, .hover-trigger, .tilt-wrapper, .filter-pill, .modal-thumb, .modal-close-btn, .modal-nav-arrow, .case-study-item-card, .case-study-back-btn');
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

    // 2. Magnetic Buttons Engine (Hover proximity physics)
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

    // 3. 3D Tilt Cards (Vanilla Tilt Math + Glare Effect)
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

    // 8. Draggable Quick Button
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
        
        let isDragging = false;
        let hasDragged = false;
        let startX, startY, initialLeft, initialTop;

        dragBtn.addEventListener('mousedown', (e) => {
            isDragging = true;
            hasDragged = false;
            dragBtn.classList.add('is-dragging');
            e.preventDefault();
            
            startX = e.clientX;
            startY = e.clientY;
            
            const rect = dragBtn.getBoundingClientRect();
            initialLeft = rect.left;
            initialTop = rect.top;
            
            dragBtn.style.right = 'auto';
            dragBtn.style.bottom = 'auto';
            dragBtn.style.left = initialLeft + 'px';
            dragBtn.style.top = initialTop + 'px';
        });

        window.addEventListener('mousemove', (e) => {
            if(!isDragging) return;
            
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            
            if(Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                hasDragged = true;
            }
            
            dragBtn.style.left = (initialLeft + dx) + 'px';
            dragBtn.style.top = (initialTop + dy) + 'px';
        });

        window.addEventListener('mouseup', () => {
            if(isDragging) {
                isDragging = false;
                dragBtn.classList.remove('is-dragging');
            }
        });

        dragBtn.addEventListener('click', (e) => {
            if(hasDragged) e.preventDefault();
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

    // 12. Centralized Hash Routing (Flagship Case Studies & Category Collection Pages)
    handleHashRouting();
    window.addEventListener('hashchange', handleHashRouting);
    window.addEventListener('popstate', handleHashRouting);

    // 13. Keyboard Navigation for Modals & Overlays
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            closeCategoryPage();
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
   - #works/:route (e.g. #works/all, #works/branding, #works/graphic-design, #works/motion, #works/3d, #works/social)
   ========================================================= */

function handleHashRouting() {
    const hash = window.location.hash;
    
    if (hash.startsWith('#case-study/')) {
        const editionId = hash.replace('#case-study/', '').trim();
        // Close category overlay if open
        const catView = document.getElementById('categoryPageView');
        if (catView && catView.classList.contains('is-active')) {
            catView.classList.remove('is-active');
        }
        openCaseStudy(editionId, false);
    } else if (hash.startsWith('#works/')) {
        const route = hash.replace('#works/', '').trim();
        // Close case study overlay if open
        const csView = document.getElementById('caseStudyView');
        if (csView && csView.classList.contains('is-active')) {
            csView.classList.remove('is-active');
        }
        openCategoryPage(route, false);
    } else {
        // If neither overlay route is present, ensure both are closed
        const csView = document.getElementById('caseStudyView');
        if (csView && csView.classList.contains('is-active')) {
            csView.classList.remove('is-active');
        }
        const catView = document.getElementById('categoryPageView');
        if (catView && catView.classList.contains('is-active')) {
            catView.classList.remove('is-active');
        }
        document.body.style.overflow = 'initial';
    }
}

/* =========================================================
   FLAGSHIP CASE STUDY ROUTER & OVERLAY ENGINE
   ========================================================= */

function openCaseStudy(editionId, updateHash = true) {
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
        const clickParam = isLocal 
            ? `'${item.localVideo}', '${item.title.replace(/'/g, "\\'")}', true`
            : `'${item.youtubeId}', '${item.title.replace(/'/g, "\\'")}', false`;

        return `
            <div class="tilt-wrapper">
                <div class="tilt-element glass-card motion-card">
                    <div class="glare"></div>
                    <div class="motion-card-thumb" onclick="openVideoModal(${clickParam})">
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

const categoryToRoute = {
    'featured': 'all',
    'branding': 'branding',
    'graphics': 'graphic-design',
    'motion': 'motion',
    '3d': '3d',
    'social': 'social'
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
    const btn = document.getElementById('archiveCategoryActionBtn');
    if (!btn) return;

    btn.addEventListener('click', () => {
        navigateToCategory(currentPrimaryCategory);
    });
}

function navigateToCategory(catKey) {
    const route = categoryToRoute[catKey] || 'all';
    window.location.hash = `#works/${route}`;
}

function renderHomepageArchive() {
    if(typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.projects) return;

    let displayProjects = [];

    if (currentPrimaryCategory === 'featured') {
        // Up to 4 curated projects representing the strongest and broadest range
        const featuredIds = ['idt4-identity', 'valo-stay', 'gta6-disc', 'idt5-rockstar'];
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

    // Update bottom action button text
    const actionBtnText = document.getElementById('archiveActionBtnText');
    if (actionBtnText) {
        actionBtnText.textContent = categoryActionLabels[currentPrimaryCategory] || 'EXPLORE ALL WORKS →';
    }
}

/* =========================================================
   DEDICATED CATEGORY PAGES / ROUTING ENGINE
   Routes: /works/all, /works/branding, /works/graphic-design,
           /works/motion, /works/3d, /works/social
   ========================================================= */

const routeDefinitions = {
    'all': {
        title: 'COMPLETE CREATIVE WORKS',
        desc: 'Comprehensive catalogue spanning visual identity systems, motion designs, editorial typography, 3D explorations, and event collateral.',
        filter: () => true
    },
    'branding': {
        title: 'BRANDING & IDENTITY ARCHIVE',
        desc: 'Complete visual identity systems, event emblems, promotional collateral packages, and brand style guides.',
        filter: (p) => (p.categories && p.categories.includes('branding')) || p.primaryCategory === 'branding'
    },
    'graphic-design': {
        title: 'GRAPHIC DESIGN ARCHIVE',
        desc: 'Posters, social banners, typography experiments, and key visual artworks.',
        filter: (p) => (p.categories && p.categories.includes('graphics')) || p.primaryCategory === 'graphics'
    },
    'graphics': {
        title: 'GRAPHIC DESIGN ARCHIVE',
        desc: 'Posters, social banners, typography experiments, and key visual artworks.',
        filter: (p) => (p.categories && p.categories.includes('graphics')) || p.primaryCategory === 'graphics'
    },
    'motion': {
        title: 'MOTION & VIDEO ARCHIVE',
        desc: 'Rhythm editing, cinematic typography, trailer pacing, speed ramping, and kinetic visual storytelling.',
        filter: (p) => (p.categories && p.categories.includes('motion')) || p.primaryCategory === 'motion'
    },
    '3d': {
        title: '3D & SPATIAL MOCKUPS ARCHIVE',
        desc: 'Hard-surface modelling, Blender compositions, device mockups, retail packaging concepts, and CAD prototypes.',
        filter: (p) => (p.categories && p.categories.includes('3d')) || p.primaryCategory === '3d'
    },
    'social': {
        title: 'SOCIAL CONTENT & CREATOR ASSETS',
        desc: 'High-CTR YouTube thumbnails, digital marketing collateral, channel branding, and creator graphics.',
        filter: (p) => (p.categories && p.categories.includes('social')) || p.primaryCategory === 'social'
    }
};

function openCategoryPage(routeKey, updateHash = true) {
    if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.projects) return;

    const routeInfo = routeDefinitions[routeKey] || routeDefinitions['all'];
    const canonicalRoute = routeKey === 'graphics' ? 'graphic-design' : (routeDefinitions[routeKey] ? routeKey : 'all');

    if (updateHash) {
        window.history.pushState(null, '', `#works/${canonicalRoute}`);
    }

    const overlay = document.getElementById('categoryPageView');
    const titleEl = document.getElementById('categoryPageTitle');
    const descEl = document.getElementById('categoryPageDesc');
    const badgeEl = document.getElementById('categoryPageCountBadge');

    if (!overlay) return;

    // Filter all matching projects
    let matchingProjects = PORTFOLIO_DATA.projects.filter(routeInfo.filter);

    // If 3d category, include physical projects without duplicating IDs
    if (routeKey === '3d' && PORTFOLIO_DATA.physicalProjects) {
        PORTFOLIO_DATA.physicalProjects.forEach(pp => {
            if (!matchingProjects.some(p => p.id === pp.id)) {
                matchingProjects.push(pp);
            }
        });
    }

    if (titleEl) titleEl.textContent = routeInfo.title;
    if (descEl) descEl.textContent = routeInfo.desc;
    if (badgeEl) badgeEl.textContent = `${matchingProjects.length} PROJECTS IN COLLECTION`;

    renderBentoGrid(matchingProjects, 'categoryGridContainer');

    overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    overlay.scrollTop = 0;
    attachCursorHovers();
}

function closeCategoryPage() {
    const overlay = document.getElementById('categoryPageView');
    if (!overlay) return;

    overlay.classList.remove('is-active');
    document.body.style.overflow = 'initial';

    // If current hash is a category route, revert cleanly to #archive
    if (window.location.hash.startsWith('#works/')) {
        window.history.pushState(null, '', '#archive');
    }
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
   BEHANCE PROFILE LINK BINDING
   ========================================================= */

function setupBehanceLink() {
    const behanceBtn = document.getElementById('behanceProfileLink');
    if (!behanceBtn) return;

    const configuredUrl = PORTFOLIO_DATA?.profile?.socials?.behance;
    if (configuredUrl && configuredUrl !== '#') {
        behanceBtn.href = configuredUrl;
        behanceBtn.target = '_blank';
    } else {
        behanceBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Behance URL Configuration Point: Set your actual Behance profile link in assets/portfolio-data.js (profile.socials.behance).");
        });
    }
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
   VIDEO MODAL ENGINE (YouTube Embeds & Native MP4s)
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
