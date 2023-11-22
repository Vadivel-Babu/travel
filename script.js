const open = document.querySelector('.open');
const close = document.querySelector('.close');
const navLink = document.querySelectorAll('.nav__link-mobile');
const menu = document.querySelector('.menu');



open.addEventListener('click',() => {
  menu.style.display = 'block';
})
function closeMenu(){
  menu.style.display = 'none';
}
close.addEventListener('click',closeMenu);
navLink.forEach((e) => {
  e.addEventListener('click',closeMenu);
})