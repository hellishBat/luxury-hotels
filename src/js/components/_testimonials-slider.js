import Swiper, {
  Navigation,
  Autoplay,
  EffectFade,
  Keyboard
} from 'swiper';

Swiper.use([Navigation, Autoplay, EffectFade, Keyboard]);

export var testimonialsSlider = new Swiper('.testimonials__slider', {
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  navigation: {
    nextEl: '.testimonials__btn--next',
    prevEl: '.testimonials__btn--prev',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
