var burger = document.querySelector('.burger');
var navbar = document.querySelector('.navbar');
var navList = document.querySelector('.navList');
var home = document.querySelector('.home');

burger.addEventListener('click', () => {
navbar.classList.toggle('h-nav-resp')
navList.classList.toggle('v-nav-resp')
home.classList.toggle('homeBurgerHeight')
})