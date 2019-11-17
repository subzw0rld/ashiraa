'use strict';
var navBar = document.getElementsByClassName('nav-bar')[0];
var menuToggle = document.getElementsByClassName('menu-toggle')[0];
var iconRef = menuToggle.querySelector('.icon');

menuToggle.addEventListener('click', function(e) {
    menuToggle.classList.toggle('close-icon');
    navBar.classList.toggle('show');

    if (menuToggle.classList.contains('close-icon')) {
        iconRef.classList.add('fa-times-circle');
        iconRef.classList.remove('fa-bars');
    } else {
        iconRef.classList.remove('fa-times-circle');
        iconRef.classList.add('fa-bars');
    }

});