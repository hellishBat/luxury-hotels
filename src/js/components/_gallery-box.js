import baguetteBox from 'baguettebox.js';

export const galleryBox = baguetteBox.run('.js-gallery-box', {
  async: true,
  animation: 'fadeIn',
});
