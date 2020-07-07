/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
const navigation = document.querySelector('.js-nav');
const navLinks = document.querySelectorAll('.js-nav-link');

function toggleMenuVisibility() {
  navigation.classList.toggle('nav--visible');
}

openMenuBtn.addEventListener('click', toggleMenuVisibility);
closeMenuBtn.addEventListener('click', toggleMenuVisibility);

navLinks.forEach((function (link) {
  link.addEventListener('click', (function () {
    navigation.classList.remove('nav--visible');
  }));
}));
