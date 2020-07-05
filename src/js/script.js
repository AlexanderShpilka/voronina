const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
const navigation = document.querySelector('.js-nav');

const toggleMenuVisibility = () => navigation.classList.toggle('nav--visible');

openMenuBtn.addEventListener('click', toggleMenuVisibility);
closeMenuBtn.addEventListener('click', toggleMenuVisibility);
