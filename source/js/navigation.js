'use strict'

var html = document.querySelector('.no-js');
var navMain = document.querySelector('.main-nav');
var navButton = document.querySelector('.main-nav__burger-button');

html.classList.remove('no-js');

navButton.addEventListener('click', function() {
    navMain.classList.toggle('main-nav--opened');
    navButton.classList.toggle('burger-button--opened');
});
