/**
 * =========================================================================
 * MAIN APPLICATION LOGIC
 * =========================================================================
 * Formatted and structured with rich animations, 3D card tilt,
 * command palette, certificate modal viewer, and toast notifications.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Dynamic Renderers from PORTFOLIO_DATA
    renderHero();
    renderSkills();
    renderProjects();
    renderCertificates();
    renderAchievements();
    renderCV();
    renderEducation();
    renderTraining();
    renderServices();
    renderContact();

    // 2. Initialize Interactive Features & Animations
    initTypewriter();
    initCommandPalette();
    initScrollReveal();
    initNavScrollSpy();
    initTiltEffect();
    initMobileNav();
    initToastSystem();
    initModals();
});

/* ==========================================================================
   1. HERO SECTION RENDERER
   ========================================================================== */
function renderHero() {
    const p = PORTFOLIO_DATA.personal;
    
    // Photo
    const photoEl = document.getElementById('hero-photo');
    if (photoEl && p.photoUrl) {
        photoEl.src = p.photoUrl;
        photoEl.alt = `${p.name} ${p.surname}`;
    }

    // Name & Subtitle
    const nameEl = document.getElementById('hero-name');
    if (nameEl) nameEl.textContent = `${p.name} ${p.surname}`;

    const bioEl = document.getElementById('hero-bio');
    if (bioEl) bioEl.textContent = p.tagline || p.heroBio;

    // Status indicator
    const statusTextEl = document.getElementById('status-text');
    if (statusTextEl && p.status) {
        statusTextEl.textContent = p.status.text;
    }

    // Stats Grid
    const statsContainer = document.getElementById('hero-stats');
    if (statsContainer && PORTFOLIO_DATA.stats) {
        statsContainer.innerHTML = PORTFOLIO_DATA.stats.map(s => `
            <div class="stat-item">
                <span class="stat-value text-gradient-cyan">${s.value}</span>
                <span class="stat-label">${s.label}</span>
            </div>
        `).join('');
    }

    // Terminal in hero visual
    const termCodeEl = document.getElementById('terminal-content');
    if (termCodeEl) {
        termCodeEl.innerHTML = `
            <div><span class="t-prompt">$</span> <span class="t-cmd">whoami</span></div>
            <div class="t-out"><span class="t-key">engineer</span>: <span class="t-str">"${p.name} ${p.surname}"</span></div>
            <div class="t-out"><span class="t-key">role</span>: <span class="t-str">"${p.title}"</span></div>
            <div class="t-out"><span class="t-key">location</span>: <span class="t-str">"${p.location}"</span></div>
            <div class="t-out"><span class="t-key">status</span>: <span class="t-str">"Ready for impact 🚀"</span></div>
            <div style="margin-top: 8px;"><span class="t-prompt">$</span> <span class="t-cmd">cat skills.json</span></div>
            <div class="t-out"><span class="t-key">stack</span>: [<span class="t-str">"React"</span>, <span class="t-str">"Node.js"</span>, <span class="t-str">"Python"</span>, <span class="t-str">"MongoDB"</span>]</div>
            <div class="t-cursor-line"><span class="t-prompt">$</span> <span class="typing-cursor"></span></div>
        `;
    }
}

/* ==========================================================================
   2. SKILLS SECTION (BENTO GRID + CATEGORIES)
   ========================================================================== */
function renderSkills() {
    const container = document.getElementById('skills-grid');
    if (!container || !PORTFOLIO_DATA.skills) return;

    const bento = PORTFOLIO_DATA.skills.bento || [];
    container.innerHTML = bento.map((cat, idx) => `
        <div class="glass-card skill-bento-card reveal delay-${idx + 1}">
            <div class="skill-bento-header">
                <div class="skill-bento-icon"><i class="${cat.icon}"></i></div>
                <h3 class="skill-bento-title">${cat.title}</h3>
            </div>
            <div class="skill-badges-container">
                ${cat.items.map(item => `
                    <div class="skill-pill">
                        <span>${item.name}</span>
                        <span class="skill-pill-badge">${item.badge}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

/* ==========================================================================
   3. PROJECTS SECTION
   ========================================================================== */
function renderProjects(category = 'all') {
    const container = document.getElementById('projects-grid');
    if (!container || !PORTFOLIO_DATA.projects) return;

    const items = PORTFOLIO_DATA.projects.filter(p => 
        category === 'all' ? true : p.category === category
    );

    container.innerHTML = items.map((project, idx) => `
        <div class="glass-card project-card reveal delay-${(idx % 3) + 1}">
            <div class="project-img-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy" />
                <div class="project-overlay"></div>
                <span class="project-status-tag ${project.status.toLowerCase()}">${project.status}</span>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.tagline}</p>
                <ul class="project-highlights-list">
                    ${project.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
                <div class="project-tech-row">
                    ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                <div class="project-links">
                    <button class="btn btn-secondary btn-sm preview-project-btn" data-project-id="${project.id}">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                    <div style="display: flex; gap: 14px; align-items: center;">
                        ${project.githubUrl ? `
                            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-action-link" title="Source Code">
                                <i class="fab fa-github fa-lg"></i>
                            </a>
                        ` : ''}
                        ${project.liveUrl ? `
                            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-action-link" title="Live Preview">
                                <i class="fas fa-external-link-alt fa-lg"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Attach click for project details modal
    container.querySelectorAll('.preview-project-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.dataset.projectId;
            openProjectModal(projectId);
        });
    });

    initScrollReveal();
    initTiltEffect();
}

/* ==========================================================================
   4. CERTIFICATES & ACHIEVEMENTS (WITH VERIFICATION & MODAL)
   ========================================================================== */
function renderCertificates() {
    const container = document.getElementById('certs-grid');
    if (!container || !PORTFOLIO_DATA.certificates) return;

    container.innerHTML = PORTFOLIO_DATA.certificates.map((cert, idx) => `
        <div class="glass-card cert-card reveal delay-${(idx % 3) + 1}" data-cert-id="${cert.id || idx}">
            <div>
                <div class="cert-header">
                    <div class="cert-icon"><i class="${cert.badgeIcon}"></i></div>
                    <span class="cert-year">${cert.date}</span>
                </div>
                <h3 class="cert-title">${cert.title}</h3>
                <div class="cert-issuer">${cert.issuer}</div>
                <div class="cert-tags" style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px;">
                    ${cert.tags ? cert.tags.map(t => `<span class="tech-tag" style="font-size: 0.72rem; padding: 2px 6px;">${t}</span>`).join('') : ''}
                </div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 14px;">
                ${cert.verifyUrl && cert.verifyUrl !== '#' ? `
                    <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="cert-link" title="Verify Certificate">
                        Verify Credential <i class="fas fa-arrow-up-right-from-square" style="font-size: 0.75rem;"></i>
                    </a>
                ` : `
                    <span style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">
                        In Progress
                    </span>
                `}
                ${cert.localPdfUrl ? `
                    <button class="btn btn-secondary btn-sm preview-cert-btn" data-cert-id="${cert.id || idx}" style="padding: 4px 10px; font-size: 0.76rem;" title="View Certificate Preview">
                        <i class="fas fa-eye"></i> View
                    </button>
                ` : ''}
            </div>
        </div>
    `).join('');

    // Attach click for certificate preview modal
    container.querySelectorAll('.preview-cert-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const certId = btn.dataset.certId;
            openCertificateModal(certId);
        });
    });
}

function renderAchievements() {
    const container = document.getElementById('achievements-grid');
    if (!container || !PORTFOLIO_DATA.achievements) return;

    container.innerHTML = PORTFOLIO_DATA.achievements.map((ach, idx) => `
        <div class="glass-card achievement-card reveal delay-${idx + 1}">
            <div class="achievement-metric text-gradient-cyan">${ach.metric}</div>
            <h4 class="achievement-title">${ach.title}</h4>
            <p class="achievement-desc">${ach.description}</p>
        </div>
    `).join('');
}

/* ==========================================================================
   5. CURRICULUM VITAE (CV)
   ========================================================================== */
function renderCV() {
    const container = document.getElementById('cv-content');
    if (!container || !PORTFOLIO_DATA.cv) return;

    const cv = PORTFOLIO_DATA.cv;
    container.innerHTML = `
        <div class="cv-info">
            <h3 class="cv-title">${cv.title}</h3>
            <p class="cv-desc">${cv.description}</p>
            <div style="font-family: var(--font-mono); font-size: 0.84rem; color: var(--text-secondary);">
                <span style="color: var(--accent-cyan);">Focus:</span> ${cv.previewSummary?.focus || 'Software Engineering'}
            </div>
        </div>
        <div class="cv-actions">
            <button id="view-cv-btn" class="btn btn-secondary shimmer-effect">
                <i class="fas fa-eye"></i> View CV
            </button>
            <a href="${cv.downloadUrl || 'assets/Piyush_Gupta_Resume.pdf'}" download class="btn btn-primary shimmer-effect">
                <i class="fas fa-download"></i> Download CV
            </a>
        </div>
    `;
}

/* ==========================================================================
   6. EDUCATION & TRAINING
   ========================================================================== */
function renderEducation() {
    const container = document.getElementById('edu-grid');
    if (!container || !PORTFOLIO_DATA.education) return;

    container.innerHTML = PORTFOLIO_DATA.education.map((edu, idx) => `
        <div class="glass-card edu-card reveal delay-${idx + 1}">
            <span class="edu-period">${edu.period}</span>
            <h3 class="edu-degree">${edu.degree}</h3>
            <div class="edu-institution">${edu.institution}</div>
            ${edu.score ? `<div class="edu-score text-gradient-cyan">${edu.score}</div>` : ''}
            <p class="edu-desc">${edu.description}</p>
        </div>
    `).join('');
}

function renderTraining() {
    const container = document.getElementById('training-grid');
    if (!container || !PORTFOLIO_DATA.training) return;

    container.innerHTML = PORTFOLIO_DATA.training.map((tr, idx) => `
        <div class="glass-card edu-card reveal delay-${idx + 1}">
            <span class="edu-period">${tr.period}</span>
            <h3 class="edu-degree">${tr.title}</h3>
            <div class="edu-institution">${tr.organization}</div>
            <p class="edu-desc">${tr.description}</p>
        </div>
    `).join('');
}

/* ==========================================================================
   7. SERVICES ("WHAT CAN I HELP WITH")
   ========================================================================== */
function renderServices() {
    const container = document.getElementById('services-grid');
    if (!container || !PORTFOLIO_DATA.services) return;

    container.innerHTML = PORTFOLIO_DATA.services.map((svc, idx) => `
        <div class="glass-card service-card reveal delay-${idx + 1}">
            <div class="service-icon"><i class="${svc.icon}"></i></div>
            <h3 class="service-title">${svc.title}</h3>
            <p class="service-desc">${svc.description}</p>
        </div>
    `).join('');
}

/* ==========================================================================
   8. CONTACT SECTION
   ========================================================================== */
function renderContact() {
    const p = PORTFOLIO_DATA.personal;
    const c = PORTFOLIO_DATA.contact || {};

    const emailEl = document.getElementById('contact-email-text');
    if (emailEl) emailEl.textContent = c.email || p.email;

    const phoneEl = document.getElementById('contact-phone-text');
    if (phoneEl) phoneEl.textContent = c.phone || p.phone;

    const locEl = document.getElementById('contact-location-text');
    if (locEl) locEl.textContent = c.location || p.location;

    // Social Chips
    const socialChips = document.getElementById('social-chips');
    if (socialChips && p.socialLinks) {
        socialChips.innerHTML = p.socialLinks.map(s => `
            <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-chip">
                <i class="${s.icon}"></i> ${s.platform}
            </a>
        `).join('');
    }

    // 1-Click Copy Buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.copyTarget;
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                navigator.clipboard.writeText(targetEl.textContent.trim()).then(() => {
                    showToast(`Copied to clipboard: ${targetEl.textContent.trim()}`, "success");
                }).catch(() => {
                    showToast("Failed to copy", "error");
                });
            }
        });
    });

    // Contact Form Handler with FormSubmit AJAX Delivery + Mailto Fallback
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('form-submit-btn');
    const submitText = document.getElementById('submit-btn-text');
    const statusMsg = document.getElementById('form-status-msg');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('form-name').value.trim();
            const email = document.getElementById('form-email').value.trim();
            const message = document.getElementById('form-message').value.trim();

            if (!name || !email || !message) {
                showToast("Please fill in all required fields.", "warning");
                return;
            }

            // Set Loading state
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.7';
            }
            if (submitText) submitText.textContent = "Sending Message...";
            if (statusMsg) {
                statusMsg.style.display = 'none';
                statusMsg.textContent = '';
            }

            const targetEmail = c.email || p.email || 'piyushgbra@gmail.com';

            try {
                const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
                    method: "POST",
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        _subject: `New Portfolio Message from ${name}`,
                        message: message,
                        _captcha: "false"
                    })
                });

                if (response.ok) {
                    showToast(`Thank you, ${name}! Your message has been sent.`, "success");
                    if (statusMsg) {
                        statusMsg.style.display = 'block';
                        statusMsg.style.color = '#34d399';
                        statusMsg.innerHTML = `<i class="fas fa-check-circle"></i> Message sent successfully! I will get back to you soon.`;
                    }
                    form.reset();
                } else {
                    throw new Error("FormSubmit delivery failed");
                }
            } catch (err) {
                console.warn("AJAX submission failed, falling back to mailto client:", err);
                const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent("Portfolio Message from " + name)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
                window.location.href = mailtoUrl;
                
                showToast(`Opening your email client to send message...`, "info");
                if (statusMsg) {
                    statusMsg.style.display = 'block';
                    statusMsg.style.color = '#38bdf8';
                    statusMsg.innerHTML = `<i class="fas fa-envelope-open-text"></i> Email client launched! Alternatively, email directly to <strong>${targetEmail}</strong>.`;
                }
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                }
                if (submitText) submitText.textContent = "Send Message";
            }
        });
    }
}

/* ==========================================================================
   9. TYPEWRITER EFFECT
   ========================================================================== */
function initTypewriter() {
    const el = document.getElementById('typing-role');
    if (!el || !PORTFOLIO_DATA.personal.roles) return;

    const roles = PORTFOLIO_DATA.personal.roles;
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentRole = roles[roleIdx];

        if (isDeleting) {
            el.textContent = currentRole.substring(0, charIdx - 1);
            charIdx--;
            typeSpeed = 45;
        } else {
            el.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIdx === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2200;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

/* ==========================================================================
   10. COMMAND PALETTE (CTRL + K)
   ========================================================================== */
function initCommandPalette() {
    const overlay = document.getElementById('cmd-palette-modal');
    const input = document.getElementById('cmd-input');
    const list = document.getElementById('cmd-list');
    const triggerBtn = document.getElementById('cmd-palette-trigger');
    const closeBtn = document.getElementById('cmd-close-btn');

    if (!overlay || !input || !list) return;

    const commands = [
        { name: "About / Overview", action: () => scrollToSection('about'), icon: "fas fa-user", shortcut: "A" },
        { name: "Technical Arsenal (Skills)", action: () => scrollToSection('skills'), icon: "fas fa-layer-group", shortcut: "S" },
        { name: "Things I've Built (Projects)", action: () => scrollToSection('projects'), icon: "fas fa-folder-open", shortcut: "P" },
        { name: "Certifications & Milestones", action: () => scrollToSection('certificates'), icon: "fas fa-award", shortcut: "C" },
        { name: "Curriculum Vitae (CV)", action: () => scrollToSection('cv'), icon: "fas fa-file-lines", shortcut: "R" },
        { name: "Academic Background", action: () => scrollToSection('education'), icon: "fas fa-graduation-cap", shortcut: "E" },
        { name: "Services", action: () => scrollToSection('services'), icon: "fas fa-handshake", shortcut: "V" },
        { name: "Get in Touch", action: () => scrollToSection('contact'), icon: "fas fa-envelope", shortcut: "M" },
        { name: "Copy Email Address", action: () => {
            navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
            showToast("Email copied to clipboard!", "success");
        }, icon: "fas fa-copy", shortcut: "E" }
    ];

    function renderCommandList(query = '') {
        const filtered = commands.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));
        if (filtered.length === 0) {
            list.innerHTML = `<div style="padding: 20px; text-align: center; color: var(--text-muted);">No matching commands found.</div>`;
            return;
        }

        list.innerHTML = filtered.map((cmd, idx) => `
            <li class="cmd-item ${idx === 0 ? 'selected' : ''}" data-cmd-idx="${idx}">
                <div class="cmd-item-left">
                    <i class="${cmd.icon} cmd-item-icon"></i>
                    <span>${cmd.name}</span>
                </div>
                <span class="cmd-item-key">${cmd.shortcut}</span>
            </li>
        `).join('');

        list.querySelectorAll('.cmd-item').forEach((item, i) => {
            item.addEventListener('click', () => {
                filtered[i].action();
                closePalette();
            });
        });
    }

    function openPalette() {
        overlay.classList.add('active');
        input.value = '';
        renderCommandList();
        setTimeout(() => input.focus(), 50);
    }

    function closePalette() {
        overlay.classList.remove('active');
    }

    window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            overlay.classList.contains('active') ? closePalette() : openPalette();
        } else if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closePalette();
        }
    });

    if (triggerBtn) triggerBtn.addEventListener('click', openPalette);
    if (closeBtn) closeBtn.addEventListener('click', closePalette);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closePalette();
    });

    input.addEventListener('input', (e) => renderCommandList(e.target.value));
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ==========================================================================
   11. MODALS (PROJECT, CERTIFICATE & CV VIEWER)
   ========================================================================== */
function initModals() {
    // CV Modal Trigger
    document.addEventListener('click', (e) => {
        if (e.target.closest('#view-cv-btn')) {
            openCVModal();
        }
    });
}

function openCertificateModal(certId) {
    const cert = PORTFOLIO_DATA.certificates.find(c => (c.id === certId || String(PORTFOLIO_DATA.certificates.indexOf(c)) === String(certId)));
    if (!cert) return;

    let modal = document.getElementById('cert-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'cert-modal';
        modal.className = 'modal-overlay';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="modal-content" style="max-width: 720px; padding: 28px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 12px;">
                <div>
                    <h3 style="font-size: 1.3rem; font-weight: 700;">${cert.title}</h3>
                    <p style="font-size: 0.85rem; color: var(--accent-cyan); font-family: var(--font-mono);">${cert.issuer} • ${cert.date}</p>
                </div>
                <button id="cert-modal-close" style="background: none; border: none; color: var(--text-muted); font-size: 1.2rem; cursor: pointer;">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div style="width: 100%; height: 380px; border-radius: var(--border-radius-md); overflow: hidden; background: #000; margin-bottom: 20px; border: 1px solid var(--border-subtle);">
                <iframe src="${cert.localPdfUrl || cert.verifyUrl}" style="width: 100%; height: 100%; border: none;"></iframe>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
                <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">
                    Credential ID: <strong style="color: var(--text-main);">${cert.credentialId}</strong>
                </span>
                <div style="display: flex; gap: 10px;">
                    ${cert.localPdfUrl ? `
                        <a href="${cert.localPdfUrl}" download class="btn btn-secondary btn-sm">
                            <i class="fas fa-download"></i> Download PDF
                        </a>
                    ` : ''}
                    <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm shimmer-effect">
                        <i class="fas fa-arrow-up-right-from-square"></i> Open Official Verification Link
                    </a>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    modal.querySelector('#cert-modal-close').addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
}

function openProjectModal(projectId) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    let modal = document.getElementById('project-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'project-modal';
        modal.className = 'modal-overlay';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="modal-content" style="max-width: 650px;">
            <div style="position: relative; height: 230px;">
                <img src="${project.image}" alt="${project.title}" style="width:100%; height:100%; object-fit:cover;" />
                <button id="modal-close-btn" style="position:absolute; top:16px; right:16px; background:rgba(0,0,0,0.6); border:none; color:#fff; width:36px; height:36px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:1.1rem; backdrop-filter:blur(8px);">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div style="padding: 26px;">
                <h2 style="font-size: 1.45rem; margin-bottom: 6px;">${project.title}</h2>
                <p style="color: var(--accent-cyan); font-family: var(--font-mono); font-size: 0.85rem; margin-bottom: 14px;">
                    ${project.metrics || 'High Performance Architecture'}
                </p>
                <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 18px; font-size: 0.95rem;">
                    ${project.tagline}
                </p>
                <div style="margin-bottom: 18px;">
                    <h4 style="font-size: 0.95rem; margin-bottom: 8px; color: var(--text-main);">Key Highlights:</h4>
                    <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
                        ${project.highlights.map(h => `
                            <li style="font-size: 0.88rem; color: var(--text-secondary); padding-left: 18px; position: relative;">
                                <span style="position: absolute; left: 0; color: var(--accent-indigo);">▹</span> ${h}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 22px;">
                    ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                <div style="display: flex; gap: 14px; justify-content: flex-end;">
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                        <i class="fab fa-github"></i> GitHub Source
                    </a>
                    <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm shimmer-effect">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    modal.querySelector('#modal-close-btn').addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
}

function openCVModal() {
    const p = PORTFOLIO_DATA.personal;
    const cv = PORTFOLIO_DATA.cv;
    
    let modal = document.getElementById('cv-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'cv-modal';
        modal.className = 'modal-overlay';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="modal-content" style="max-width: 580px; padding: 28px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 12px;">
                <h3 style="font-size: 1.3rem; font-weight: 700;">${p.name} ${p.surname} — CV Summary</h3>
                <button id="cv-close-btn" style="background: none; border: none; color: var(--text-muted); font-size: 1.1rem; cursor: pointer;">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div style="display: flex; flex-direction: column; gap: 14px; font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 24px;">
                <div><strong style="color: var(--text-main);">Education:</strong> ${cv.previewSummary?.education || 'B.Tech CSE'}</div>
                <div><strong style="color: var(--text-main);">Institution:</strong> ${cv.previewSummary?.institution || 'Lovely Professional University in collab with GeeksforGeeks'}</div>
                <div><strong style="color: var(--text-main);">Core Focus:</strong> ${cv.previewSummary?.focus || 'Full-Stack Development'}</div>
                <div><strong style="color: var(--text-main);">Languages:</strong> ${cv.previewSummary?.languages || 'JavaScript, TypeScript, Python, C, C++, SQL'}</div>
                <div><strong style="color: var(--text-main);">Contact:</strong> ${p.email} | ${p.phone}</div>
            </div>
            <div style="display: flex; justify-content: flex-end; gap: 12px;">
                <a href="${cv.downloadUrl || 'assets/Piyush_Gupta_Resume.pdf'}" download class="btn btn-primary btn-sm shimmer-effect">
                    <i class="fas fa-download"></i> Download Full PDF
                </a>
            </div>
        </div>
    `;

    modal.classList.add('active');
    modal.querySelector('#cv-close-btn').addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
}

/* ==========================================================================
   12. 3D CARD TILT & SCROLL SPY
   ========================================================================== */
function initTiltEffect() {
    if (window.innerWidth < 992) return;

    document.querySelectorAll('.glass-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        });
    });
}

function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));
}

function initNavScrollSpy() {
    const header = document.querySelector('.header');
    const sections = ['about', 'skills', 'projects', 'certificates', 'cv', 'education', 'services', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        let currentSection = '';
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                const top = el.offsetTop - 120;
                const height = el.offsetHeight;
                if (window.scrollY >= top && window.scrollY < top + height) {
                    currentSection = id;
                }
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

function initMobileNav() {
    const toggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        toggle.querySelector('i').classList.toggle('fa-bars');
        toggle.querySelector('i').classList.toggle('fa-times');
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            toggle.querySelector('i').className = 'fas fa-bars';
        });
    });
}

/* ==========================================================================
   13. TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function initToastSystem() {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
}

function showToast(message, type = 'info') {
    const container = document.querySelector('.toast-container');
    if (!container) return;

    const iconMap = {
        success: 'fa-circle-check',
        error: 'fa-circle-exclamation',
        warning: 'fa-triangle-exclamation',
        info: 'fa-circle-info'
    };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas ${iconMap[type] || iconMap.info}" style="color: var(--accent-cyan);"></i>
        <span style="font-size: 0.9rem;">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toast-out 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        setTimeout(() => toast.remove(), 350);
    }, 3500);
}
