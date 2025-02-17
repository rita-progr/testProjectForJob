

window.loadNav = function() {
    fetch('./../partials/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
            const icon = document.querySelector('.user');
            const modal = document.querySelector('.modalRegistration-wrapper');
            const close = document.querySelector('.signup-close');
            const closeLogin = document.querySelector('.login-close');
            const loginSet = document.querySelector('.login-set');
            const registerSet = document.querySelector('.register-set');
            const loginModal = document.querySelector('.modalLogin-wrapper');
            const contactIcon = document.querySelector('.contact-icon');
            const modalContact = document.getElementById('contacts-wrapper');
            const iconFav = document.querySelector('.favourite-icon');
            const modalFav = document.getElementById('favouritePage');
            loginSet.addEventListener('click', () => {
                modal.classList.remove('add');
                loginModal.classList.add('add');
            })
            registerSet.addEventListener('click', () => {
                modal.classList.add('add');
                loginModal.classList.remove('add');
            })

            close.addEventListener('click', () => {
                modal.classList.remove('add');
            })
            closeLogin.addEventListener('click', () => {
                loginModal.classList.remove('add');
            })

            icon.addEventListener('click', () => {
                modal.classList.toggle('add');
            })
            contactIcon.addEventListener('click', () => {
                modalContact.classList.add('add');
            })

            iconFav.addEventListener('click', () => {
                modalFav.classList.toggle('add');
            })

        })
        .catch(error => console.error('Ошибка при загрузке навигации:', error));
}

document.addEventListener('DOMContentLoaded', loadNav);