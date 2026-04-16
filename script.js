document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const drawer = document.getElementById('mobileDrawer');
    const nav = document.getElementById('mainNavbar');

    // Toggle Mobile Menu
    menuBtn.addEventListener('click', () => {
        if (drawer.style.display === 'flex') {
            drawer.style.display = 'none';
        } else {
            drawer.style.display = 'flex';
        }
    });

    // Add shadow on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.05)';
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            nav.style.boxShadow = 'none';
            nav.style.background = 'rgba(255, 255, 255, 0.8)';
        }
    });
});