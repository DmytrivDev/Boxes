// Visibil elem mob or desc =========================

const elemDesc = document.querySelectorAll('.el-desc');
const elemMob = document.querySelectorAll('.el-mob');

function visibilElemMobOrDesc() {
  const screenWidth = window.innerWidth > 960;

  elemDesc?.forEach(el => {
    if (screenWidth) {
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  });

  elemMob?.forEach(el => {
    if (screenWidth) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
  });
}

// Update main padding top =========================

const headerMain = document.querySelector('.header__main');
const main = document.querySelector('main');

function updateMainPaddingTop() {
  if (headerMain && main) {
    const headerHeight = headerMain.getBoundingClientRect().height;
    main.style.paddingTop = `${headerHeight}px`;
  }
}

// Update min-height first sec =========================

const fullscreenSec = document.querySelectorAll('.fullscreen');

function updateMinHeightFirstSec() {
  if (headerMain && fullscreenSec) {
    const screenWidth = window.innerWidth > 960;

    fullscreenSec.forEach(section => {
      const headerHeight = headerMain.getBoundingClientRect().height;

      if (!section.classList.contains('halvscr')) {
        if (screenWidth) {
          section.style.minHeight = `calc(100vh - ${headerHeight}px)`;
        } else {
          section.style.minHeight = '';
        }
      }
    });
  }
}

// Init tools =========================

function toolsInit() {
  updateMainPaddingTop();
  visibilElemMobOrDesc();
  updateMinHeightFirstSec();
}

window.addEventListener('resize', toolsInit);
document.addEventListener('DOMContentLoaded', toolsInit);
