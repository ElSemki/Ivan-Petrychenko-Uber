window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.nav__list'),
    menuItem = document.querySelectorAll('.nav__item'),
    hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('nav__list--active');
  });

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger--active');
      menu.classList.toggle('nav__list--active');
    });
  });
});
