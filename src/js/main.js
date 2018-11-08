$(document).ready(function () {

  $('.nav__item--summer').on('click', function () {

    $(".all__item[data-season='0']").map(function (index, element) {
      $(this).hide();
    }).get();
    $(".all__item[data-season='1']").map(function (index, element) {
      $(this).show();
    }).get();
    $('.nav__item').removeClass('nav__item--active');
    $('.nav__item--summer').addClass('nav__item--active');

  });

  $('.nav__item--winter').on('click', function () {
    $(".all__item[data-season='1']").map(function (index, element) {
      $(this).hide();
    }).get();
    $(".all__item[data-season='0']").map(function (index, element) {
      $(this).show();
    }).get();
    $('.nav__item').removeClass('nav__item--active');
    $('.nav__item--winter').addClass('nav__item--active');
  });

  $('.nav__item--all').on('click', function () {
    $(".all__item[data-season='1']").map(function (index, element) {
      $(this).show();
    }).get();
    $(".all__item[data-season='0']").map(function (index, element) {
      $(this).show();
    }).get();
    $('.nav__item').removeClass('nav__item--active');
    $('.nav__item--all').addClass('nav__item--active');
  });

  $('.header__menu, .header__location').on('click', function () {
    $('.menu').toggleClass('menu--active');
  });

  $('.content__btn, .item__btn').on('click', function () {
    $('.popup').addClass('popup--active');
    $('.bg').addClass('bg--active');
  });

  $('.popup__exit, .bg, .form__btn').on('click', function () {
    $('.popup').removeClass('popup--active');
    $('.bg').removeClass('bg--active');
  });

  $('.slide__btn').on('click', function () {
    $('.popup-reserve').addClass('popup-reserve--active');
    $('.bg').addClass('bg--active');
  });

  $('.popup__exit, .bg, .form__btn').on('click', function () {
    $('.popup-reserve').removeClass('popup-reserve--active');
    $('.bg').removeClass('bg--active');
  });

  $('.hero__slider').slick({
    prevArrow: $('.hero__arrow-l'),
    nextArrow: $('.hero__arrow-r')
  });
});