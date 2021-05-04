//header
var swiper1 = new Swiper('.swiper-container.first', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//accommodation
var swiper2_1 = new Swiper('.swiper-container.a1', {
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});
var swiper2_2 = new Swiper('.swiper-container.a2', {
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});
var swiper2_3 = new Swiper('.swiper-container.a3', {
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});


$(document).ready(function () {
  $(".rightB > span").click(function () {
    $(this).addClass("on").siblings().removeClass('on');
    $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    $("#"+$(this).data('id')).find('.swiper-container')[0].swiper.update();
  });

});


// dining 
var swiper3 = new Swiper('.swiper-container.d', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
var swiper3_1 = new Swiper('.swiper-container.d01', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
var swiper3_2 = new Swiper('.swiper-container.d02', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});


$(document).ready(function () {
  $(".number span").click(function () {
    $(this).addClass("on").siblings().removeClass('on');
    $("."+$(this).data('id')).addClass('on').siblings().removeClass('on');
    $("."+$(this).data('id')).find('.swiper-container')[0].swiper.update();
  });



});

// active
var swiper4 = new Swiper('.swiper-container.s', {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination.s',
    clickable: true,
  },
});

$(document).ready(function () {
  $(".all > div").click(function () {
    $(this).addClass("on").siblings().removeClass('on');
    $("."+$(this).data('id')).addClass('on').siblings().removeClass('on');
    $("."+$(this).data('id')).find('.swiper-container')[0].swiper.update();
  });

});
//spa
var swiper5 = new Swiper('.swiper-container.spa.s1', {
  spaceBetween: 30,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper5_1 = new Swiper('.swiper-container.spa.s2', {
  spaceBetween: 30,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(document).ready(function () {
  $(".spa > div.inner.i1 > span").click(function () {
    $(this).addClass("on").siblings().removeClass('on');
    $("."+$(this).data('id')).addClass('on').siblings().removeClass('on');
    $("."+$(this).data('id')).find('.swiper-container')[0].swiper.update();
  });


});









