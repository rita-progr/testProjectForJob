const closeContatcs = document.querySelector('.close-contacts');
const closeContatcsMini = document.querySelector('.close-contacts-change');

const modal = document.getElementById('contacts-wrapper');

console.log(closeContatcs);
closeContatcs.addEventListener('click', () => {
    modal.classList.remove('add');
})
closeContatcsMini.addEventListener('click', () => {
    modal.classList.remove('add');
})