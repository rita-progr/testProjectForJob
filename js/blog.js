// document.addEventListener('DOMContentLoaded', () => {
//     const sliderContainer = document.querySelector('.slider-container');
//     const slides = document.querySelectorAll('.blog___slider_form');
//     let isDragging = false;
//     let startPos = 0;
//     let currentTranslate = 0;
//     let prevTranslate = 0;
//     let currentIndex = 0;
//
//     // Функция для переключения слайдов
//     const goToSlide = (index) => {
//         if (index < 0) index = slides.length - 1;
//         if (index >= slides.length) index = 0;
//
//         currentIndex = index;
//         currentTranslate = -index * sliderContainer.offsetWidth;
//         sliderContainer.style.transform = `translateX(${currentTranslate}px)`;
//     };
//
//     // События для мыши
//     sliderContainer.addEventListener('mousedown', (e) => {
//         isDragging = true;
//         startPos = e.clientX;
//         sliderContainer.style.cursor = 'grabbing';
//     });
//
//     sliderContainer.addEventListener('mousemove', (e) => {
//         if (isDragging) {
//             const currentPosition = e.clientX;
//             const diff = currentPosition - startPos;
//             sliderContainer.style.transform = `translateX(${currentTranslate + diff}px)`;
//         }
//     });
//
//     sliderContainer.addEventListener('mouseup', () => {
//         if (isDragging) {
//             isDragging = false;
//             sliderContainer.style.cursor = 'grab';
//
//             const movedBy = currentTranslate - prevTranslate;
//             if (movedBy < -100 && currentIndex < slides.length - 1) {
//                 currentIndex += 1;
//             }
//             if (movedBy > 100 && currentIndex > 0) {
//                 currentIndex -= 1;
//             }
//
//             goToSlide(currentIndex);
//         }
//     });
//
//     sliderContainer.addEventListener('mouseleave', () => {
//         if (isDragging) {
//             isDragging = false;
//             sliderContainer.style.cursor = 'grab';
//             goToSlide(currentIndex);
//         }
//     });
//
//     // События для сенсорных устройств
//     sliderContainer.addEventListener('touchstart', (e) => {
//         isDragging = true;
//         startPos = e.touches[0].clientX;
//     });
//
//     sliderContainer.addEventListener('touchmove', (e) => {
//         if (isDragging) {
//             const currentPosition = e.touches[0].clientX;
//             const diff = currentPosition - startPos;
//             sliderContainer.style.transform = `translateX(${currentTranslate + diff}px)`;
//         }
//     });
//
//     sliderContainer.addEventListener('touchend', () => {
//         if (isDragging) {
//             isDragging = false;
//
//             const movedBy = currentTranslate - prevTranslate;
//             if (movedBy < -100 && currentIndex < slides.length - 1) {
//                 currentIndex += 1;
//             }
//             if (movedBy > 100 && currentIndex > 0) {
//                 currentIndex -= 1;
//             }
//
//             goToSlide(currentIndex);
//         }
//     });
// });