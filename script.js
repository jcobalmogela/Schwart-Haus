const menuIcon = document.querySelector('.menu');
const nav = document.querySelector('.navLink');
const navLinks = document.querySelectorAll('.links');
const burgerMenu = document.querySelectorAll('.burger');
const project = document.querySelector('.latestProject');
const navbar = document.getElementById('navbar')
const commercialNav = document.querySelector('.commercial')


menuIcon.addEventListener('click', () => {
   if(nav.classList.contains('not-active')){
     nav.classList.remove('not-active');
     nav.classList.add('nav-active');
     burgerMenu[1].classList.add('fadedMid');
     burgerMenu[0].classList.add('fadedTop');
     burgerMenu[2].classList.add('fadedBot');
   }else if(nav.classList.contains('nav-active')){
    nav.classList.remove('nav-active');
    nav.classList.add('not-active');
    burgerMenu[1].classList.remove('fadedMid');
    burgerMenu[0].classList.remove('fadedTop');
    burgerMenu[2].classList.remove('fadedBot');
   }

})

