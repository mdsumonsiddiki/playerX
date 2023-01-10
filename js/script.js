// =====animation=======
AOS.init();

// =======slider js==========
$('.client-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows:false,
  });


  // ======counter js======
  $('.counter').counterUp({
    delay: 5,
    time: 1000
});