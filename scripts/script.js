let mainNav = document.querySelector('.main-nav');
let navBarToggle = document.querySelector('.navbar-toggle')

navBarToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

navBarToggle.addEventListener('click', () => {
    mainNav.classList.toggle('change');
});



new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    draggable: true,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});