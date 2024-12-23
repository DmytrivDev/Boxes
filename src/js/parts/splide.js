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
    },
  });
}

const similar = document.querySelector('.similar');
if (similar) {
  initSlider(similar, {
    perPage: 4,
    gap: '1.5rem',
    breakpoints: {
      960: {
        perPage: 2,
        gap: '0.25rem',
      },
      775: {
        perPage: 1,
      },
    },
  });
}

const gallery = document.querySelector('.gallery');
if (gallery) {
  initSlider(gallery, {
    perPage: 1,
    gap: '1.5rem',
    width: '50%',
    breakpoints: {
      960: {
        gap: '0.3125rem',
        width: '60%',
      },
      675: {
        width: '100%',
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
      perPage: 2,
      gap: '0.25rem',
      breakpoints: {
        530: {
          perPage: 1,
        },
      },
    });
  }
};

let favorSliderInstance;
const favor = document.querySelector('.favor');

const initFavorSlider = () => {
  if (favor && !favorSliderInstance) {
    favorSliderInstance = initSlider(favor, {
      perPage: 2,
      gap: '0.25rem',
      breakpoints: {
        530: {
          perPage: 1,
        },
      },
    });
  }
};

let controlSliderInstance;
const control = document.querySelector('.control');

const initСontrolSlider = () => {
  if (control && !controlSliderInstance) {
    controlSliderInstance = initSlider(control, {
      perPage: 2,
      gap: '0.25rem',
      breakpoints: {
        530: {
          perPage: 1,
        },
      },
    });
  }
};

let stagesSliderInstance;
const stages = document.querySelector('.stages');

const initStagesSlider = () => {
  if (stages && !stagesSliderInstance) {
    stagesSliderInstance = initSlider(stages, {
      perPage: 2,
      gap: '0.25rem',
      breakpoints: {
        530: {
          perPage: 1,
        },
      },
    });
  }
};

let onecaseSliderInstance;
const onecase = document.querySelector('.onecase');

const initOnecaseSlider = () => {
  if (onecase && !onecaseSliderInstance) {
    onecaseSliderInstance = initSlider(onecase, {
      perPage: 1,
      gap: '0.25rem',
    });
  }
};

const destroySliders = () => {
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

const destroySlidersOurproduct = () => {
  if (ourproductSliderInstance) {
    ourproductSliderInstance.destroy();
    ourproductSliderInstance = null;
  }
};

const destroySlidersOnecase = () => {
  if (onecaseSliderInstance) {
    onecaseSliderInstance.destroy();
    onecaseSliderInstance = null;
  }
};

const checkViewport = () => {
  initOurproductSlider();
  initFeaturSlider();
  initFavorSlider();
  initСontrolSlider();
  initStagesSlider();
  initOnecaseSlider();
  if (window.innerWidth > 960) {
    destroySlidersOnecase();
  }
  if (window.innerWidth > 775) {
    destroySliders();
  }
  if (window.innerWidth > 668) {
    destroySlidersOurproduct();
  }
};

checkViewport();
window.addEventListener('resize', checkViewport);
