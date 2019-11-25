const navbarBtn = document.querySelector('.navbar_btn');
const navbarLinks = document.querySelector('.navbar_links');

// For menu button
navbarBtn.addEventListener('click' , () => {
    let value = navbarLinks.classList.contains('navbar_collapse');

    if(value){
        navbarLinks.classList.remove('navbar_collapse');
        navbarBtn.classList.remove('change');
    }else{
        navbarLinks.classList.add('navbar_collapse');
        navbarBtn.classList.add('change');
    }
})

// For Glider JS 
new Glider(document.querySelector('.glider'), {
    slidesToShow: 4,
    draggable: true,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});

// For AOS
AOS.init();