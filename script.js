// ── Mobile Navigation Toggle ───────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const hamburgerLines = document.querySelectorAll('.hamburger-line');

function closeMenu() {
    navMenu.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    hamburgerLines[0].style.transform = 'none';
    hamburgerLines[1].style.opacity = '1';
    hamburgerLines[2].style.transform = 'none';
}

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');

        if (!isExpanded) {
            hamburgerLines[0].style.transform = 'rotate(45deg) translateY(8px)';
            hamburgerLines[1].style.opacity = '0';
            hamburgerLines[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            closeMenu();
        }
    });

    // Close on nav link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) closeMenu();
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') &&
            !navToggle.contains(e.target) &&
            !navMenu.contains(e.target)) {
            closeMenu();
        }
    });
}

// ── Set Active Nav Based on Current Page ──────────────────
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href').split('/').pop();
        link.classList.toggle('active', href === currentPage);
    });
}
setActiveNav();

// ── Smooth Scroll for Anchor Links ────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ── Scroll-triggered Fade-in Animations ───────────────────
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const elementsToAnimate = document.querySelectorAll('.about-paragraph, .contact-method');
elementsToAnimate.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
    observer.observe(el);
});