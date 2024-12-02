import { toggle, up } from 'slide-element';

function handleMenuItemChildren() {
  const screenWidth = window.innerWidth >= 960;

  const mobMenu = document.querySelector('.mobmenu');

  if (!screenWidth) {
    if (mobMenu) {
      mobMenu.addEventListener('click', openNavItem);
    }
  }

  function openNavItem(event) {
    const target = event.target;
    const currentTarget = event.currentTarget;

    const closeItemChildren = target.closest('.menu-item-has-children');
    const containsItemChildren = closeItemChildren?.classList.contains(
      'menu-item-has-children'
    );

    if (containsItemChildren) {
      const allItemsOpened = currentTarget.querySelectorAll(
        '.menu-item-has-children.isOpened'
      );

      const subNav = closeItemChildren.querySelector('.sub-menu');
      toggle(subNav);
      closeItemChildren.classList.toggle('isOpened');

      allItemsOpened.forEach(item => {
        if (item !== target) {
          const subNavOth = item.querySelector('.sub-menu');
          up(subNavOth);
          item.classList.remove('isOpened');
        }
      });
    }
  }
}
window.addEventListener('resize', handleMenuItemChildren);
document.addEventListener('DOMContentLoaded', handleMenuItemChildren);
