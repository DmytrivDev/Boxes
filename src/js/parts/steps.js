const making = document.querySelectorAll('.making');

making?.forEach(section => {
  document.addEventListener('scroll', () => {
    const sectionRect = section.getBoundingClientRect();

    const viewportHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const stepsThumb = section.querySelector('.steps__thumb');
    const stepsNumbers = section.querySelectorAll('.steps__numbers > span');
    const makingCards = section.querySelectorAll('.making__сards > li');

    stepsNumbers.forEach(span => {
      if (span.classList.contains('isStep')) {
        span.classList.remove('isStep');
      }
    });
    makingCards.forEach(li => {
      if (li.classList.contains('isStep')) {
        li.classList.remove('isStep');
      }
    });

    if (sectionRect.top <= 0 && windowWidth > 960) {
      const scrollableHeight = sectionRect.height - viewportHeight;
      const scrolledInSection = Math.abs(sectionRect.top);
      const scrollPercent = (scrolledInSection / scrollableHeight) * 100;
      const fixedPercent = scrollPercent.toFixed(0);

      stepsThumb.style.width = `${fixedPercent}%`;

      if (fixedPercent >= 4) {
        stepsNumbers[0].classList.add('isStep');
        makingCards[0].classList.add('isStep');
      }
      if (fixedPercent >= 28) {
        stepsNumbers[1].classList.add('isStep');
        makingCards[1].classList.add('isStep');
      }
      if (fixedPercent >= 53) {
        stepsNumbers[2].classList.add('isStep');
        makingCards[2].classList.add('isStep');
      }
      if (fixedPercent >= 77) {
        stepsNumbers[3].classList.add('isStep');
        makingCards[3].classList.add('isStep');
      }

      console.log(fixedPercent);
    }
  });
});
