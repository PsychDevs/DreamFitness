// Shared site interactions
(function () {
    const q = (sel, ctx = document) => ctx.querySelector(sel);
    const qa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

    // Mobile nav toggle
    function initMobileNav() {
        const toggle = q("[data-nav-toggle]");
        const panel = q("[data-nav-panel]");
        if (!toggle || !panel) return;
        let lastFocus = null;

        function openNav() {
            lastFocus = document.activeElement;
            panel.setAttribute("data-open", "true");
            toggle.setAttribute("aria-expanded", "true");
            toggle.setAttribute("data-open", "true");
            panel.classList.remove("pointer-events-none", "opacity-0", "-translate-y-4");
            panel.classList.add("opacity-100", "translate-y-0");
            document.body.style.overflow = "hidden";
            // focus first link
            const firstLink = panel.querySelector("a");
            firstLink && firstLink.focus();
        }
        function closeNav() {
            panel.setAttribute("data-open", "false");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("data-open", "false");
            panel.classList.add("pointer-events-none", "opacity-0", "-translate-y-4");
            panel.classList.remove("opacity-100", "translate-y-0");
            document.body.style.overflow = "";
            lastFocus && lastFocus.focus();
        }
        function isOpen() {
            return panel.getAttribute("data-open") === "true";
        }

        toggle.addEventListener("click", () => {
            isOpen() ? closeNav() : openNav();
        });
        // Close on ESC
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && isOpen()) closeNav();
            if (e.key === "Tab" && isOpen()) {
                // basic focus trap within panel
                const focusables = panel.querySelectorAll("a, button");
                if (!focusables.length) return;
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        });
        // Click outside to close
        document.addEventListener("click", (e) => {
            if (!isOpen()) return;
            if (panel.contains(e.target) || toggle.contains(e.target)) return;
            closeNav();
        });
    }

    // Counter animation
    function initCounters() {
        const counters = qa(".counter[data-target]");
        if (!counters.length) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        observer.unobserve(el);
                        const target = parseFloat(el.getAttribute("data-target")) || 0;
                        const duration = 1600;
                        const start = performance.now();
                        const initial = parseFloat(el.textContent.replace(/[^0-9.]/g, "")) || 0;
                        function tick(now) {
                            const p = Math.min(1, (now - start) / duration);
                            const val = Math.floor(initial + (target - initial) * p);
                            el.textContent = val.toLocaleString();
                            if (p < 1) requestAnimationFrame(tick);
                            else el.classList.add("counter-done");
                        }
                        requestAnimationFrame(tick);
                    }
                });
            },
            { threshold: 0.4 }
        );
        counters.forEach((c) => observer.observe(c));
    }

    // Carousel swipe (single carousel expected)
    function initCarouselSwipe() {
        const track = q("#testimonial-track");
        if (!track) return;
        const container = track.parentElement;
        let startX = 0,
            current = 0,
            isDown = false;
        function activeIndex() {
            const w = container.clientWidth;
            return Math.round(Math.abs(parseFloat(getComputedStyle(track).transform.split(",")[4] || 0)) / w);
        }
        function go(i) {
            const slides = qa("#testimonial-track > div").length;
            i = (i + slides) % slides;
            current = i;
            track.style.transition = "transform .45s";
            track.style.transform = `translateX(-${i * 100}%)`;
            setTimeout(() => (track.style.transition = "none"), 500);
        }
        container.addEventListener(
            "touchstart",
            (e) => {
                startX = e.touches[0].clientX;
                isDown = true;
                track.style.transition = "none";
                current = activeIndex();
            },
            { passive: true }
        );
        container.addEventListener(
            "touchmove",
            (e) => {
                if (!isDown) return;
                const dx = e.touches[0].clientX - startX;
                const pct = dx / container.clientWidth;
                track.style.transform = `translateX(calc(-${current * 100}% + ${pct * 100}%))`;
            },
            { passive: true }
        );
        container.addEventListener("touchend", (e) => {
            if (!isDown) return;
            isDown = false;
            const dx = e.changedTouches[0].clientX - startX;
            if (Math.abs(dx) > 40) {
                go(current + (dx > 0 ? -1 : 1));
            } else {
                go(current);
            }
        });
    }

    // Contact form mock success
    function initContactForm() {
        const form = q('form[action="#"]');
        if (!form) return;
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const notice = document.createElement("div");
            notice.className = "mt-4 p-3 rounded bg-emerald-600/20 text-emerald-400 text-sm border border-emerald-500/30";
            notice.textContent = "Message sent. We will reply shortly.";
            const old = form.querySelector(".mt-4 + .mt-4");
            form.appendChild(notice);
            form.reset();
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        initMobileNav();
        initCounters();
        initCarouselSwipe();
        initContactForm();
    });
})();
