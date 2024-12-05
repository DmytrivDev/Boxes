import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faqList = document.querySelectorAll('.faq__list');

faqList?.forEach(list => {
  new Accordion(list, {
    duration: 400,
    showMultiple: false,
  });

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
