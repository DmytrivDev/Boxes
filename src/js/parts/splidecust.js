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

  const navigationElems = {
    next: container.querySelector('.arrows__next'),
    prev: container.querySelector('.arrows__prev'),
    number: container.querySelector('.arrows__number'),
    progressbar: container.querySelector('.progressbar__thumb'),
  };
  const { next, prev, number, progressbar } = navigationElems;

  const updateSlideState = () => {
    const totalSlides = Math.ceil(
      splide.Components.Slides.getLength() / splide.options.perPage
    );
    const currentIndex = Math.ceil(splide.index / splide.options.perPage) + 1;

    const isAtStart = splide.index === 0;
    const isAtEnd = splide.index === splide.Components.Controller.getEnd();

    if (next && prev) {
      next.disabled = isAtEnd;
      prev.disabled = isAtStart;
      next.classList.toggle('isDisabled', isAtEnd);
      prev.classList.toggle('isDisabled', isAtStart);
    }

    if (number) {
      number.textContent = `${currentIndex}/${totalSlides}`;
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

  next?.addEventListener('click', () => splide.go('>'));
  prev?.addEventListener('click', () => splide.go('<'));

  if (splide.options.type === 'fade') {
    splide.on('moved', updateSlideState);
  } else {
    splide.on('move', updateSlideState);
  }

  window.addEventListener('resize', updateSlideState);

  updateSlideState();

  return splide;
};
