"use strict";
import i18Obj from "./translate.js";
const menu = document.querySelector(".menu");
const openClose = document.querySelector(".header__menu-wrap");
const link = document.querySelectorAll(".nav__link");

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

const portfolioBtn = document.querySelectorAll(".portfolio__btn");
const portfolioImage = document.querySelectorAll(".portfolio__gallery");

portfolioBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
        let data = e.currentTarget.dataset.season;
        portfolioImage.forEach((el, index) => {
            el.src = `./assets/img/${data}/${index + 1}.jpg`;
        });
    });
});

const seasons = ["winter", "spring", "summer", "autumn"];

function preloadSummerImages() {
    for (let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./assets/img/${seasons.forEach((el) => el)}/${i}.jpg`;
    }
}
preloadSummerImages();

const getBut = () => {
    portfolioBtn.forEach((el) => {
        el.addEventListener("click", (e) => {
            document
                .querySelector(".portfolio__btn.active")
                ?.classList.remove("active");
            e.currentTarget.classList.toggle("active");
        });
    });
};
getBut();

const data = document.querySelectorAll("[data-i18]");
const en = document.querySelector(".lng__en");
const ru = document.querySelector(".lng__ru");

en.addEventListener("click", (e) => {
    e.currentTarget.classList.add("lng__active");
    ru.classList.remove("lng__active");
});
ru.addEventListener("click", (e) => {
    e.currentTarget.classList.add("lng__active");
    en.classList.remove("lng__active");
});
const getTranslate = (i18Obj) => {
    const arr = data.forEach((el) => {
        return (el.textContent = `${i18Obj[el.dataset.i18]}`);
    });
    return arr;
};

const getEn = (i18Obj) => {
    en.addEventListener("click", () => getTranslate(i18Obj));
};
getEn(i18Obj.en);
const getRu = (i18Obj) => {
    ru.addEventListener("click", () => getTranslate(i18Obj));
};
getRu(i18Obj.ru);

const getButs = () => {
    portfolioBtn.forEach((el) => {
        el.addEventListener("click", (e) => {
            document
                .querySelector(".portfolio__btn.black-colorse")
                ?.classList.remove("black-colorse");
            e.currentTarget.classList.toggle("black-colorse");
        });
    });
};

const themeBtn = document.querySelector(".theme");
const bgThemes = document.querySelectorAll(".bg-theme");
const wrapTitle = document.querySelectorAll(".title-wrap");
const portfolioHover = document.querySelectorAll(".black-color");

const changeTheme = () => {
    themeBtn.addEventListener("click", () => {
        bgThemes.forEach((el) => el.classList.toggle("bg-theme-style"));
        wrapTitle.forEach((el) => el.classList.toggle("wrap-title"));
        portfolioHover.forEach((el) => el.classList.toggle("black-colors"));
        getButs();
    });
};
changeTheme();
