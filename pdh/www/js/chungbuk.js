var swiper1 = new Swiper('.swiper-container.top', {
    spaceBetween: 30,
    effect: 'fade',
    slidesPerView: 1,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.top .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.top .swiper-button-next',
        prevEl: '.top .swiper-button-prev',
    },
});

var swiper2 = new Swiper(".swiper-container.icon", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".icon .swiper-pagination",
        clickable: true
    },
    breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1020: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    navigation: {
        nextEl: '.icon.swiper-button-next',
        prevEl: '.icon.swiper-button-prev',
    },
    
});


var swiper3 = new Swiper('.swiper-container.bottom', {
    slidesPerView: 2,
   
    loop: true,
    pagination: {
        el: '.bottom .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 1,
         
        },
        1020: {
          slidesPerView: 2,
          
        },
      },
    navigation: {
        nextEl: '.bottom .swiper-button-next',
        prevEl: '.bottom .swiper-button-prev',
    },
});