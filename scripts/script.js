let mainNav = document.querySelector('#js-menu');
let navBarToggle = document.querySelector('#js-navbar-toggle')

navBarToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});