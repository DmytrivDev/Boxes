import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faqList = document.querySelectorAll('.faq__list');

faqList?.forEach((list, index) => {
  new Accordion(list, {
    duration: 400,
    showMultiple: true,
  });

  const secFaq = list.closest('.faq');
  const btnMore = secFaq?.querySelector('.btn-alt');

  if (index === 1) {
    btnMore?.addEventListener('click', () => {
      btnMore.style.display = 'none';
      list.classList.add('isOpened');
      scrollToList();
      setTimeout(() => {
        list.classList.add('isAnim');
      }, 100);
    });

    function scrollToList() {
      window.scrollTo({
        top: list.offsetTop - 300,
        behavior: 'smooth',
      });
    }
  }

  const panels = list.querySelectorAll('.ac-panel');
  panels.forEach(panel => {
    panel.addEventListener('click', event => {
      event.stopPropagation();
    });
  });
});

// if (faqList) {
//   new Accordion(faqList, {
//     duration: 400,
//     showMultiple: false,
//   });

//   const panels = faqList.querySelectorAll('.ac-panel');

//   panels.forEach(panel => {
//     panel.addEventListener('click', event => {
//       event.stopPropagation();
//     });
//   });
// }
