const menuIcon = document.getElementById('menu-icon');
const nav = document.getElementById('nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active'); // Agregar o quitar la clase 'active'
});
