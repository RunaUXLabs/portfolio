var swiper1 = new Swiper(".exhibition.swiper-container", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 0,
    grabCursor: true,
    mousewheel: true
  });

var swiper = new Swiper('.sec3set.swiper-container', {
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      mousewheel: true
    });

