import { toggle, up } from 'slide-element';

function handleMenuItemChildren() {
  const mobMenu = document.querySelector('.mobmenu');
  const footerList = document.querySelector('.footer__list');
  const footerSubMenu = document.querySelectorAll('.footer__list .sub-menu');

  const isMobile = () => window.innerWidth < 960;

  if (mobMenu) {
    if (isMobile()) {
      activateMobileMenu(mobMenu);
    } else {
      deactivateMobileMenu(mobMenu);
    }
  }

  if (footerList) {
    if (isMobile()) {
      activateFooterMenu(footerList);
    } else {
      deactivateFooterMenu(footerList);
    }
  }

  window.addEventListener('resize', () => {
    if (isMobile()) {
      if (mobMenu) activateMobileMenu(mobMenu);
      if (footerList) activateFooterMenu(footerList);
    } else {
      if (mobMenu) deactivateMobileMenu(mobMenu);
      if (footerList) deactivateFooterMenu(footerList);
    }
  });

  function activateMobileMenu(menuElement) {
    if (!menuElement.hasEventListener) {
      menuElement.addEventListener('click', openNavItem);
      menuElement.hasEventListener = true; // Флаг для предотвращения дублирования
    }
  }

  function deactivateMobileMenu(menuElement) {
    if (menuElement.hasEventListener) {
      menuElement.removeEventListener('click', openNavItem);
      menuElement.hasEventListener = false; // Сбрасываем флаг
    }
  }

  function activateFooterMenu(listElement) {
    if (!listElement.hasEventListener) {
      listElement.addEventListener('click', openFooterItem);
      listElement.hasEventListener = true; // Флаг для предотвращения дублирования
    }
  }

  function deactivateFooterMenu(listElement) {
    if (listElement.hasEventListener) {
      listElement.removeEventListener('click', openFooterItem);
      listElement.hasEventListener = false; // Сбрасываем флаг
      footerSubMenu.forEach(ul => {
        ul.style.display = '';
      });
    }
  }

  function openNavItem(event) {
    const target = event.target;
    const currentTarget = event.currentTarget;

    const itemChildren = target.closest('.menu-item-has-children');
    const itemChildrenLink = target.closest('.menu-item-has-children > a');

    if (itemChildren && itemChildrenLink === target) {
      event.preventDefault();

      const subNav = itemChildren.querySelector('.sub-menu');

      toggle(subNav);
      itemChildren.classList.toggle('isOpened');

      const allItemsOpened = currentTarget.querySelectorAll(
        '.menu-item-has-children.isOpened'
      );
      allItemsOpened.forEach(item => {
        if (item !== itemChildren) {
          const subNavOth = item.querySelector('.sub-menu');
          up(subNavOth);
          item.classList.remove('isOpened');
        }
      });
    }
  }

  function openFooterItem(event) {
    const target = event.target;
    const footerItem = target.closest('.menu-item-has-children');
    const footerItemLink = target.closest('.menu-item-has-children > a');

    if (footerItem && footerItemLink === target) {
      event.preventDefault();

      const subNav = footerItem.querySelector('.sub-menu');

      toggle(subNav, { display: 'flex' });

      footerItem.classList.toggle('isOpened');

      const allFooterItemsOpened = footerList.querySelectorAll(
        '.menu-item-has-children.isOpened'
      );
      allFooterItemsOpened.forEach(item => {
        if (item !== footerItem) {
          const subNavOth = item.querySelector('.sub-menu');
          up(subNavOth);
          item.classList.remove('isOpened');
        }
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', handleMenuItemChildren);
