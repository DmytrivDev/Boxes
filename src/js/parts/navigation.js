import { toggle, up } from 'slide-element';

function handleMenuItemChildren() {
  const mobMenu = document.querySelector('.mobmenu');

  const isMobile = () => window.innerWidth < 960;

  if (mobMenu) {
    if (isMobile()) {
      activateMobileMenu(mobMenu);
    } else {
      deactivateMobileMenu(mobMenu);
    }
  }

  window.addEventListener('resize', () => {
    if (isMobile()) {
      activateMobileMenu(mobMenu);
    } else {
      deactivateMobileMenu(mobMenu);
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
}

// Инициализация на событие DOMContentLoaded
document.addEventListener('DOMContentLoaded', handleMenuItemChildren);
