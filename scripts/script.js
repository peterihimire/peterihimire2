let mainNav = document.querySelector('#js-menu');
let navBarToggle = document.querySelector('#js-navbar-toggle')

navBarToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});



new Glider(document.querySelector('.glider'), {
    slidesToShow: 4,
    draggable: true,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});