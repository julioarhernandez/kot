// ******************************************* //
// ********** Farmie Template Js ************* //
// ******************************************* //

(function($) {
  'use strict';

  var browserWindow = $(window);
  var documentWindow = $(document);
  var welcomeSlide = $('.welcome-slides');

  // :: 1.0 Preloader Active Code
  // browserWindow.on('load', function() {
  //   $('.preloader').fadeOut('slow', function() {
  //     $(this).remove();
  //   });
  // });

    documentWindow.on('ready', function () {
        setTimeout(function () {
            $('.preloader').fadeOut('slow', function () {
                $(this).remove();
            });
        }, 1000);

    });

    // :: Replace Img background url 512x512 by 1440x1440
    $('.single-welcome-slides.gcampaign').each(function(){
      const thisElement = $(this);
      const imageUrl = thisElement.attr('style');
      if ($(window).width() > 768){
        const newImgUrl = imageUrl.replace('512x512', '1440x1440');
        thisElement.attr('style', newImgUrl);  
      }
    });

  // :: 2.0 Tooltip Active Code
  if($.fn.tooltip) {
    $('[data-toggle="tooltip"]').tooltip();
  }

  // :: 3.0 Nav Active Code
  if($.fn.classyNav) {
    $('#famieNav').classyNav();
  }

  // :: 4.0 Sticky Active Code
  if($.fn.sticky) {
    $(".famie-main-menu").sticky({
      topSpacing: 0
    });
  }

  // :: 5.0 Sliders Active Code
  if($.fn.owlCarousel) {
    welcomeSlide.owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 8000,
      smartSpeed: 1500
    });

    welcomeSlide.on('translate.owl.carousel', function () {
        var slideLayer = $("[data-animation]");
        slideLayer.each(function () {
            var anim_name = $(this).data('animation');
            $(this).removeClass('animated ' + anim_name).css('opacity', '0');
        });
    });

    welcomeSlide.on('translated.owl.carousel', function () {
        var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
        slideLayer.each(function () {
            var anim_name = $(this).data('animation');
            $(this).addClass('animated ' + anim_name).css('opacity', '1');
        });
    });

    $("[data-delay]").each(function () {
        var anim_del = $(this).data('delay');
        $(this).css('animation-delay', anim_del);
    });

    $("[data-duration]").each(function () {
        var anim_dur = $(this).data('duration');
        $(this).css('animation-duration', anim_dur);
    });

    $('.testimonial-slides').owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      dots: false,
      nav: true,
      navText: ['<i class="arrow_left"></i>', '<i class="arrow_right"></i>'],
      autoplay: true,
      autoplayTimeout: 8000,
      smartSpeed: 1500,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut'
    });

    $('.gallery-slides').owlCarousel({
      items: 3,
      margin: 0,
      loop: false,
      dots: false,
      nav: true,
      navText: ['<i class="arrow_left"></i>', '<i class="arrow_right"></i>'],
      autoplay: true,
      autoplayTimeout: 8000,
      smartSpeed: 1500,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:3,
              nav: true,
          }
      }
    });

    // Campaign carousel
    $('.campaign-slides').owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 1500,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      
    });
  }

  // :: 6.0 ScrollUp Active Code
  if ($.fn.scrollUp) {
      browserWindow.scrollUp({
          scrollSpeed: 1500,
          scrollText: '<i class="arrow_up"></i>'
      });
  }

  // :: 7.0 Video Play Icons Active Code
  if ($.fn.magnificPopup) {
    $('.play-icon').magnificPopup({
    type: 'iframe'
  });
  }

  // :: 8.0 Jarallax Active Code
  if ($.fn.jarallax) {
    $('.jarallax').jarallax({
    speed: 0.2
  });
  }

  // :: 9.0 Prevent Default a Click
  $('a[href="#"]').on('click', function(e) {
    e.preventDefault();
  });

  // :: 10.0 Search Box Active Code
  $('#searchIcon').on('click', function(){
    $('.search-form').toggleClass('search-active');
  });
  $('.closeIcon').on('click', function(){
    $('.search-form').removeClass('search-active');
  });

  // :: 11.0 Wow Active Code
  if(browserWindow.width() > 767) {
    new WOW().init();
  }


  // :: 12.0 Scroll To
    $('.scrollTo').on('click', function(e){
        e.preventDefault();
        const thisElement = $(this);
        const targetElement = $(thisElement.attr('href'));
        if (targetElement.length){
            $("html, body").animate({
                scrollTop: targetElement.offset().top
            },1000);
        }

    });
})(jQuery);
