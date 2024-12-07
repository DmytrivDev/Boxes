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

const brands = document.querySelector('.brands');
if (brands) {
  initSlider(brands, {
    perPage: 6,
    gap: '1.5rem',
    breakpoints: {
      960: {
        perPage: 5,
        gap: '1.25rem',
      },
      775: {
        perPage: 4,
      },
    },
  });
}

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

let featurSliderInstance;
const featur = document.querySelector('.featur');

const initFeaturSlider = () => {
  if (featur && !featurSliderInstance) {
    featurSliderInstance = initSlider(featur, {
      perPage: 1,
      gap: '0.25rem',
    });
  }
};

let favorSliderInstance;
const favor = document.querySelector('.favor');

const initFavorSlider = () => {
  if (favor && !favorSliderInstance) {
    favorSliderInstance = initSlider(favor, {
      perPage: 1,
      gap: '0.25rem',
    });
  }
};

let controlSliderInstance;
const control = document.querySelector('.control');

const initСontrolSlider = () => {
  if (control && !controlSliderInstance) {
    controlSliderInstance = initSlider(control, {
      perPage: 1,
      gap: '0.25rem',
    });
  }
};

let stagesSliderInstance;
const stages = document.querySelector('.stages');

const initStagesSlider = () => {
  if (stages && !stagesSliderInstance) {
    stagesSliderInstance = initSlider(stages, {
      perPage: 1,
      gap: '0.25rem',
    });
  }
};

const destroySliders = () => {
  if (ourproductSliderInstance) {
    ourproductSliderInstance.destroy();
    ourproductSliderInstance = null;
  }
  if (featurSliderInstance) {
    featurSliderInstance.destroy();
    featurSliderInstance = null;
  }
  if (favorSliderInstance) {
    favorSliderInstance.destroy();
    favorSliderInstance = null;
  }
  if (controlSliderInstance) {
    controlSliderInstance.destroy();
    controlSliderInstance = null;
  }
  if (stagesSliderInstance) {
    stagesSliderInstance.destroy();
    stagesSliderInstance = null;
  }
};

const checkViewport = () => {
  initOurproductSlider();
  initFeaturSlider();
  initFavorSlider();
  initСontrolSlider();
  initStagesSlider();
  if (window.innerWidth > 775) {
    destroySliders();
  }
};

checkViewport();
window.addEventListener('resize', checkViewport);
