let mainNav = document.querySelector('.main-nav');
let navBarToggle = document.querySelector('.navbar-toggle')

navBarToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

navBarToggle.addEventListener('click', () => {
    mainNav.classList.toggle('change');
});