/* ===================================================================
   script.js — renders CONFIG into the DOM and wires up interactions.
   Vanilla JS only. Depends on config.js being loaded first.
   =================================================================== */

(() => {
    const icons = {
        github: '<svg viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.96.57.1.78-.25.78-.55v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.08.78 2.18v3.23c0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
        instagram: '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.59 1.8c.46-.16 1.26-.35 2.43-.4C9.29 1.34 9.67 1.33 12 1.33Zm0 1.98c-3.15 0-3.5.01-4.74.07-.96.04-1.48.2-1.83.34-.46.18-.79.39-1.13.73-.34.34-.55.67-.73 1.13-.14.35-.3.87-.34 1.83-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.04.96.2 1.48.34 1.83.18.46.39.79.73 1.13.34.34.67.55 1.13.73.35.14.87.3 1.83.34 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.96-.04 1.48-.2 1.83-.34.46-.18.79-.39 1.13-.73.34-.34.55-.67.73-1.13.14-.35.3-.87.34-1.83.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.96-.2-1.48-.34-1.83a3 3 0 0 0-.73-1.13 3 3 0 0 0-1.13-.73c-.35-.14-.87-.3-1.83-.34-1.24-.06-1.59-.07-4.74-.07Zm0 3.4a5.42 5.42 0 1 1 0 10.84 5.42 5.42 0 0 1 0-10.84Zm0 1.98a3.44 3.44 0 1 0 0 6.88 3.44 3.44 0 0 0 0-6.88Zm5.63-2.2a1.27 1.27 0 1 1 0 2.54 1.27 1.27 0 0 1 0-2.54Z"/></svg>',
        discord: '<svg viewBox="0 0 24 24"><path d="M20.32 5.36A19.8 19.8 0 0 0 15.24 3.7c-.22.4-.47.93-.65 1.35a18.3 18.3 0 0 0-5.18 0c-.18-.42-.44-.95-.66-1.35A19.7 19.7 0 0 0 3.68 5.36C1.02 9.3.29 13.15.65 16.94a19.9 19.9 0 0 0 6.06 3.06c.49-.66.93-1.37 1.3-2.11-.72-.27-1.4-.6-2.05-.99.17-.13.34-.26.5-.4a14.2 14.2 0 0 0 12.08 0c.16.14.33.27.5.4-.65.4-1.33.72-2.05.99.37.74.81 1.45 1.3 2.11a19.9 19.9 0 0 0 6.06-3.06c.44-4.4-.72-8.22-3.03-11.58ZM9.68 14.6c-.9 0-1.63-.83-1.63-1.85 0-1.02.72-1.85 1.63-1.85s1.65.84 1.63 1.85c0 1.02-.72 1.85-1.63 1.85Zm6.65 0c-.9 0-1.63-.83-1.63-1.85 0-1.02.72-1.85 1.63-1.85s1.65.84 1.63 1.85c0 1.02-.71 1.85-1.63 1.85Z"/></svg>',
        arrowLeft: '<svg viewBox="0 0 24 24"><path d="M20 11H7.83l4.88-4.88a1 1 0 1 0-1.42-1.41l-6.59 6.58a1 1 0 0 0 0 1.42l6.59 6.58a1 1 0 0 0 1.42-1.41L7.83 13H20a1 1 0 0 0 0-2Z"/></svg>',
        arrowRight: '<svg viewBox="0 0 24 24"><path d="M4 13h12.17l-4.88 4.88a1 1 0 1 0 1.42 1.41l6.59-6.58a1 1 0 0 0 0-1.42l-6.59-6.58a1 1 0 0 0-1.42 1.41L16.17 11H4a1 1 0 0 0 0 2Z"/></svg>',
        mail: '<svg viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.01L12 12l8-5.99V6H4Zm16 12V8.24l-7.4 5.55a1 1 0 0 1-1.2 0L4 8.24V18h16Z"/></svg>'
    };

    /* ================= STATE ================= */
    let currentLang = (localStorage.getItem("lang")) || CONFIG.defaults.lang || "id";
    let currentTheme = (localStorage.getItem("theme")) || CONFIG.defaults.theme || "dark";

    /* pick a bilingual field: { id:"", en:"" } -> string, or pass strings through unchanged */
    function pick(field) {
        if (field && typeof field === "object") return field[currentLang] || field.id || field.en || "";
        return field;
    }
    function t(key) {
        const dict = CONFIG.translations[currentLang] || CONFIG.translations.id;
        return dict[key] || key;
    }

    /* ---------------- render socials ---------------- */
    function renderSocials(container) {
        const s = CONFIG.socials;
        container.innerHTML = `
      <a href="${s.github}" target="_blank" rel="noopener" aria-label="GitHub">${icons.github}</a>
      <a href="${s.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icons.instagram}</a>
      <a href="${s.discord}" target="_blank" rel="noopener" aria-label="Discord">${icons.discord}</a>
    `;
    }

    /* ---------------- render hero ---------------- */
    function renderHero() {
        document.getElementById("heroName").textContent = CONFIG.personal.name;
        document.getElementById("heroDesc").textContent = pick(CONFIG.personal.tagline);
        document.getElementById("heroFigure").src = CONFIG.hero.image;
        document.getElementById("heroBg").style.backgroundImage = `url('${CONFIG.hero.cityBg}')`;
    }

    /* ---------------- render projects ---------------- */
    function renderProjects() {
        const grid = document.getElementById("projectsGrid");
        grid.innerHTML = CONFIG.projects.map(p => `
      <article class="project-card glass reveal">
        <div class="project-img"><img src="${p.image}" alt="${pick(p.title)}" loading="lazy"></div>
        <div class="project-body">
          <h3>${pick(p.title)}</h3>
          <p>${pick(p.description)}</p>
          <a class="project-gh" href="${p.link}" target="_blank" rel="noopener">${t("projectViewCode")}</a>
        </div>
      </article>
    `).join("");
        observeReveals();
    }

    /* ---------------- render about ---------------- */
    function renderAbout() {
        document.getElementById("aboutAvatar").src = CONFIG.personal.avatar;
        document.getElementById("aboutName").textContent = CONFIG.personal.name;
        document.getElementById("aboutRole").textContent = pick(CONFIG.personal.role);
        document.getElementById("aboutBio").textContent = pick(CONFIG.personal.bio);
    }

    /* ---------------- render skills ---------------- */
    function renderSkills() {
        const wrap = document.getElementById("skillsWrap");
        if (!wrap || !CONFIG.skillsCategories) return;
        wrap.innerHTML = CONFIG.skillsCategories.map(cat => `
      <div class="skill-category">
        <h3 class="skill-category-title">${pick(cat.title)}</h3>
        <div class="skills-logo-grid">
          ${cat.items.map(s => `
            <div class="skill-logo-card" title="${s.name}">
              <img src="https://cdn.simpleicons.org/${s.icon}/${s.color || 'FFFFFF'}" alt="${s.name}" loading="lazy" width="34" height="34">
              <span>${s.name}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");
    }

    /* ---------------- render contact info ---------------- */
    function renderContact() {
        document.getElementById("contactEmail").innerHTML = `${icons.mail} ${CONFIG.personal.email}`;
    }

    /* ---------------- footer year ---------------- */
    function renderFooter() {
        document.getElementById("footerYear").textContent = new Date().getFullYear();
        document.getElementById("footerName").textContent = CONFIG.personal.name;
    }

    /* ---------------- apply data-i18n / data-i18n-placeholder ---------------- */
    function applyStaticTranslations() {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            el.textContent = t(el.getAttribute("data-i18n"));
        });
        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
        });
        document.documentElement.setAttribute("lang", currentLang);
        document.getElementById("themeToggle")?.setAttribute("aria-label", t("themeToggleAria"));
        document.getElementById("langToggle")?.setAttribute("aria-label", t("langToggleAria"));
    }

    /* render everything that depends on the active language */
    function renderAll() {
        applyStaticTranslations();
        renderHero();
        renderProjects();
        renderAbout();
        renderSkills();
        renderContact();
        renderFooter();
        updateLangButtons();
    }

    /* ================= THEME ================= */
    function applyTheme(theme) {
        currentTheme = theme;
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }
    function initTheme() {
        applyTheme(currentTheme);
        document.getElementById("themeToggle").addEventListener("click", () => {
            applyTheme(currentTheme === "dark" ? "light" : "dark");
        });
    }

    /* ================= LANGUAGE ================= */
    function updateLangButtons() {
        document.querySelectorAll(".lang-btn").forEach(btn => {
            btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
        });
    }
    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem("lang", lang);
        renderAll();
        initTypingEffect(); // restart typing with the new language's word list
    }
    function initLanguage() {
        updateLangButtons();
        document.querySelectorAll(".lang-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const lang = btn.getAttribute("data-lang");
                if (lang !== currentLang) applyLanguage(lang);
            });
        });
    }

    /* ================= NAVBAR: active link + smooth scroll + mobile toggle ================= */
    function initNavbar() {
        const navLinks = document.querySelectorAll(".nav-links a");
        const toggle = document.getElementById("navToggle");
        const linksWrap = document.getElementById("navLinks");

        navLinks.forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute("href"));
                if (target) target.scrollIntoView({ behavior: "smooth" });
                linksWrap.classList.remove("open");
            });
        });

        toggle.addEventListener("click", () => linksWrap.classList.toggle("open"));

        // resolve each link's target section once instead of re-querying
        // the DOM on every scroll tick
        const linkSections = [...navLinks].map(a => ({ link: a, sec: document.querySelector(a.getAttribute("href")) }));

        function onScroll() {
            const pos = window.scrollY + 140;
            let current = linkSections[0]?.sec;
            linkSections.forEach(({ sec }) => {
                if (sec && pos >= sec.offsetTop) current = sec;
            });
            linkSections.forEach(({ link, sec }) => {
                link.classList.toggle("active", sec === current);
            });
        }

        let ticking = false;
        window.addEventListener("scroll", () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => { onScroll(); ticking = false; });
        }, { passive: true });
        onScroll();
    }

    /* ================= TYPING EFFECT ================= */
    let typingHandle = null;
    function initTypingEffect() {
        const el = document.getElementById("typingRole");
        if (typingHandle) clearTimeout(typingHandle);
        const words = (CONFIG.hero.typingWords && CONFIG.hero.typingWords[currentLang]) || [pick(CONFIG.personal.role)];
        let wi = 0, ci = 0, deleting = false;

        function tick() {
            const word = words[wi];
            if (!deleting) {
                ci++;
                el.textContent = word.slice(0, ci);
                if (ci === word.length) { deleting = true; typingHandle = setTimeout(tick, 1400); return; }
            } else {
                ci--;
                el.textContent = word.slice(0, ci);
                if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
            }
            typingHandle = setTimeout(tick, deleting ? 45 : 85);
        }
        tick();
    }

    /* ================= SCROLL REVEAL ================= */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    /* observe every current .reveal/.reveal-left/.reveal-right element.
       Safe to call repeatedly (e.g. after a language re-render creates
       fresh project cards) — observing an already-observed node is a no-op. */
    function observeReveals() {
        document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(el => revealObserver.observe(el));
    }
    function initScrollReveal() { observeReveals(); }

    /* ================= PARALLAX: scroll + mouse move on hero visual ================= */
    /* ================= PARALLAX: layered depth (mouse + scroll) =================
       Three depth layers, each moving at a different rate so the scene reads
       as background / midground / foreground stacked behind one another:
         far    -> city background   (moves least)
         mid    -> particles canvas  (moves a bit more)
         near   -> hero character    (moves the most, main focus)             */
    function initParallax() {
        const bg = document.getElementById("heroBg");
        const particlesEl = document.getElementById("particles");
        const visual = document.getElementById("heroVisual");
        const hero = document.getElementById("home");
        const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
        const heavyParallax = !isTouch && window.innerWidth > 860;
        let scrollY = 0, targetX = 0, targetY = 0, curX = 0, curY = 0;

        const DEPTH = {
            far: { mouse: 0.10, scroll: 0.15 },
            mid: { mouse: 0.35, scroll: 0.06 },
            near: { mouse: 1.00, scroll: -0.08 }
        };
        const MOUSE_RANGE_X = 60;  // px of travel at full tilt, scaled per layer
        const MOUSE_RANGE_Y = 34;

        function render() {
            const fx = curX * DEPTH.far.mouse, fy = curY * DEPTH.far.mouse;
            const mx = curX * DEPTH.mid.mouse, my = curY * DEPTH.mid.mouse;
            const nx = curX * DEPTH.near.mouse, ny = curY * DEPTH.near.mouse;

            bg.style.transform = `scale(1.1) translate(${fx}px, ${scrollY * DEPTH.far.scroll + fy}px)`;
            particlesEl.style.transform = `translate(${mx}px, ${scrollY * DEPTH.mid.scroll + my}px)`;
            if (visual) visual.style.transform = `translate(${nx}px, ${scrollY * DEPTH.near.scroll + ny}px)`;
        }

        /* ease the current offset toward the target every frame for a fluid,
           slightly trailing depth feel instead of snapping straight to the cursor */
        let rafId = null;
        let heroVisible = true;
        function tick() {
            curX += (targetX - curX) * 0.08;
            curY += (targetY - curY) * 0.08;
            render();
            rafId = requestAnimationFrame(tick);
        }
        function startLoop() {
            if (!rafId && heroVisible && !document.hidden) rafId = requestAnimationFrame(tick);
        }
        function stopLoop() {
            if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
        }

        window.addEventListener("scroll", () => { scrollY = window.scrollY; }, { passive: true });

        if (heavyParallax) {
            hero.addEventListener("mousemove", (e) => {
                const rect = hero.getBoundingClientRect();
                const relX = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5 .. 0.5
                const relY = (e.clientY - rect.top) / rect.height - 0.5;
                targetX = relX * -MOUSE_RANGE_X;
                targetY = relY * -MOUSE_RANGE_Y;
            }, { passive: true });
            hero.addEventListener("mouseleave", () => {
                targetX = 0; targetY = 0;
            });
        }

        // On touch devices there's no mouse-driven motion, only scroll —
        // render once instead of burning a frame loop forever.
        if (isTouch) {
            window.addEventListener("scroll", render, { passive: true });
            render();
        } else {
            startLoop();
            // only pay for this loop while the hero is actually visible
            // (scrolling past it shouldn't keep it running) and while the
            // tab is in the foreground
            if ("IntersectionObserver" in window) {
                new IntersectionObserver(entries => {
                    heroVisible = entries[0].isIntersecting;
                    heroVisible ? startLoop() : stopLoop();
                }, { threshold: 0 }).observe(hero);
            }
            document.addEventListener("visibilitychange", () => {
                document.hidden ? stopLoop() : startLoop();
            });
        }
    }

    /* ================= FLOATING PARTICLES ================= */
    function initParticles() {
        const canvas = document.getElementById("particles");
        const ctx = canvas.getContext("2d", { alpha: true });
        let w, h, particles, dpr;

        // fewer particles on small/low-power screens, none if the user
        // asked the OS to reduce motion
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
        const COUNT = reduceMotion ? 0 : (isTouch || window.innerWidth <= 640) ? 28 : (window.innerWidth <= 1100 ? 45 : 70);

        function resize() {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = canvas.width = canvas.offsetWidth * dpr;
            h = canvas.height = canvas.offsetHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function makeParticles(n) {
            const cw = canvas.offsetWidth, ch = canvas.offsetHeight;
            return Array.from({ length: n }, () => ({
                x: Math.random() * cw,
                y: Math.random() * ch,
                r: Math.random() * 2 + 0.6,
                vy: Math.random() * 0.4 + 0.1,
                vx: (Math.random() - 0.5) * 0.3,
                o: Math.random() * 0.5 + 0.15
            }));
        }

        let rafId = null;
        let heroVisible = true;
        function draw() {
            const cw = canvas.offsetWidth, ch = canvas.offsetHeight;
            ctx.clearRect(0, 0, cw, ch);
            particles.forEach(p => {
                p.y -= p.vy;
                p.x += p.vx;
                if (p.y < -10) { p.y = ch + 10; p.x = Math.random() * cw; }
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,90,110,${p.o})`;
                ctx.fill();
            });
            rafId = requestAnimationFrame(draw);
        }
        function startLoop() {
            if (!rafId && heroVisible && !document.hidden) rafId = requestAnimationFrame(draw);
        }
        function stopLoop() {
            if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
        }

        if (COUNT === 0) return; // reduced-motion: skip the canvas entirely

        resize();
        particles = makeParticles(COUNT);
        let resizeTimer = null;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resize, 150);
        }, { passive: true });

        startLoop();
        // only draw while the hero is on screen and the tab is focused —
        // scrolling past it or switching tabs shouldn't keep the canvas busy
        const heroEl = document.getElementById("home");
        if (heroEl && "IntersectionObserver" in window) {
            new IntersectionObserver(entries => {
                heroVisible = entries[0].isIntersecting;
                heroVisible ? startLoop() : stopLoop();
            }, { threshold: 0 }).observe(heroEl);
        }
        document.addEventListener("visibilitychange", () => {
            document.hidden ? stopLoop() : startLoop();
        });
    }

    /* ================= EMAILJS INIT ================= */
    function initEmailJs() {
        if (window.emailjs && CONFIG.emailjs?.publicKey) {
            emailjs.init({ publicKey: CONFIG.emailjs.publicKey });
        }
    }

    /* ================= CONTACT FORM VALIDATION ================= */
    function initContactForm() {
        const form = document.getElementById("contactForm");
        const status = document.getElementById("formStatus");

        function setError(group, msg) {
            group.classList.add("error");
            group.querySelector(".error-msg").textContent = msg;
        }
        function clearError(group) {
            group.classList.remove("error");
        }

        form.addEventListener("submit", e => {
            e.preventDefault();
            let valid = true;

            const nameGroup = document.getElementById("nameGroup");
            const emailGroup = document.getElementById("emailGroup");
            const msgGroup = document.getElementById("messageGroup");
            const nameVal = form.name.value.trim();
            const emailVal = form.email.value.trim();
            const msgVal = form.message.value.trim();

            [nameGroup, emailGroup, msgGroup].forEach(clearError);

            if (nameVal.length < 2) { setError(nameGroup, t("formErrorName")); valid = false; }
            const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRe.test(emailVal)) { setError(emailGroup, t("formErrorEmail")); valid = false; }
            if (msgVal.length < 10) { setError(msgGroup, t("formErrorMessage")); valid = false; }

            if (!valid) {
                status.textContent = t("formStatusFail");
                status.className = "form-status fail";
                return;
            }

            const submitBtn = form.querySelector("button[type='submit']");
            submitBtn.disabled = true;
            status.textContent = t("formStatusSending");
            status.className = "form-status";

            const emailjsCfg = CONFIG.emailjs || {};
            if (!window.emailjs || !emailjsCfg.serviceId || !emailjsCfg.templateId) {
                status.textContent = t("formStatusError");
                status.className = "form-status fail";
                submitBtn.disabled = false;
                return;
            }

            emailjs.send(emailjsCfg.serviceId, emailjsCfg.templateId, {
                name: nameVal,
                email: emailVal,
                message: msgVal
            }).then(() => {
                status.textContent = t("formStatusSuccess");
                status.className = "form-status success";
                form.reset();
                submitBtn.disabled = false;
            }).catch(() => {
                status.textContent = t("formStatusError");
                status.className = "form-status fail";
                submitBtn.disabled = false;
            });
        });
    }

    /* ================= LOADING SCREEN ================= */
    /* Shows once on first paint, counts 0→100%, then fades out and unlocks
       page scroll. Duration lands around 2.2s regardless of frame rate. */
    function initLoadingScreen() {
        const screen = document.getElementById("loadingScreen");
        const fill = document.getElementById("loadingBarFill");
        const percentEl = document.getElementById("loadingPercent");
        if (!screen) return;

        const DURATION = 2200;
        const start = performance.now();

        function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(1, elapsed / DURATION);
            // ease-out so the last few percent settle rather than snapping
            const eased = 1 - Math.pow(1 - progress, 2);
            const pct = Math.round(eased * 100);
            fill.style.width = pct + "%";
            percentEl.textContent = pct + "%";

            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                finish();
            }
        }

        function finish() {
            screen.classList.add("fade-out");
            document.body.classList.remove("is-loading");
            setTimeout(() => screen.classList.add("is-hidden"), 650);
        }

        requestAnimationFrame(tick);
    }

    /* ================= CUSTOM SPIDER CURSOR ================= */
    /* A small spider trails the pointer on a thin web string, easing toward
       the cursor each frame with a light swing. Skipped entirely on touch
       devices / narrow viewports to stay lightweight and avoid a phantom
       cursor on mobile. Pauses + bounces on interactive hover targets. */
    function initSpiderCursor() {
        const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
        if (isTouch || window.innerWidth <= 860) return;

        const cursor = document.createElement("div");
        cursor.id = "spiderCursor";
        cursor.innerHTML = `
      <div class="web-string"></div>
      <div class="spider-body">
        <svg viewBox="0 0 24 24">
          <g class="spider-legs">
            <path d="M12 12 4 7 M12 12 2 12 M12 12 4 17 M12 12 8 20" />
            <path d="M12 12 20 7 M12 12 22 12 M12 12 20 17 M12 12 16 20" />
          </g>
          <ellipse class="spider-abdomen" cx="12" cy="11" rx="5" ry="6.5" />
          <circle class="spider-head" cx="12" cy="5.5" r="3" />
        </svg>
      </div>
    `;
        document.body.appendChild(cursor);

        let targetX = window.innerWidth / 2, targetY = window.innerHeight / 3;
        let curX = targetX, curY = targetY;
        let paused = false;
        let swingPhase = 0;

        window.addEventListener("mousemove", e => {
            targetX = e.clientX;
            targetY = e.clientY;
        }, { passive: true });

        const HOVER_SELECTOR = "a, button, .project-card, .skill-logo-card, .btn";
        let pauseTimer = null;
        document.addEventListener("mouseover", e => {
            if (!e.target.closest(HOVER_SELECTOR)) return;
            paused = true;
            cursor.classList.add("paused");
            clearTimeout(pauseTimer);
            pauseTimer = setTimeout(() => {
                paused = false;
                cursor.classList.remove("paused");
            }, 260);
        });

        let rafId = null;
        function tick() {
            const ease = paused ? 0.04 : 0.14;
            curX += (targetX - curX) * ease;
            curY += (targetY - curY) * ease;
            swingPhase += 0.05;
            const swing = Math.sin(swingPhase) * (paused ? 1 : 4);
            cursor.style.transform = `translate(${curX}px, ${curY}px) rotate(${swing}deg)`;
            rafId = requestAnimationFrame(tick);
        }
        rafId = requestAnimationFrame(tick);
        // stop animating while the tab is in the background
        document.addEventListener("visibilitychange", () => {
            if (document.hidden) {
                if (rafId) cancelAnimationFrame(rafId);
                rafId = null;
            } else if (!rafId) {
                rafId = requestAnimationFrame(tick);
            }
        });
    }

    /* ================= WEB SHOOTER (click FX + sound) ================= */
    /* On click of any "clickable" element, fires a quick web-line from the
       pointer to the element, an impact burst, a few dissolving particles,
       a satisfying scale/wiggle on the element itself, and a soft
       synthesized "thwip". Everything is built with the Web Animations API
       so spawned nodes clean themselves up on finish — no timers to leak,
       no state that can get confused by rapid/overlapping clicks.
       Works identically for touch (the browser's synthetic click carries
       real clientX/clientY from the tap) and respects prefers-reduced-motion. */
    function initWebShooter() {
        const SELECTOR = [
            ".nav-links a", ".btn", ".project-card",
            ".nav-socials a", ".footer-socials a", ".skill-logo-card",
            ".lang-btn", ".theme-toggle",
            ".project-gh", "#contactForm button[type='submit']"
        ].join(", ");

        const reduceMotionMQ = window.matchMedia("(prefers-reduced-motion: reduce)");

        /* ---- synthesized "thwip" sound (no audio file needed) ---- */
        let audioCtx = null;
        let lastPlay = 0;
        function ensureAudio() {
            if (audioCtx) {
                if (audioCtx.state === "suspended") audioCtx.resume();
                return;
            }
            const Ctx = window.AudioContext || window.webkitAudioContext;
            if (!Ctx) return;
            try { audioCtx = new Ctx(); } catch (e) { audioCtx = null; }
        }
        function playThwip() {
            if (!audioCtx) return;
            const now = audioCtx.currentTime;
            if (now - lastPlay < 0.06) return; // avoid overlap spam on rapid clicks
            lastPlay = now;

            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(1500, now);
            osc.frequency.exponentialRampToValueAtTime(240, now + 0.09);
            gain.gain.setValueAtTime(0.0001, now);
            gain.gain.exponentialRampToValueAtTime(0.18, now + 0.008); // soft, ~18%
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.11);
            osc.connect(gain).connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.12);
        }
        // warm up the audio context on the very first user gesture so the
        // first real click has zero perceptible latency
        document.addEventListener("pointerdown", ensureAudio, { once: true, passive: true });

        /* ---- visual fx, all self-cleaning via WAAPI onfinish ---- */
        function spawnLine(x1, y1, x2, y2) {
            const dist = Math.hypot(x2 - x1, y2 - y1);
            if (dist < 4) return; // click landed dead-center, no line needed
            const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
            const line = document.createElement("div");
            line.className = "web-shoot-line";
            line.style.left = x1 + "px";
            line.style.top = y1 + "px";
            line.style.width = dist + "px";
            document.body.appendChild(line);
            const anim = line.animate([
                { transform: `rotate(${angle}deg) scaleX(0)`, opacity: 1 },
                { transform: `rotate(${angle}deg) scaleX(1)`, opacity: 1, offset: .4 },
                { transform: `rotate(${angle}deg) scaleX(1)`, opacity: 0 }
            ], { duration: 380, easing: "cubic-bezier(.2,.8,.2,1)" });
            anim.onfinish = () => line.remove();
        }

        function spawnParticles(x, y) {
            const count = 5;
            for (let i = 0; i < count; i++) {
                const p = document.createElement("div");
                p.className = "web-particle";
                p.style.left = x + "px";
                p.style.top = y + "px";
                document.body.appendChild(p);
                const angle = Math.random() * Math.PI * 2;
                const dist = 14 + Math.random() * 18;
                const px = Math.cos(angle) * dist, py = Math.sin(angle) * dist;
                const rot = Math.random() * 160 - 80;
                const anim = p.animate([
                    { transform: "translate(-50%,-50%) translate(0,0) rotate(0deg)", opacity: 1 },
                    { transform: `translate(-50%,-50%) translate(${px}px, ${py}px) rotate(${rot}deg)`, opacity: 0 }
                ], { duration: 500, easing: "ease-out" });
                anim.onfinish = () => p.remove();
            }
        }

        function spawnImpact(x, y, allowParticles) {
            const ring = document.createElement("div");
            ring.className = "web-impact";
            ring.style.left = x + "px";
            ring.style.top = y + "px";
            document.body.appendChild(ring);
            const anim = ring.animate([
                { transform: "translate(-50%,-50%) scale(.2)", opacity: .9 },
                { transform: "translate(-50%,-50%) scale(1.5)", opacity: 0 }
            ], { duration: 320, easing: "ease-out" });
            anim.onfinish = () => ring.remove();
            if (allowParticles) spawnParticles(x, y);
        }

        function bounce(el, light) {
            const keyframes = light
                ? [{ transform: "scale(1)" }, { transform: "scale(.96)" }, { transform: "scale(1)" }]
                : [
                    { transform: "scale(1) rotate(0deg)" },
                    { transform: "scale(.95) rotate(-1.5deg)", offset: .35 },
                    { transform: "scale(1.02) rotate(1deg)", offset: .65 },
                    { transform: "scale(1) rotate(0deg)" }
                ];
            // WAAPI animations revert to normal styles on finish (fill: "none"
            // by default), so this never fights with the element's own
            // hover/active CSS transforms.
            el.animate(keyframes, { duration: light ? 160 : 220, easing: "ease-out" });
        }

        document.addEventListener("click", (e) => {
            const target = e.target.closest(SELECTOR);
            if (!target) return;

            ensureAudio();
            playThwip();

            const reduced = reduceMotionMQ.matches;
            bounce(target, reduced);
            if (reduced) return; // sound + small scale only, per reduced-motion guidance

            const rect = target.getBoundingClientRect();
            const tx = rect.left + rect.width / 2;
            const ty = rect.top + rect.height / 2;

            // e.detail === 0 means a keyboard-triggered click (Enter/Space),
            // which carries no meaningful pointer position — skip the
            // travelling line but still show the impact at the element.
            if (e.detail !== 0) {
                spawnLine(e.clientX, e.clientY, tx, ty);
            }
            spawnImpact(tx, ty, true);
        }, { passive: true });
    }

    /* ================= INIT ================= */
    document.addEventListener("DOMContentLoaded", () => {
        initTheme();
        initLoadingScreen();
        initEmailJs();

        renderAll();
        renderSocials(document.getElementById("navSocials"));
        renderSocials(document.getElementById("footerSocials"));

        initLanguage();
        initNavbar();
        initTypingEffect();
        initScrollReveal();
        initParallax();
        initParticles();
        initContactForm();
        initSpiderCursor();
        initWebShooter();
    });
})();