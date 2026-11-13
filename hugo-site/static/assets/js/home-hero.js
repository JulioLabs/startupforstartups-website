// Homepage hero slider: one slide of real showcase screens per industry.
// Plays on its own until the visitor picks a tab or presses pause; never with reduced motion.
(function () {
    var root = document.querySelector('[data-hh]');
    if (!root) return;

    var tabs = Array.prototype.slice.call(root.querySelectorAll('[data-hh-tab]'));
    var slides = Array.prototype.slice.call(root.querySelectorAll('.hh-slide'));
    var pauseBtn = root.querySelector('[data-hh-pause]');
    var INTERVAL = 7000;
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var current = 0;
    var timer = null;
    var startedAt = 0;
    var remaining = INTERVAL;
    var stopped = reduceMotion;   // visitor took over: never auto-advance again
    var paused = false;           // temporarily: hover, focus, off screen or hidden tab
    var userPaused = false;       // the pause button

    root.style.setProperty('--hh-interval', INTERVAL + 'ms');

    function show(index, fromUser) {
        index = (index + slides.length) % slides.length;
        tabs.forEach(function (tab, i) {
            var on = i === index;
            tab.setAttribute('aria-selected', on ? 'true' : 'false');
            tab.tabIndex = on ? 0 : -1;
        });
        slides.forEach(function (slide, i) {
            var on = i === index;
            slide.classList.toggle('is-active', on);
            if (on) {
                slide.removeAttribute('aria-hidden');
                slide.removeAttribute('inert');
            } else {
                slide.setAttribute('aria-hidden', 'true');
                slide.setAttribute('inert', '');
            }
        });
        current = index;
        // Keep the chosen tab visible when the strip scrolls sideways on phones
        var strip = tabs[index].parentNode;
        if (strip.scrollWidth > strip.clientWidth) {
            strip.scrollTo({ left: tabs[index].offsetLeft - 16, behavior: reduceMotion ? 'auto' : 'smooth' });
        }
        if (fromUser && window.trackEvent) {
            window.trackEvent('hero_industry_select', { industry: slides[index].id.replace('hh-panel-', '') });
        }
        restartProgress();
    }

    // Restart the progress bar animation on the active tab
    function restartProgress() {
        var bar = tabs[current].querySelector('.hh-progress');
        if (!bar) return;
        bar.style.animation = 'none';
        void bar.offsetWidth;
        bar.style.animation = '';
    }

    function schedule(ms) {
        clearTimeout(timer);
        startedAt = Date.now();
        remaining = ms;
        timer = setTimeout(function () {
            show(current + 1, false);
            schedule(INTERVAL);
        }, ms);
    }

    function updateState() {
        var shouldRun = !stopped && !paused && !userPaused;
        root.classList.toggle('is-playing', !stopped && !userPaused);
        root.classList.toggle('is-paused', !shouldRun);
        if (shouldRun) {
            if (!timer) schedule(remaining);
        } else if (timer) {
            clearTimeout(timer);
            timer = null;
            remaining = Math.max(400, remaining - (Date.now() - startedAt));
        }
    }

    function stop() {
        stopped = true;
        clearTimeout(timer);
        timer = null;
        if (pauseBtn) pauseBtn.hidden = true;
        updateState();
    }

    tabs.forEach(function (tab, i) {
        tab.addEventListener('click', function () {
            stop();
            show(i, true);
        });
        tab.addEventListener('keydown', function (e) {
            var next = null;
            if (e.key === 'ArrowRight') next = current + 1;
            else if (e.key === 'ArrowLeft') next = current - 1;
            else if (e.key === 'Home') next = 0;
            else if (e.key === 'End') next = slides.length - 1;
            if (next === null) return;
            e.preventDefault();
            stop();
            show(next, true);
            tabs[current].focus();
        });
    });

    // Swipe between slides on touch screens
    var touchX = null;
    var stage = root.querySelector('.hh-stage');
    stage.addEventListener('touchstart', function (e) {
        touchX = e.touches[0].clientX;
    }, { passive: true });
    stage.addEventListener('touchend', function (e) {
        if (touchX === null) return;
        var dx = e.changedTouches[0].clientX - touchX;
        touchX = null;
        if (Math.abs(dx) < 50) return;
        stop();
        show(current + (dx < 0 ? 1 : -1), true);
    }, { passive: true });

    if (stopped) {
        updateState();
        return;
    }

    if (pauseBtn) {
        pauseBtn.hidden = false;
        pauseBtn.addEventListener('click', function () {
            userPaused = !userPaused;
            pauseBtn.setAttribute('aria-label', userPaused ? 'Play the slideshow' : 'Pause the slideshow');
            pauseBtn.innerHTML = userPaused
                ? '<i class="fas fa-play" aria-hidden="true"></i>'
                : '<i class="fas fa-pause" aria-hidden="true"></i>';
            updateState();
        });
    }

    var hovering = false;
    var focused = false;
    var visible = true;
    function recompute() {
        paused = hovering || focused || !visible || document.hidden;
        updateState();
    }
    root.addEventListener('mouseenter', function () { hovering = true; recompute(); });
    root.addEventListener('mouseleave', function () { hovering = false; recompute(); });
    root.addEventListener('focusin', function () { focused = true; recompute(); });
    root.addEventListener('focusout', function (e) {
        if (!root.contains(e.relatedTarget)) { focused = false; recompute(); }
    });
    document.addEventListener('visibilitychange', recompute);
    if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
            visible = entries[0].isIntersecting;
            recompute();
        }, { threshold: 0.35 }).observe(root);
    }

    recompute();
})();
