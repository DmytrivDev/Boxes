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

// const homeSlider = document.querySelector('.home-slider');
// if (homeSlider) {
//   initSlider(homeSlider, {
//     perPage: 4,
//     gap: '1.5rem',
//     breakpoints: {
//       960: {
//         perPage: 3,
//         gap: '0.25rem',
//       },
//       775: {
//         perPage: 2,
//       },
//     },
//   });
// }
