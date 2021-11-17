import Swiper, {
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
  Keyboard,
} from "swiper";

Swiper.use([Pagination, Navigation, Autoplay, EffectFade, Keyboard]);

const roomsSliders = document.querySelectorAll(".rooms__gallery");

export const testimonialsSlider = new Swiper(".testimonials__slider", {
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  navigation: {
    nextEl: ".testimonials__btn--next",
    prevEl: ".testimonials__btn--prev",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

export default (function () {
  for (let i = 0; i < roomsSliders.length; i++) {
    roomsSliders[i].classList.add("rooms__gallery--" + i);

    const roomsSlider = new Swiper(".rooms__gallery--" + i, {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".rooms__pagination",
        clickable: true,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    });
  }
})();
