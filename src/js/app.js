import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

var swiper = new Swiper(".hero__slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: -30,
    depth: 200,
    modifier: 2,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    992: {
      coverflowEffect: {
        rotate: 0,
        stretch: -100,
        depth: 400,
        modifier: 1,
      },
    },
  },
});

// Burger functionality
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const signUp = document.querySelector(".action__sign-up");
const menuItems = document.querySelectorAll(".menu__item");
const menuItemHeight =
  document.querySelector(".menu__item").clientHeight * menuItems.length +
  (35 * menuItems.length + 100);

burger.addEventListener("click", () => {
  if (!menu.classList.contains("active")) {
    menu.classList.add("active");
    burger.classList.add("active-burger");
    body.classList.add("locked");
    overlay.classList.add("active");
    signUp.classList.add("active");
  } else {
    menu.classList.remove("active");
    burger.classList.remove("active-burger");
    body.classList.remove("locked");
    overlay.classList.remove("active");
    signUp.classList.remove("active");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 991.98) {
    menu.classList.remove("active");
    burger.classList.remove("active-burger");
    body.classList.remove("locked");
    overlay.classList.remove("active");
    signUp.classList.remove("active");
  }
  if (window.innerWidth < 768) {
    signUp.style.top = menuItemHeight + "px";
  }
});

// Centr menu for more items 
window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 768) {
    signUp.style.top = menuItemHeight + "px";
  }

  if (window.innerWidth > 1240) {
    if (menuItems.length >= 5) {
      menu.style.marginRight = "70px";
    }
    if (menuItems.length >= 6) {
      menu.style.marginRight = "unset";
      menu.style.justifyContent = "center";
    }
  }
});
