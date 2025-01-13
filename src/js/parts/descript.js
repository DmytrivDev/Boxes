const descriptSec = document.querySelector('.descript');
const btnMore = descriptSec?.querySelector('.btn-more');
const descriptBox = descriptSec?.querySelector('.descript__box');

btnMore?.addEventListener('click', () => {
  const isMoreActive = descriptBox.classList.toggle('isOpened');
  const t1 = btnMore.dataset.t1;
  const t2 = btnMore.dataset.t2;
  btnMore.textContent = isMoreActive ? t1 : t2;

  if (isMoreActive) {
    setTimeout(() => {
      descriptBox.classList.add('isAnim');
    }, 100);
  } else {
    descriptBox.classList.remove('isAnim');
  }
});
