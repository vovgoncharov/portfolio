'use strict';
const menu = document.querySelector(".menu");
const openClose = document.querySelector(".header__menu-wrap");
const menuOpen = document.querySelector(".header__menu");
const menuClose = document.querySelector(".header__close");
const link = document.querySelectorAll(".nav__link");
const main = document.querySelector(".main");

const openMenu = () => {
    openClose.addEventListener("click", function () {
        menu.classList.toggle("animation");
        menuOpen.classList.toggle("none");
        menuClose.classList.toggle("block");
    });
};

link.forEach((el) => {
    el.addEventListener("click", function () {
        menu.classList.toggle("animation");
        menuOpen.classList.toggle("none");
        menuClose.classList.toggle("block");
    });
});
const closeMenu = () => {
    main.addEventListener("click", function () {
        menu.classList.toggle("animation");
        menuOpen.classList.toggle("none");
        menuClose.classList.toggle("block");
    });
};
closeMenu();
openMenu();
