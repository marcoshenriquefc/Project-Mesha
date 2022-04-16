const burgerMenu = document.querySelector('#burger-menu');

burgerMenu.addEventListener('click', toggleMenu)

function toggleMenu(){
    const nav = document.querySelector('#nav-header ul');
    nav.classList.toggle('active');
    burgerMenu.classList.toggle('active')
};
