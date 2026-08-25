/**
 * =========================================================================
 * INTERACTIVE AMBIENT CANVAS BACKGROUND
 * =========================================================================
 * High-performance, lightweight particle constellation with ambient glow.
 * Smooth mouse reaction, responsive canvas resizing, low CPU footprint.
 */

(function () {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let animationFrameId;

    // Configuration
    const CONFIG = {
        particleCount: window.innerWidth < 768 ? 35 : 70,
        maxDistance: window.innerWidth < 768 ? 90 : 130,
        particleSpeed: 0.45,
        mouseRadius: 160,
        particleColor: 'rgba(99, 102, 241, 0.45)', // Indigo
        particleColorAlt: 'rgba(56, 189, 248, 0.45)', // Cyan
        lineColor: 'rgba(129, 140, 248, ', // Alpha appended dynamically
        glowColor: 'rgba(99, 102, 241, 0.15)'
    };

    const mouse = {
        x: null,
        y: null,
        targetX: null,
        targetY: null,
        radius: CONFIG.mouseRadius
    };

    class Particle {
        constructor() {
            this.reset(true);
        }

        reset(initial = false) {
            this.x = Math.random() * width;
            this.y = initial ? Math.random() * height : (Math.random() > 0.5 ? -10 : height + 10);
            this.vx = (Math.random() - 0.5) * CONFIG.particleSpeed;
            this.vy = (Math.random() - 0.5) * CONFIG.particleSpeed;
            this.radius = Math.random() * 2 + 1;
            this.baseRadius = this.radius;
            this.isAltColor = Math.random() > 0.5;
            this.alpha = Math.random() * 0.5 + 0.3;
            this.pulseSpeed = 0.02 + Math.random() * 0.02;
            this.pulsePhase = Math.random() * Math.PI * 2;
        }

        update() {
            // Pulse size & glow
            this.pulsePhase += this.pulseSpeed;
            this.radius = this.baseRadius + Math.sin(this.pulsePhase) * 0.5;

            // Velocity movement
            this.x += this.vx;
            this.y += this.vy;

            // Mouse interaction - gentle repulsion & connection
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * force * 1.8;
                    this.y -= Math.sin(angle) * force * 1.8;
                }
            }

            // Screen wrap
            if (this.x < -20) this.x = width + 20;
            if (this.x > width + 20) this.x = -20;
            if (this.y < -20) this.y = height + 20;
            if (this.y > height + 20) this.y = -20;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, Math.max(0.5, this.radius), 0, Math.PI * 2);
            ctx.fillStyle = this.isAltColor ? CONFIG.particleColorAlt : CONFIG.particleColor;
            ctx.shadowBlur = 8;
            ctx.shadowColor = this.isAltColor ? '#38bdf8' : '#6366f1';
            ctx.fill();
            ctx.shadowBlur = 0; // reset
        }
    }

    function init() {
        resize();
        particles = [];
        for (let i = 0; i < CONFIG.particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        CONFIG.particleCount = width < 768 ? 35 : 70;
        CONFIG.maxDistance = width < 768 ? 90 : 130;
    }

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            resize();
            if (particles.length < CONFIG.particleCount) {
                while (particles.length < CONFIG.particleCount) {
                    particles.push(new Particle());
                }
            } else if (particles.length > CONFIG.particleCount) {
                particles.length = CONFIG.particleCount;
            }
        }, 150);
    });

    window.addEventListener('mousemove', (e) => {
        mouse.targetX = e.clientX;
        mouse.targetY = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
        mouse.targetX = null;
        mouse.targetY = null;
    });

    function connectParticles() {
        const maxDist = CONFIG.maxDistance;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDist) {
                    const opacity = (1 - dist / maxDist) * 0.28;
                    ctx.beginPath();
                    ctx.strokeStyle = CONFIG.lineColor + opacity + ')';
                    ctx.lineWidth = 0.85;
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }

            // Also connect to mouse if close
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - particles[a].x;
                const dy = mouse.y - particles[a].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouse.radius) {
                    const opacity = (1 - dist / mouse.radius) * 0.35;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Smooth mouse lerping
        if (mouse.targetX !== null) {
            mouse.x += (mouse.targetX - mouse.x) * 0.1;
            mouse.y += (mouse.targetY - mouse.y) * 0.1;
        } else {
            mouse.x = null;
            mouse.y = null;
        }

        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }

        connectParticles();

        animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();
})();

