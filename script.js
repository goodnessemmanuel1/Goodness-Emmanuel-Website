// ============================================================
//  GOODNESS EMMANUEL — Portfolio Script
// ============================================================
 
 
// ── 1. PAGE LOADER ─────────────────────────────────────────
// Shows a branded loading screen, then fades out
const loader = document.createElement('div');
loader.className = 'page-loader';
loader.innerHTML = `
  <div class="loader-inner">
    <span class="loader-initials">GE</span>
    <div class="loader-bar"><div class="loader-bar-fill"></div></div>
  </div>`;
document.body.prepend(loader);
 
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('loader-hidden');
        loader.addEventListener('transitionend', () => loader.remove(), { once: true });
    }, 600);
});
 
 
// ── 2. SMOOTH PAGE TRANSITIONS ─────────────────────────────
// Fades out before navigating to another page, fades in on arrival
document.body.classList.add('page-transition');
 
window.addEventListener('pageshow', () => {
    document.body.classList.remove('page-leaving');
});
 
document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    // Only internal .html page links — skip anchors, mailto, external
    if (
        href &&
        !href.startsWith('#') &&
        !href.startsWith('mailto') &&
        !href.startsWith('http') &&
        href.endsWith('.html')
    ) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.body.classList.add('page-leaving');
            setTimeout(() => {
                window.location.href = href;
            }, 350);
        });
    }
});
 
 
// ── 3. MOBILE NAVIGATION TOGGLE ────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navMenu   = document.querySelector('.nav-menu');
const hamburgerLines = document.querySelectorAll('.hamburger-line');
 
function closeMenu() {
    navMenu.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    hamburgerLines[0].style.transform = 'none';
    hamburgerLines[1].style.opacity   = '1';
    hamburgerLines[2].style.transform = 'none';
}
 
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
 
        if (!isExpanded) {
            hamburgerLines[0].style.transform = 'rotate(45deg) translateY(8px)';
            hamburgerLines[1].style.opacity   = '0';
            hamburgerLines[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            closeMenu();
        }
    });
 
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) closeMenu();
        });
    });
 
    document.addEventListener('click', (e) => {
        if (
            navMenu.classList.contains('active') &&
            !navToggle.contains(e.target) &&
            !navMenu.contains(e.target)
        ) closeMenu();
    });
}
 
 
// ── 4. ACTIVE NAV LINK ─────────────────────────────────────
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href').split('/').pop();
        link.classList.toggle('active', href === currentPage);
    });
}
setActiveNav();
 
 
// ── 5. STICKY NAV SHADOW ON SCROLL ─────────────────────────
// Adds a subtle border/shadow to the navbar once user scrolls down
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('navbar-scrolled', window.scrollY > 20);
    }, { passive: true });
}
 
 
// ── 6. TYPING ANIMATION (hero page only) ───────────────────
// Cycles through roles beneath your name on the homepage
const typingEl = document.querySelector('.hero-title');
if (typingEl) {
    const roles = [
        'Front-End Developer',
        'UI / UX Enthusiast',
        'Clean Code Advocate',
        'Web Performance Nerd',
    ];
    let roleIndex   = 0;
    let charIndex   = 0;
    let isDeleting  = false;
    let pauseTimer  = null;
 
    const TYPE_SPEED   = 75;   // ms per character typed
    const DELETE_SPEED = 40;   // ms per character deleted
    const PAUSE_END    = 2000; // ms to pause at end of word
    const PAUSE_START  = 400;  // ms to pause before typing next word
 
    function type() {
        const current = roles[roleIndex];
 
        if (!isDeleting) {
            charIndex++;
            typingEl.textContent = current.slice(0, charIndex);
 
            if (charIndex === current.length) {
                // Finished typing — pause, then start deleting
                isDeleting = true;
                pauseTimer = setTimeout(type, PAUSE_END);
                return;
            }
        } else {
            charIndex--;
            typingEl.textContent = current.slice(0, charIndex);
 
            if (charIndex === 0) {
                // Finished deleting — move to next role
                isDeleting  = false;
                roleIndex   = (roleIndex + 1) % roles.length;
                pauseTimer  = setTimeout(type, PAUSE_START);
                return;
            }
        }
 
        setTimeout(type, isDeleting ? DELETE_SPEED : TYPE_SPEED);
    }
 
    // Start after a short delay so the page load animation completes first
    setTimeout(type, 1400);
 
    // Add blinking cursor via a class
    typingEl.classList.add('typing-cursor');
}
 
 
// ── 7. SCROLL-TRIGGERED FADE-IN ANIMATIONS ─────────────────
const observerOptions = {
    threshold:  0.1,
    rootMargin: '0px 0px -40px 0px'
};
 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
 
document.querySelectorAll('.about-paragraph, .contact-method, .project-card').forEach((el, i) => {
    el.classList.add('fade-in-el');
    el.style.transitionDelay = `${i * 0.07}s`;
    observer.observe(el);
});
 
 
// ── 8. SMOOTH SCROLL FOR ANCHOR LINKS ──────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
 