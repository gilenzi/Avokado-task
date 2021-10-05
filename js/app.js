'use-strict';

const navToggle = document.querySelector('.navigation__toggle');

function toggleNavigation(){
    navToggle.classList.toggle('collaps');
}

navToggle.addEventListener('click',toggleNavigation);