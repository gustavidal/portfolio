'use strict'

// SLIDESHOW
const slides = document.querySelectorAll('.hero-slide');
let current = 0;

function changeSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}

if (slides.length > 0) {
    setInterval(changeSlide, 3000);
}

// THEME TOGGLE
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// LANGUAGE TOGGLE
const languageToggle = document.getElementById('languageToggle');
let currentLang = 'pt';

languageToggle.addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    languageToggle.title = currentLang === 'pt' ? 'Translate to English' : 'Traduzir para inglês';

    document.querySelectorAll('[data-pt]').forEach(el => {
        const translation = el.getAttribute(`data-${currentLang}`);
        if (!translation) return;

        // Se contém HTML (tags), usa innerHTML; senão usa textContent
        if (translation.includes('<')) {
            el.innerHTML = translation;
        } else {
            el.textContent = translation;
        }
    });
});

// MOBILE MENU
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
