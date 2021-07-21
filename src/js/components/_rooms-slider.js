import Swiper, {
  Pagination,
  EffectFade
} from 'swiper';

Swiper.use([Pagination, EffectFade]);

var customSlider = document.querySelectorAll('.rooms__gallery');
var i;

for (i = 0; i < customSlider.length; ++i) {

  customSlider[i].classList.add('rooms__gallery--' + i);

  var roomsSlider = new Swiper('.rooms__gallery--' + i, {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.rooms__pagination',
      clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });
}

export {
  customSlider,
  roomsSlider
};
