$(document).ready(function () {

  $('.header__menu').on('click', function() {
    $('.menu').toggleClass('menu--active');
  });

  $('.hero__slider').slick({
    prevArrow: $('.hero__arrow-l'),
    nextArrow: $('.hero__arrow-r')
  });
});