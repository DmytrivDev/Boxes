// Visibil elem mob or desc =========================

// const elemDesc = document.querySelectorAll('.el-desc');
// const elemMob = document.querySelectorAll('.el-mob');

// function visibilElemMobOrDesc() {
//   const screenWidth = window.innerWidth > 960;

//   elemDesc?.forEach(el => {
//     if (screenWidth) {
//       el.style.display = '';
//     } else {
//       el.style.display = 'none';
//     }
//   });

//   elemMob?.forEach(el => {
//     if (screenWidth) {
//       el.style.display = 'none';
//     } else {
//       el.style.display = '';
//     }
//   });
// }

// Init tools =========================

function toolsInit() {
  // visibilElemMobOrDesc();
}

window.addEventListener('resize', toolsInit);
document.addEventListener('DOMContentLoaded', toolsInit);
