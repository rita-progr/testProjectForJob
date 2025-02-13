const closeContatcs = document.querySelector('.close-contacts');
const modal = document.getElementById('contacts-wrapper');

console.log(closeContatcs);
closeContatcs.addEventListener('click', () => {
    modal.classList.remove('add');
})