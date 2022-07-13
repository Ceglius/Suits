import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const hero__slider = new Swiper(".hero__slider", {
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
    nextEl: ".hero-btn-next",
    prevEl: ".hero-btn-prev",
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

const promo = new Swiper(".promo__slider", {
  loop: true,
  initialSlide: 2,
  grabCursor: true,
  centeredSlides: false,
  spaceBetween: 20,
  pagination: {
    el: ".promo-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".promo-next",
    prevEl: ".promo-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    280: {
      slidesPerView: 1.2,
      spaceBetween: 5,
    },

    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 3,
      centeredSlides: true,
    },

    992: {
      slidesPerView: 4.2,
    },
    1050: {
      slidesPerView: 5,
    },
  },
});

const trending = new Swiper(".trending__slider", {
  loop: true,
  spaceBetween: 20,
  initialSlide: 2,
  grabCursor: true,
  pagination: {
    el: ".trending-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".trending-next",
    prevEl: ".trending-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    280: {
      slidesPerView: 1,
    },

    // when window width is >= 480px
    430: {
      slidesPerView: 1.5,
    },
    584: {
      slidesPerView: 1.8,
    },
    726: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 2.5,
    },
    1050: {
      slidesPerView: 3,
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
const gridLink = document.querySelectorAll(".grid__item-link > a");
const gridItem = document.querySelectorAll(".grid__item-link");
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



//  Check if is ist tablet mobile or desktop

window.addEventListener("DOMContentLoaded", () => {
 const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    gridLink.forEach((element) => {
      element.style.visibility = "visible";
      element.style.opacity = 1;
    });
    gridItem.forEach((element) => {
      element.style.background =
        "linear-gradient(0deg, rgba(0, 0, 0, 0.33),rgba(0, 0, 0, 0.33))";
    });
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    gridItem.forEach((element) => {
      element.style.background =
        "linear-gradient(0deg, rgba(0, 0, 0, 0.33),rgba(0, 0, 0, 0.33))";
    });
    gridLink.forEach((element) => {
      element.style.visibility = "visible";
      element.style.opacity = 1;
    });
  }
  return;
})



