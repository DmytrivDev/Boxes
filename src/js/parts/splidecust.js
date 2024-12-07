import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export const initSlider = (container, options = {}) => {
  const sliderElement = container.querySelector('.splide');
  if (!sliderElement) return;

  const splide = new Splide(sliderElement, {
    type: 'slide',
    speed: 1000,
    pagination: false,
    arrows: false,
    updateOnMove: true,
    perMove: 1,

    ...options,
  }).mount();

  const progressbar = container.querySelector('.progressbar__thumb');
  const arrows = {
    next: container.querySelector('.arrows__next'),
    prev: container.querySelector('.arrows__prev'),
    number: container.querySelector('.arrows__number'),
  };

  const updateSlideState = () => {
    const totalSlides = Math.ceil(
      splide.Components.Slides.getLength() / splide.options.perPage
    );
    const currentIndex = Math.ceil(splide.index / splide.options.perPage) + 1;

    const isAtStart = splide.index === 0;
    const isAtEnd = splide.index === splide.Components.Controller.getEnd();

    if (arrows.next && arrows.prev) {
      arrows.next.disabled = isAtEnd;
      arrows.prev.disabled = isAtStart;
      arrows.next.classList.toggle('isDisabled', isAtEnd);
      arrows.prev.classList.toggle('isDisabled', isAtStart);
    }

    if (arrows.number) {
      arrows.number.textContent = `${currentIndex}/${totalSlides}`;
    }

    if (progressbar) {
      const totalSlides = splide.Components.Elements.slides.length + 1;
      const progress =
        (((splide.index + 1) % totalSlides) /
          (totalSlides - splide.options.perPage)) *
        100;
      progressbar.style.width = `${progress}%`;
    }
  };

  arrows.next?.addEventListener('click', () => splide.go('>'));
  arrows.prev?.addEventListener('click', () => splide.go('<'));

  if (splide.options.type === 'fade') {
    splide.on('moved', updateSlideState);
  } else {
    splide.on('move', updateSlideState);
  }

  window.addEventListener('resize', updateSlideState);

  updateSlideState();

  return splide;
};

// <section class="elem">
//   <div class="splide">
//     <div class="splide__track">
//       <ul class="splide__list">
//         <li class="splide__slide">
//           <p>slide 1</p>
//         </li>
//         <li class="splide__slide">
//           <p>slide 1</p>
//         </li>
//       </ul>
//     </div>
//   </div>

//   <div class="arrows">
//     <div class="arrows__body">
//       <button type="button" class="arrows__prev">
//         <span>Назад</span>
//       </button>
//       <span class="arrows__number">1/1</span>
//       <button type="button" class="arrows__next">
//         <span>Далі</span>
//       </button>
//     </div>
//   </div>
// </section>;
