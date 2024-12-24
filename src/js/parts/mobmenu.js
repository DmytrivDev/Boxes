import scrollLock from 'scroll-lock';

import { closeModal, activeModals } from './modal.js';

const headerMain = document.querySelector('.header__main');
const burger = document.querySelector('.burger');
const mobMenu = document.querySelector('.mobmenu');
const mobMenuBody = document.querySelector('.mobmenu__body');
const mobNavLinks = document.querySelectorAll('.mobmenu .navmenu__list a');

let isScrollLocked = false;

function toggleScrollLock() {
  if (mobMenuBody) {
    if (isScrollLocked) {
      scrollLock.enablePageScroll(mobMenuBody);
    } else {
      scrollLock.disablePageScroll(mobMenuBody, { reserveScrollBarGap: true });
    }
    isScrollLocked = !isScrollLocked;
  }
}

function toggleMenu() {
  if (burger && mobMenu) {
    activeModals.forEach(activeModal => {
      closeModal(activeModal);
    });

    burger.classList.toggle('isOpened');
    mobMenu.classList.toggle('isOpened');
    headerMain.classList.toggle('addBorder');
    toggleScrollLock();
  }
}

export function closeMenu() {
  if (burger && mobMenu) {
    burger.classList.remove('isOpened');
    mobMenu.classList.remove('isOpened');
    headerMain.classList.remove('addBorder');
    if (mobMenuBody) scrollLock.enablePageScroll(mobMenuBody);
    isScrollLocked = false;
  }
}

function handleResize() {
  if (window.innerWidth > 960) {
    closeMenu();
  }
}

function initMenu() {
  if (burger && mobMenu) {
    window.addEventListener('resize', handleResize);
    burger.addEventListener('click', toggleMenu);
  }

  if (mobNavLinks) {
    mobNavLinks.forEach(link => {
      link.addEventListener('click', event => {
        const target = event.target;
        const closeItemChildren = target.closest('.menu-item');
        const closeSubMenu = target.closest('.sub-menu');

        const containsItemChildren = closeItemChildren?.classList.contains(
          'menu-item-has-children'
        );
        const subMenuLink = closeSubMenu?.querySelectorAll('a');

        if (!containsItemChildren || subMenuLink) {
          closeMenu();
        }
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', initMenu);
