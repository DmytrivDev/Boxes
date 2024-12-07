import { initSlider } from './splidecust';

const sliderDef = document.querySelectorAll('.slider-def');
sliderDef?.forEach(container => {
  initSlider(container, {
    perPage: 4,
    gap: '1.5rem',
    breakpoints: {
      960: {
        perPage: 3,
        gap: '0.25rem',
      },
      775: {
        perPage: 2,
      },
    },
  });
});

let ourproductSliderInstance;
const ourproduct = document.querySelector('.ourproduct');

const initOurproductSlider = () => {
  if (ourproduct && !ourproductSliderInstance) {
    ourproductSliderInstance = initSlider(ourproduct, {
      perPage: 2,
      gap: '0.25rem',
    });
  }
};

const destroySliders = () => {
  if (ourproductSliderInstance) {
    ourproductSliderInstance.destroy();
    ourproductSliderInstance = null;
  }
};

const checkViewport = () => {
  initOurproductSlider();
  if (window.innerWidth > 775) {
    destroySliders();
  }
};

checkViewport();
window.addEventListener('resize', checkViewport);
