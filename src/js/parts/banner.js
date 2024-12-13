const bannerCarousels = document.querySelectorAll('.banner__carousell');

if (bannerCarousels.length > 0) {
  let lastScrollTop = window.scrollY;

  // Функция для проверки видимости элемента
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  // Функция для получения текущей скорости в зависимости от ширины экрана
  function getScrollSpeed() {
    return window.innerWidth > 960 ? 3 : 2;
  }

  // Функция для обработки прокрутки
  function handleScroll(banner) {
    if (!isElementInViewport(banner)) return;

    const currentScrollTop = window.scrollY;
    const scrollDirection = currentScrollTop > lastScrollTop ? -1 : 1; // Определяем направление прокрутки

    let translateX = parseFloat(banner.dataset.translateX) || 0;
    translateX += scrollDirection * getScrollSpeed(); // Используем динамическую скорость

    banner.style.transform = `translateX(${translateX}px)`;
    banner.dataset.translateX = translateX; // Сохраняем текущее значение для следующего вызова
  }

  function handleAllScroll() {
    bannerCarousels.forEach(handleScroll);
    lastScrollTop = window.scrollY;
  }

  function init() {
    window.addEventListener('scroll', handleAllScroll);
    handleAllScroll();
  }

  document.addEventListener('DOMContentLoaded', init);
}
