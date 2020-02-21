$('body').scrollspy({ target: '#my-header' });

$('.owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    560: {
      items: 2
    }
  }
});

$(document).ready(function() {
  let $btns = $('.button-group button');

  $btns.click(function(e) {
    $('.button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
      filter: selector
    });

    return false;
  });

  $('.button-group #btn1').trigger('click');

  $('.project-area .grid .test-popup-link').magnificPopup({
    type: 'image',
    gallery: { enabled: true }
  });

  $('.button-group #btn1').trigger('click');
  $('.cert2 .certre .test-popup-link1').magnificPopup({
    type: 'image',
    gallery: { enabled: true }
  });

  // sticky navigation menu Jquery

  // let nav_offset_top = $('#header').height() + 50;

  // function navbarFixed() {
  //   if ($('#header').length) {
  //     $(window).scroll(function() {
  //       let scroll = $(window).scrollTop();
  //       if (scroll >= nav_offset_top) {
  //         $('#header .main-menu').addClass('navbar_fixed');
  //       } else {
  //         $('#header .main-menu').removeClass('navbar_fixed');
  //       }
  //     });
  //   }
  // }

    // sticky navigation menu Vanilla JS

      let nav_offset_top = document.getElementById('header').clientHeight +50;

  window.onscroll = function navbarFixed() {      
        let scroll = window.pageYOffset;
        if (scroll >= nav_offset_top) {
          document.querySelector('#header ').classList.add('navbar_fixed');
        } else {
          document.querySelector('#header ').classList.remove('navbar_fixed');
        }
      ;
    
  }

  navbarFixed();
});

// Contact Me Js

$('input').focus(function() {
  $(this)
    .parents('.form-group')
    .addClass('focused');
});

$('input').blur(function() {
  var inputValue = $(this).val();
  if (inputValue == '') {
    $(this).removeClass('filled');
    $(this)
      .parents('.form-group')
      .removeClass('focused');
  } else {
    $(this).addClass('filled');
  }
});

// AOS Initaite

AOS.init();

//tool tip init
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

// Mobile Menu Js
let menuDiv = document.querySelector('.menu-div');
let menuToggle = document.querySelector('.btn-container');
let MenuBurgerOpen = document.querySelector('.menu-hamburger');

let showMenu = false;

menuDiv.addEventListener('click', showMyMenu);
menuToggle.addEventListener('click', showMyMenu);

function showMyMenu() {
  if (!showMenu) {
    MenuBurgerOpen.classList.add('menu-hamburger-open');
    MenuBurgerOpen.classList.add('menu-hamburger-open:before');
    MenuBurgerOpen.classList.add('menu-hamburger-open:after');

    showMenu = true;
  } else {
    MenuBurgerOpen.classList.remove('menu-hamburger-open');
    MenuBurgerOpen.classList.remove('menu-hamburger-open:before');
    MenuBurgerOpen.classList.remove('menu-hamburger-open:after');
    showMenu = false;
  }
}


