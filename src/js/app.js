import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';

// Gasllery products swiper 

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Burger functionality


function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

function fixedNav() {
  const nav = document.querySelector("nav");

  const breakpoint = 1;
  if (window.scrollY >= breakpoint) {
    nav.classList.add("fixed__nav");
  } else {
    nav.classList.remove("fixed__nav");
  }
}
window.addEventListener("scroll", fixedNav);


