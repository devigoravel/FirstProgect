let menu = document.querySelector('.header__button-menu');
let navbar = document.querySelector('.header__navigation');

menu.onclick = () => {
    navbar.classList.toggle('active');
}
