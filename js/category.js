const goods = document.querySelector('#category_goods');
const button = document.querySelector('.category__details');

button.addEventListener('click', () => {
    goods.classList.toggle('add');
})