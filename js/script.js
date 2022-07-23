'use strict';

const menuIcon = document.querySelector('.nav-menuIcon');
const closeIcon = document.querySelector('.nav-closeIcon');
const mobileMenu = document.querySelector('.mobile-menu');
const navLogo = document.querySelector('.nav-logo');
const navLink = document.querySelector('.nav-links');

const toggleHide = () => {
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    mobileMenu.classList.toggle('menu-slide');
    navLogo.classList.toggle('menu-slide');
    navLink.classList.toggle('menu-slide');
}

menuIcon.addEventListener('click', toggleHide);
closeIcon.addEventListener('click', toggleHide);
