document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function () {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
});
