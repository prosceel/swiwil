export default () =>{
    const burgerButton = document.querySelector('.mobile-header__burger');
    const menu = document.querySelector('.mobile-header-menu');

    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('mobile-header__burger--is-active');
        menu.classList.toggle('mobile-header-menu--is-active');
        document.documentElement.classList.toggle('modal--is-opened');
    })
}