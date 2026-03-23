document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    // Toggle Mobile Menu
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        mobileBtn.classList.toggle('active');
        
        // Accessibility
        const expanded = mobileBtn.getAttribute('aria-expanded') === 'true' || false;
        mobileBtn.setAttribute('aria-expanded', !expanded);
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                mobileBtn.classList.remove('active');
                mobileBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Active Link Highlighting
    const currentLocation = location.href;
    links.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });

    // Sticky Navbar shadow on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.style.boxShadow = 'var(--shadow-sm)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});
