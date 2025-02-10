const slides = document.querySelectorAll('.slide');
let activeIndex = 0;
slides.forEach(slide => {
    slides[activeIndex].classList.add('active');
})

function updateActiveSlide(newActiveIndex) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[newActiveIndex].classList.add('active');
    activeIndex = newActiveIndex;
}

slides.forEach((slide, index) => {
    slide.addEventListener('mouseenter', () => {
        if (index !== activeIndex) {
            updateActiveSlide(index); // Обновляем активный слайд
        }
    });
});

// document.querySelector('.slider-container').addEventListener('mouseleave',()=>{
//     updateActiveSlide(activeIndex);
// })