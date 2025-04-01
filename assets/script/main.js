document.getElementById('auto-year').textContent = new Date().getFullYear();

const hamburger = document.querySelector('#menu-btn');
const navLinks = document.querySelector('#nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});