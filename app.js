'use strict';

const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerOpen = document.querySelector('.hamburger-open');
const hamburgerClose = document.querySelector('.hamburger-close');

const mobileList = document.querySelector('.mobile');
const mobilelinks = document.querySelectorAll('.mobile__link');
const mobileItems = document.querySelectorAll('.mobile__item');

hamburgerClose.addEventListener('click', () => {
  console.log('clicked close btn so menu will slide out of screen');
  mobileList.classList.add('slide-out');
  mobileList.classList.remove('slide-in');
  mobileList.style.visibility = 'hidden';
  hamburgerClose.style.display = 'none';
  hamburgerOpen.style.display = 'block';
});

hamburgerOpen.addEventListener('click', () => {
  console.log('clicked open btn so menu will be shown');
  mobileList.classList.add('slide-in');
  mobileList.classList.remove('slide-out');
  mobileList.style.visibility = 'visible';
  hamburgerOpen.style.display = 'none';
  hamburgerClose.style.display = 'block';
});

mobilelinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileList.classList.add('slide-out');
    hamburgerClose.style.display = 'none';
    hamburgerOpen.style.display = 'block';
    mobileList.style.visibility = 'hidden';
  });
});
