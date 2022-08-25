const menu = document.querySelector(".menu");
const openClose = document.querySelector(".header__menu-wrap");
const menuOpen = document.querySelector(".line");
const menuClose = document.querySelector(".header__close");
const link = document.querySelectorAll(".nav__link");
const main = document.querySelector(".main");

const openMenu = () => {
    openClose.addEventListener("click", function () {
        openClose.classList.toggle("open");
        menu.classList.toggle("animation");
        setTimeout(() => {
            menu.classList.toggle("transform");
        }, 0.5);
    });
};

link.forEach((el) => {
    el.addEventListener("click", function () {
        openClose.classList.toggle("open");
        menu.classList.toggle("animation");
        setTimeout(() => {
            menu.classList.toggle("transform");
        }, 0.5);
    });
});
openMenu();
export default Menu;
