const parallax = document.querySelectorAll('.parallax');

function calculateScrollPercentage(section) {
  if (!section) return;

  const parallaxList = section.querySelector('.parallax__list');

  const sectionRect = parallaxList.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const centerOfViewport = windowHeight / 1.7;

  // Відстань від верхнього краю секції до центру екрана
  const distanceToCenter = centerOfViewport - sectionRect.top;

  // Розрахунок відсотка прогресу від 0 до 100%
  let visibilityPercentage = (distanceToCenter / sectionRect.height) * 100;

  // Обмежуємо значення від 0% до 100%
  visibilityPercentage = Math.max(0, Math.min(visibilityPercentage, 100));

  // console.log(`Відсоток видимості: ${visibilityPercentage.toFixed(0)}%`);

  applyStylesParallax(parallaxList, visibilityPercentage.toFixed(0));
}

function applyStylesParallax(section, visibilityPercentage) {
  const isDesktop = window.innerWidth >= 960;

  // От 0rem до 9rem
  const topValue1 = isDesktop ? (visibilityPercentage / 100) * 3.75 : 0;
  const topValue2 = isDesktop ? (visibilityPercentage / 100) * 7.5 : 0;

  // Перевірка наявності класу 'apply-styles'
  if (!section.classList.contains('apply-styles')) return;

  const parallaxItems = section.querySelectorAll('& > li');

  // Додаємо style.top всім, крім першого елемента
  parallaxItems.forEach((card, index) => {
    if (index === 0) return; // Пропускаємо перший елемент

    // Застосовуємо різні значення для другого та третього елемента
    if (index === 1) {
      card.style.top = `${topValue1}rem`;
    } else if (index === 2) {
      card.style.top = `${topValue2}rem`;
    }
  });
}

function applyStylesBeta(visibilityPercentage) {
  const isDesktop = window.innerWidth >= 960;

  const translateXValue = isDesktop
    ? -45 + (visibilityPercentage / 100) * 45
    : -35 + (visibilityPercentage / 100) * 35;
  const translateYValue = -10 + (visibilityPercentage / 100) * 10;
  const opacityValue = visibilityPercentage / 100;
  const scaleValue = 0.3 + (visibilityPercentage / 100) * (1 - 0.3);

  heroBoxTxt.style.transform = `translate(${translateXValue}%, ${translateYValue}rem) scale(${scaleValue})`;

  heroVec.style.transform = `translateY(${translateYValue}%)`;
  heroVec.style.opacity = opacityValue;

  heroFilter.style.opacity = opacityValue;

  const topValue = isDesktop
    ? (visibilityPercentage / 100) * 9
    : (visibilityPercentage / 100) * 6.5625; // От 0rem до 9rem
  const leftValue = isDesktop
    ? (visibilityPercentage / 100) * 23.6
    : (visibilityPercentage / 100) * 0; // От 0% до 23.6%
  const gapValue = isDesktop
    ? (visibilityPercentage / 100) * 2.24
    : (visibilityPercentage / 100) * 1.0625; // От 0rem до 2.24rem

  logoWrapp.style.top = `${topValue}rem`;
  logoWrapp.style.left = `${leftValue}%`;
  logoWrapp.style.gap = `${gapValue}rem`;

  const logoLinkWidth = isDesktop
    ? 3 + (visibilityPercentage / 100) * (13.4375 - 3)
    : 3 + (visibilityPercentage / 100) * (6.36938 - 3); // От 3rem до 13.4375rem

  logoLink.style.width = `${logoLinkWidth}rem`;

  const logoTxtWidth = (visibilityPercentage / 100) * 100; // От 0% до 100%

  logoTxt.style.width = `${logoTxtWidth}%`;
}

function initScrollAnim() {
  parallax?.forEach(section => {
    calculateScrollPercentage(section);
  });
}

window.addEventListener('scroll', initScrollAnim);
window.addEventListener('resize', initScrollAnim);
document.addEventListener('DOMContentLoaded', initScrollAnim);
