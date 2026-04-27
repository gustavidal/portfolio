'use strict'

const slides = document.querySelectorAll('.hero-slide');
let current = 0;

function changeSlide() {
    slides[current].classList.remove('active');
    
    current = (current + 1) % slides.length;
    
    slides[current].classList.add('active');
}

// troca a cada 3 segundos
setInterval(changeSlide, 3000);
