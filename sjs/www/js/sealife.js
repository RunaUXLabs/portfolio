//swipr
var swiper = new Swiper('.swiper-container.set', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    mousewheel: true,
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
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var iw = window.innerWidth;
  if(iw < 641){
    var swiper = new Swiper('.inner.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      }
    });
};

$(".tabV ul li").click(function(){
  $(this).addClass('on').siblings().removeClass('on');
  $(".content").removeClass('on');
  $("#"+$(this).data('id')).addClass('on');
  return false;
});


//jQ

  $(document).ready(function(){
    $(".set_a").hover(function(){
      $(this).toggleClass("on");
      var bg = $(this).data('id');
      $(".sec3").toggleClass(bg);
    });
  });

$(document).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 200) {
    $("header").addClass("on");
    $("header").mouseover(function(){
      $(this).addClass("on");
    }).mouseout(function(){
      $(this).addClass("on");
    });
  } else if (scroll < 199) {
    $("header").removeClass("on");
    $("header").mouseover(function(){
      $(this).addClass("on");
    }).mouseout(function(){
      $(this).removeClass("on");
    });
  }
});

$(document).ready(function() {
  var lastWidth = $(window).width();
  $(window).resize(function(){
      if($(window).width()!=lastWidth){
          location.reload();
          lastWidth = $(window).width();
          return false;
      }
  });
});
