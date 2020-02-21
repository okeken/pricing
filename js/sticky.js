    let nav_offset_top = document.getElementById('header').clientHeight +50;

  window.onscroll = function navbarFixed() {      
        let scroll = window.pageYOffset;
        if (scroll >= nav_offset_top) {
          document.querySelector('#header .main-menu').classList.add('navbar_fixed');
        } else {
          document.querySelector('#header .main-menu').classList.remove('navbar_fixed');
        }
      ;
    
  }