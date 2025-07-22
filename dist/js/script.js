// navbar-fixed
window.onscroll = function () {
 const header = document.querySelector('header');
 const fixedNav = header.offsetTop;

 if (window.pageYOffset > fixedNav) {
  header.classList.add('navbar-fixed');
 }else{
  header.classList.remove('navbar-fixed');
 }
};

//hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
 hamburger.classList.toggle('hamburger-active');
 navMenu.classList.toggle('hidden');
});

// Animasi
document.addEventListener("DOMContentLoaded", function () {
 AOS.init({
  duration: 1500,
  once: true,
 });
 new Typed("#typed-name", {
  strings: ["Mohammad Ghazy"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 500,
  loop: true,
  showCursor: true,
  cursorChar: "|"
 });
});
