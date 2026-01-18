const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__body');
const overlay = document.querySelector('.burger-overlay');

function openMenu() {
  burgerMenu.classList.add('open');
  burgerBtn.classList.add('active');
  document.body.classList.add('lock');
  burgerBtn.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  burgerMenu.classList.remove('open');
  burgerBtn.classList.remove('active');
  document.body.classList.remove('lock');
  burgerBtn.setAttribute('aria-expanded', 'false');
}

burgerBtn.addEventListener('click', () => {
  const isOpen = burgerMenu.classList.contains('open');
  isOpen ? closeMenu() : openMenu();
});

overlay.addEventListener('click', closeMenu);