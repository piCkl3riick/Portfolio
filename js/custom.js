 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  $('html, body').animate({ scrollTop: 0 }, 900);
});


/* Mobile Navigation
    -----------------------------------------------*/
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});






/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/


  $('#news a').click(function() {

    $('#news a.active').removeClass('active');

    $(this).column().addClass('active');




  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });



  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


 /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#').parallax("100%", 0.1);
    $('#Portfolio').parallax("100%", 0.3);
    $('#Experience').parallax("100%", 0.2);
    $('#About').parallax("100%", 0.3);
    $('#Contact-Banner').parallax("100%", 0.1);
    $('#program').parallax("100%", 0.2);
    $('#register').parallax("100%", 0.1);
    $('#faq').parallax("100%", 0.3);
    $('#venue').parallax("100%", 0.1);
    $('#sponsors').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.2);

  }
  initParallax();


  /* Owl Carousel
  -----------------------------------------------*/
  $(document).ready(function() {
    $("#owl-speakers").owlCarousel({
      autoPlay: 6000,
      items : 4,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,1],
      itemsTablet: [768,1],
      itemsTabletSmall: [985,2],
      itemsMobile : [479,1],
    });


    $('#switcher-home')

      .addClass('narrow')

      .on('click', function () {

        $('body').removeClass('narrow').removeClass('large');

      });



    $('#switcher-portfolio').on('click', function () {

      $('body').addClass('narrow').removeClass('large');

    });




    $('#switcher-exp').on('click', function () {

      $('body').removeClass('narrow').addClass('large');

    });



    $('#switcher-about').on('click', function () {

      $('#switcher-about').removeClass('selected');

      $(this).addClass('selected');

    });

  });

    
  });


  /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 1400);
      })


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();