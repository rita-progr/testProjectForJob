const closeFav = document.querySelector('.favourite-close');
const modalFav = document.getElementById('favouritePage');

closeFav.addEventListener('click', () => {
    modalFav.classList.remove('add');
})
