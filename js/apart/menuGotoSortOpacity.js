/*
    Menu -- GoTo -- Sort -- Opacity
    v 1.0
*/
'use strict'



export function opacityMenu() {

document.addEventListener('scroll', function (e) {
    if (window.pageYOffset > 1) {
      document.documentElement.style.setProperty('--opacity', 1);
    } else {
      document.documentElement.style.setProperty('--opacity', 0);
    }
  });
}
export function some() {
document.addEventListener('click', documentActions);

function documentActions(e) {
const targetElement = e.target;

if(targetElement.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
}

if(targetElement.closest('[data-goto]')) {
    document.documentElement.classList.contains('menu-open') ? 
    document.documentElement.classList.remove('menu-open') : null;



    const goTo = targetElement.closest('[data-goto]').dataset.goto;
    const goToElement = document.querySelector(goTo);
    const headerHeight = document.querySelector('.header').offsetHeight;

    if(goToElement) {
        window.scrollTo({
           top: goToElement.offsetTop - (headerHeight + 15),
           behavior: "smooth" 
        });
    }
    e.preventDefault();
}

//   choice
if (
targetElement.classList.contains("items-works__type") &&
!targetElement.classList.contains("active")
) {
const activeElement = document.querySelector(`.items-works__type.active`);
const elements = document.querySelectorAll(`.items-works__item`);
const elementType = targetElement.dataset.workType;

activeElement.classList.remove("active");
targetElement.classList.add("active");

elements.forEach((element) => {
  !elementType || element.dataset.workType === elementType
    ? (element.hidden = false)
    : (element.hidden = true);
});
}
}
}