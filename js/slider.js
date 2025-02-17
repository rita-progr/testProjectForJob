const slides = document.querySelectorAll('.slide');
let activeIndex = 0;
slides.forEach(slide => {
    slides[activeIndex].classList.add('active');
    removeChildElementsExceptImg(slide);
    addChildElementsExceptImg( slides[activeIndex]);
})

function updateActiveSlide(newActiveIndex) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[newActiveIndex].classList.add('active');
    activeIndex = newActiveIndex;
    slides.forEach((slide) => {
        if (!slide.classList.contains('active')) {
            removeChildElementsExceptImg(slide);
        }else{
            addChildElementsExceptImg(slide);
        }
    });
}
function removeChildElementsExceptImg(element) {
    const children = Array.from(element.children);
    console.log(element);
    element.style.backgroundImage = '';
    children.forEach(child => {
        if (child.tagName !== 'IMG') {
            child.classList.remove('add');
            child.classList.add('remove');
        }
    });
}
function addChildElementsExceptImg(element) {
    const children = Array.from(element.children);
    children.forEach(child => {
        if (child.tagName !== 'IMG') {
            child.classList.remove('remove');
            child.classList.add('add');
        }
    });
}

slides.forEach((slide, index) => {
    slide.addEventListener('mouseenter', () => {
        if (index !== activeIndex) {
            updateActiveSlide(index);
        }
    });
});

// document.querySelector('.slider-container').addEventListener('mouseleave',()=>{
//     updateActiveSlide(activeIndex);
// })