// Visibil elem mob or desc =========================

const elemDesc = document.querySelectorAll('.el-desc');
const elemMob = document.querySelectorAll('.el-mob');

function visibilElemMobOrDesc() {
  const screenWidth = window.innerWidth >= 960;

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

// Update margin top first sec =========================

const headerMain = document.querySelector('.header__main');
const firstElemSec = document.querySelectorAll('.first-elem');

function updateMarginTopFirstSec() {
  if (headerMain && firstElemSec) {
    const headerHeight = headerMain.getBoundingClientRect().height;
    firstElemSec.forEach(el => {
      el.style.paddingTop = `${headerHeight}px`;
    });
  }
}

// Init tools =========================

function toolsInit() {
  updateMarginTopFirstSec();
  visibilElemMobOrDesc();
}

window.addEventListener('resize', toolsInit);
document.addEventListener('DOMContentLoaded', toolsInit);
