

function loadNav() {
    fetch('./../partials/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Ошибка при загрузке навигации:', error));
}

document.addEventListener('DOMContentLoaded', loadNav);