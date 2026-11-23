// Startup OS Marketing Website JavaScript

document.addEventListener('DOMContentLoaded', function() {

    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on links
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll-reveal header: show after dark hero scrolls out of view
    (function () {
        var header = document.getElementById('hr-site-header');
        var hero   = document.getElementById('hr-hero');

        if (header && hero) {
            var observer = new IntersectionObserver(function (entries) {
                if (entries[0].isIntersecting) {
                    header.classList.remove('hr-header-visible');
                } else {
                    header.classList.add('hr-header-visible');
                }
            }, { threshold: 0.05 });
            observer.observe(hero);
        } else if (header) {
            // No dark hero on this page — show header immediately
            header.classList.add('hr-header-visible');
        }
    }());

    // Feature rotator (homepage hero)
    (function () {
        var items = document.querySelectorAll('.hr-feature-item');
        if (items.length === 0) return;

        var current = 0;
        items[0].classList.add('hr-active');

        setInterval(function () {
            var prev = current;
            current = (current + 1) % items.length;

            items[prev].classList.remove('hr-active');
            items[prev].classList.add('hr-exit');
            setTimeout(function () { items[prev].classList.remove('hr-exit'); }, 400);

            items[current].classList.add('hr-active');
        }, 1800);
    }());

    // Form validation (if contact forms are added later)
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

});

// Add mobile menu styles dynamically
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: #0F172A;
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(227, 227, 227, 0.1);
            padding: var(--spacing-lg);
            flex-direction: column;
            gap: var(--spacing-lg);
            display: none;
        }

        .nav-menu.active {
            display: flex;
        }

        .nav-menu .nav-link {
            padding: var(--spacing-md) 0;
            border-bottom: 1px solid var(--border-light);
        }

        .nav-menu .btn {
            margin-top: var(--spacing-md);
            justify-content: center;
        }
    }
`;

document.head.appendChild(style);

// Google Analytics events (gtag is loaded in baseof.html).
// Page views, outbound links, file downloads and 90% scroll are already
// recorded by GA4 enhanced measurement; these add the clicks that matter to us.
function trackEvent(eventName, params) {
    if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, params || {});
    }
}
window.trackEvent = trackEvent;

// Where on the page a click happened: the section's id or first class, else header, nav or footer
function clickLocation(el) {
    const section = el.closest('section, header, nav, footer, aside');
    if (!section) return 'page';
    return section.id || (section.classList[0]) || section.tagName.toLowerCase();
}

document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    const params = {
        link_text: link.textContent.trim().replace(/\s+/g, ' ').slice(0, 100),
        link_url: link.href,
        click_location: clickLocation(link)
    };

    let url;
    try {
        url = new URL(link.href, window.location.href);
    } catch (err) {
        return;
    }

    if (url.hostname === 'app.presencewave.com') {
        // Every "Get started" / "Start free" button goes to the app; /login is the sign-in link
        trackEvent(url.pathname.startsWith('/login') ? 'login_click' : 'sign_up_click', params);
    } else if (url.hostname === 'github.com' && url.pathname.indexOf('/presencewave-themes') !== -1) {
        params.theme_collection = url.pathname.split('/').filter(Boolean).pop();
        trackEvent('theme_browse_click', params);
    } else if (url.protocol === 'mailto:') {
        trackEvent('contact_email_click', { click_location: params.click_location });
    } else if (href.startsWith('#') && href.length > 1) {
        trackEvent('internal_navigation', { section: href.slice(1), click_location: params.click_location });
    }
});

// Forms inside PresenceWave widgets on our own pages (contact form, surveys, newsletter)
document.addEventListener('submit', function(e) {
    const widget = e.target.closest('[data-widget]');
    if (widget) {
        trackEvent('widget_form_submit', { widget_type: widget.getAttribute('data-widget') });
    }
}, true);

// Scroll depth (25/50/75; GA4 already records 90)
const scrollMarks = [25, 50, 75];
window.addEventListener('scroll', function() {
    const scrollable = document.body.scrollHeight - window.innerHeight;
    if (scrollable <= 0 || scrollMarks.length === 0) return;
    const percent = Math.round((window.scrollY / scrollable) * 100);
    while (scrollMarks.length && percent >= scrollMarks[0]) {
        trackEvent('scroll_depth', { percent_scrolled: scrollMarks.shift() });
    }
}, { passive: true });
