import jQuery from "jquery";
import "bootstrap";
// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/assets/scss/app.scss";

(function ($) {
  setTimeout(() => {
    $("#app-loader").hide();
  }, 1000);
})(jQuery);


// init Swiper:
const slideshow = new Swiper(".slideshow .swiper", {
  slidesPerView: 1, 
  navigation: {
    nextEl: ".slideshow .swiper-button-next",
    prevEl: ".slideshow .swiper-button-prev",
  },
  modules: [Navigation],
});
// init Swiper:
const projects = new Swiper(".featured-projects .swiper", {
  slidesPerView: 1,
  spaceBetween: 25,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".featured-projects .swiper-button-next",
    prevEl: ".featured-projects .swiper-button-prev",
  },
  modules: [Navigation],
});

const partners = new Swiper(".partners-section .swiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: ".partners-section .swiper-button-next",
    prevEl: ".partners-section .swiper-button-prev",
  },
  pagination: {
    el: ".partners-section .swiper-pagination",
    clickable: true
  },
  modules: [Navigation, Pagination],
});
