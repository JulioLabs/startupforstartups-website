// Startup OS Marketing Website JavaScript
// Matching the Future Forward design interaction patterns

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
            
            // Toggle hamburger to X animation
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
                const headerOffset = 80; // Height of fixed header
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header background opacity on scroll
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add background opacity based on scroll
        if (scrollTop > 50) {
            header.style.background = '#0F172A';
        } else {
            header.style.background = '#0F172A';
        }
        
        // Hide/show header on scroll (optional - uncomment if desired)
        /*
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        */
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.problem-item, .feature-category, .platform-feature, .journey-step').forEach(el => {
        observer.observe(el);
    });
    
    // Counter animation for hero stats
    function animateCounter(element, target, duration = 1000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }
    
    // Animate hero stats when they come into view
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    if (text.includes('+')) {
                        const num = parseInt(text.replace(/\D/g, ''));
                        if (num > 0) {
                            stat.textContent = '0+';
                            setTimeout(() => animateCounter(stat, num, 1000), 200);
                        }
                    } else if (text.includes('%')) {
                        const num = parseInt(text.replace(/\D/g, ''));
                        if (num > 0) {
                            stat.textContent = '0%';
                            setTimeout(() => animateCounter(stat, num, 1000), 400);
                        }
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
    
    // Add loading animation to buttons
    document.querySelectorAll('.btn-primary[href="/login"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Add loading state
            const originalContent = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            btn.style.pointerEvents = 'none';
            
            // Simulate loading (remove this in production)
            setTimeout(() => {
                btn.innerHTML = originalContent;
                btn.style.pointerEvents = 'auto';
            }, 2000);
        });
    });
    
    // Parallax effect for hero section (subtle)
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Form validation (if contact forms are added later)
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Add hover effects to feature cards
    document.querySelectorAll('.problem-item, .feature-category, .platform-feature').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)';
        });
    });
    
    // Add pulse animation to CTA buttons
    function pulseButton(button) {
        button.style.animation = 'pulse 2s infinite';
    }
    
    document.querySelectorAll('.cta .btn-primary').forEach(btn => {
        pulseButton(btn);
    });
    
});

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    /* Mobile menu styles */
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
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
        }
        
        .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
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
    
    /* Smooth transitions for all interactive elements */
    * {
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
`;

document.head.appendChild(style);

// Analytics tracking (placeholder - replace with actual analytics)
function trackEvent(eventName, properties = {}) {
    console.log('Event:', eventName, properties);
    // Replace with actual analytics service like Google Analytics, Mixpanel, etc.
    // gtag('event', eventName, properties);
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
        
        // Track milestone scroll depths
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