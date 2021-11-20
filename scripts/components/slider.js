// DOM elements
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');

// Global
let index = 0;

// Event handlers
const activeSlide = el => {
    for(let slide of slides) {
        slide.classList.remove('active');
    };
    slides[el].classList.add('active');
};

const activeDot = el => {
    for(let dot of dots) {
        dot.classList.remove('active');
    };
    dots[el].classList.add('active');
};

// Helper function
const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
};

const nextSlide = () => {
    if(index === slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    };
};

const prevSlide = () => {
    if(index === 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    };
};

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    });
});

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

export function slider() {
setInterval(nextSlide, 5000);
}