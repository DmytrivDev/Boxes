const descriptSec = document.querySelector('.descript');
const btnMore = descriptSec?.querySelector('.btn-more');
const descriptBox = descriptSec?.querySelector('.descript__box');

btnMore?.addEventListener('click', () => {
  const isMoreActive = descriptBox.classList.toggle('isOpened');
  btnMore.textContent = isMoreActive ? 'Менше' : 'Більше';

  if (isMoreActive) {
    setTimeout(() => {
      descriptBox.classList.add('isAnim');
    }, 100);
  } else {
    descriptBox.classList.remove('isAnim');
  }
});
