"use strict";
"use strict";
"use strict";

var banner = document.querySelector('.banner');
window.addEventListener('mousemove', function (event) {
  if (window.innerWidth <= 768) return;
  var x = event.clientX / window.innerWidth;
  var y = event.clientY / window.innerHeight;
  banner.style.backgroundPosition = "top ".concat(50 + y * 10, "px right ").concat(50 + x * 30, "px, top ").concat(250 + y * 20, "px right ").concat(200 + x * 40, "px, bottom -70px left ").concat(400 + x * 10, "px, top ").concat(150 + y * 25, "px left ").concat(50 + x * 10, "px, top ").concat(200 + x * 10, "px left ").concat(100 + y * 5, "px");
});
"use strict";

$('a[href^="#"]').click(function () {
  var e = $(this).attr("href"),
      e = $(e).offset().top - 60;
  return jQuery("html:not(:animated), body:not(:animated)").animate({
    scrollTop: e
  }, 800), !1;
});
"use strict";
"use strict";

var course = document.querySelector('.course__inner');
window.addEventListener('mousemove', function (event) {
  if (window.innerWidth <= 768) return;
  var x = event.clientX / window.innerWidth;
  var y = event.clientY / window.innerHeight;
  course.style.backgroundPosition = "center right ".concat(430 + x * 40, "px, bottom right ").concat(100 + x * 5, "px, top ").concat(100 + y * 30, "px right ").concat(50 + x * 20, "px, top ").concat(80 + x * 10, "px right ").concat(450 + x * 45, "px, top ").concat(270 + x * 15, "px right ").concat(600 + y * 20, "px");
});
"use strict";

$('.faq__item').on('click', function () {
  $(this).toggleClass('active');
  $(this).children('.faq__answer').slideToggle(300);
});
"use strict";

$(document).ready(function () {
  var hash,
      flagCensor = false;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');

    if (hash[0] == 'cens') {
      flagCensor = true;
    }
  }

  if (flagCensor) {
    $('.version1').hide();
    $('.censor').show();
  }
});
"use strict";
"use strict";
"use strict";

var main = document.querySelector('.main__inner');
window.addEventListener('mousemove', function (event) {
  if (window.innerWidth <= 768) return;
  var x = event.clientX / window.innerWidth;
  var y = event.clientY / window.innerHeight;
  main.style.backgroundPosition = "bottom right -".concat(x * 10, "px, top ").concat(120 + x * 25, "px right ").concat(350 + y * 15, "px, top ").concat(50 + y * 1, "% right ").concat(50 + x * 1, "%, bottom ").concat(270 + x * 20, "px right ").concat(420 + y * 10, "px, right, bottom ").concat(200 + x * 30, "px right ").concat(370 + x * 35, "px, bottom ").concat(160 + x * 5, "px right");
});

if ($(window).width() < 480) {
  $("input[type='email']").attr("placeholder", "Email");
}
"use strict";

var platform = document.querySelector('.platform__inner');
window.addEventListener('mousemove', function (event) {
  if (window.innerWidth <= 768) return;
  var x = event.clientX / window.innerWidth;
  var y = event.clientY / window.innerHeight;
  platform.style.backgroundPosition = "top 100px right, top ".concat(100 + x * 30, "px right ").concat(400 + y * 10, "px, top ").concat(200 + x * 20, "px right ").concat(50 + y * 15, "px, top ").concat(600 + x * 40, "px right, top ").concat(500 + x * 10, "px right ").concat(500 + y * 15, "px, top ").concat(300 + y * 20, "px right ").concat(450 + x * 20, "px, top ").concat(570 + x * 10, "px right ").concat(350 + y * 5, "px, top ").concat(350 + y * 5, "px right ").concat(140 + x * 30, "px");
});
"use strict";
"use strict";

var elem = document.querySelector('.questions__inner');
window.addEventListener('mousemove', function (event) {
  if (window.innerWidth <= 768) return;
  var x = event.clientX / window.innerWidth;
  var y = event.clientY / window.innerHeight;
  elem.style.backgroundPosition = "top ".concat(250 + x * 40, "px right ").concat(300 + y * 20, "px, top ").concat(70 + x * 10, "px left ").concat(410 + y * 35, "px, top ").concat(390 + x * 20, "px center");
});
"use strict";

var receive = document.querySelector('.receive__inner');
window.addEventListener('mousemove', function (event) {
  if (window.innerWidth <= 768) return;
  var x = event.clientX / window.innerWidth;
  var y = event.clientY / window.innerHeight;
  receive.style.backgroundPosition = "bottom ".concat(240 + x * 40, "px left ").concat(290 + y * 30, "px, bottom -").concat(140 + x * 5, "px left ").concat(60 + y * 10, "px, center left ").concat(30 + x * 45, "px, bottom ").concat(110 + y * 35, "px left ").concat(60 + x * 10, "px, bottom ").concat(380 + y * 25, "px left, bottom ").concat(520 + x * 20, "px left ").concat(400 + y * 15, "px");
});
"use strict";

var registration = document.querySelector('.registration__inner');
window.addEventListener('mousemove', function (event) {
  if (window.innerWidth <= 768) return;
  var x = event.clientX / window.innerWidth;
  var y = event.clientY / window.innerHeight;
  registration.style.backgroundPosition = "bottom ".concat(100 + x * 30, "px right ").concat(10 + y * 10, "px, bottom ").concat(220 + y * 20, "px right ").concat(50 + x * 40, "px, bottom ").concat(170 + x * 10, "px right ").concat(150 + y * 25, "px");
});
"use strict";

$(document).ready(function () {
  $('.form').submit(function (e) {
    var email = $(this).children('.email').val(); // var name = $(this).children('.name').val();

    var error = $(this).children('.form__error'); // var nameValidate = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;

    var emailValidate = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    if (emailValidate.test(email.toLowerCase())) {
      error.remove();
      $('.basket__button').prop('disabled', true);
    } else {
      e.preventDefault();
      error.text('Укажите корректный email');
    }
  });
});
"use strict";

$('.slider__slides').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: false,
  nextArrow: $('.slider__btn--next'),
  responsive: [{
    breakpoint: 1180,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 800,
    settings: {
      slidesToShow: 1
    }
  }]
});
"use strict";
"use strict";