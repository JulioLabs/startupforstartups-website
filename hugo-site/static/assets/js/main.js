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

    // Header background on scroll
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 50) {
            header.style.background = '#0F172A';
        } else {
            header.style.background = '#0F172A';
        }
    });

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

// Analytics tracking (placeholder)
function trackEvent(eventName, properties = {}) {
    console.log('Event:', eventName, properties);
}

// Track important user interactions
document.addEventListener('click', function(e) {
    const target = e.target.closest('a, button');
    if (target) {
        const href = target.getAttribute('href');
        const text = target.textContent.trim();

        if (href === '/login' || text.includes('Start') || text.includes('Get Started')) {
            trackEvent('cta_click', {
                location: target.closest('section')?.className || 'unknown',
                text: text
            });
        }

        if (href && href.startsWith('#')) {
            trackEvent('internal_navigation', {
                section: href.replace('#', '')
            });
        }
    }
});

// Track scroll depth
let maxScroll = 0;
window.addEventListener('scroll', function() {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;

        if (maxScroll >= 25 && !window.tracked25) {
            trackEvent('scroll_depth', { depth: 25 });
            window.tracked25 = true;
        }
        if (maxScroll >= 50 && !window.tracked50) {
            trackEvent('scroll_depth', { depth: 50 });
            window.tracked50 = true;
        }
        if (maxScroll >= 75 && !window.tracked75) {
            trackEvent('scroll_depth', { depth: 75 });
            window.tracked75 = true;
        }
        if (maxScroll >= 90 && !window.tracked90) {
            trackEvent('scroll_depth', { depth: 90 });
            window.tracked90 = true;
        }
    }
});
