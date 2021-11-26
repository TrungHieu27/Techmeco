AOS.init();

// Clone Product Category
var productCateList = $('.product-category-list .row');
var cloneItem = $('.product-category-list .col-lg-3')

for( i = 0; i < 13; i++) {
    cloneItem.clone().appendTo(productCateList);
}

// Scroll Nav
window.addEventListener("scroll", function() {
    $('.header-nav ul').toggleClass("sticky", window.scrollY > 200);
    $('.header-img').toggleClass("mt", window.scrollY > 200);
});

// Show/Hide Menu
$('.hamburger').click(function() {
    $('.hamburger').toggleClass('active');
    $('.nav').toggleClass('show-menu');
    $('.overlay').toggleClass('active');
});

$('.overlay').click(function() {
    $('.hamburger').removeClass('active');
    $('.nav').removeClass('show-menu');
    $('.overlay').removeClass('active');
});

// Scroll to top
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.btn-scroll').fadeIn(200);
    } else {
      $('.btn-scroll').fadeOut(200);
    }
  });
  
$('.btn-scroll').click(function (event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: 0}, 300);
});

// Clone Product Item
var productList = $('.product-list .row');
var productItem = $('.product-list .col-lg-4');

for( i = 0; i < 8; i++) {
    productItem.clone().appendTo(productList);
}

// Clone News Page Item
var newsList = $('.news-page .row');
var newsItem = $('.news-page .col-lg-4');

for( i = 0; i < 2; i++) {
    newsItem.clone().appendTo(newsList);
}

// Clone Recent Post Item
var postList = $('.recent-post');
var postItem = $('.recent-post-item');

for( i = 0; i < 2; i++) {
    postItem.clone().appendTo(postList);
}

// Product Detail Quantity
$('#plus').click(function() {
  var $qtde = $('#quantity');
  var a = $qtde.val();

  a++;
  $('#minus').attr("disabled", !a);
  $qtde.val(a);
});

$('#minus').click(function minusButton() {
  var $qtde = $('#quantity');
  var b = $qtde.val();
  if (b >= 1) {
      b--;
      $qtde.val(b)
  } else {
      $('#minus').attr("disabled", true);
  }
});

$('#quantity').on('change keyup focus', function() {
  var removeLetters = $(this).val().replace(/[^0-9]/g, '');
  $(this).val(removeLetters);
});

// Clone Recent Product
var recentProductList = $('.recent-product .row');
var recentProductItem = $('.recent-product .col-lg-3');

for( i = 0; i < 7; i++) {
  recentProductItem.clone().appendTo(recentProductList);
}

// Slide Direction Reveal
const directionRevealRotate = DirectionReveal({
  selector: '.direction-reveal',
  itemSelector: '.card-img',
  animationName: 'slide',
  animationPostfixEnter: 'enter',
  animationPostfixLeave: 'leave',
  enableTouch: true,
  touchThreshold: 250
});