$(document).ready(function () {

  $('.header__menu').on('click', function() {
    $('.menu').toggleClass('menu--active');
  });

  $('.content__btn, .item__btn').on('click', function() {
    $('.popup').addClass('popup--active');
    $('.bg').addClass('bg--active');
  });

  $('.popup__exit, .bg').on('click', function() {
    $('.popup').removeClass('popup--active');
    $('.bg').removeClass('bg--active');
  });

  $('.slide__btn').on('click', function() {
    $('.popup-reserve').addClass('popup-reserve--active');
    $('.bg').addClass('bg--active');
  });

  $('.popup__exit, .bg').on('click', function() {
    $('.popup-reserve').removeClass('popup-reserve--active');
    $('.bg').removeClass('bg--active');
  });

  $('.hero__slider').slick({
    prevArrow: $('.hero__arrow-l'),
    nextArrow: $('.hero__arrow-r')
  });
});