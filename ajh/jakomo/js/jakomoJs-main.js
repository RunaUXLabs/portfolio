// var swiper1 = new Swiper('.swiper-container.mainVisual-c', {
//   speed: 600,
//   parallax: true,
//   spaceBetween: 30,
//   effect: 'fade',
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: '.swiper-pagination.main-paging',
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (index + 1) + '</span>';
//     },
//   },
// });

var swiper2 = new Swiper('.swiper-container.favCon', {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  // 탭메뉴 작동시 width 0 값을 방지
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.swiper-button-next.favB',
    prevEl: '.swiper-button-prev.favB',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  }
});

var swiper3 = new Swiper('.swiper-container.favCon02', {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.swiper-button-next.favB02',
    prevEl: '.swiper-button-prev.favB02',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  }
});

// var swiper4 = new Swiper('.swiper-container.mediaG', {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   slidesPerGroup: 2,
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
// });

var iw = window.innerWidth;
if (iw > 641) {
  new Swiper('.swiper-container.mainVisual-c', {
    speed: 600,
    parallax: true,
    spaceBetween: 30,
    effect: 'fade',
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination.main-paging',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });

  new Swiper('.swiper-container.mediaG', {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

} else if (iw < 641) {
  new Swiper('.swiper-container.mainVisual-c', {
    speed: 600,
    parallax: true,
    spaceBetween: 30,
    effect: 'fade',
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination.main-paging',
      type: 'fraction',
    },
  });

  new Swiper('.swiper-container.mediaG', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next.mediaBt',
      prevEl: '.swiper-button-prev.mediaBt',
    },
  });
}


$(function () {
  $(".menuBt").click(function () {
    $(".gnbBg").addClass("on");
  });
  $(".closeBt").click(function () {
    $(".gnbBg").removeClass("on");
  });

  // sec2 탭메뉴
  $(".tabMenu li").first().addClass("on");
  $(".box").first().addClass("on");

  $(".tabMenu li").click(function () {
    $(this).addClass('on')
      .siblings().removeClass('on');
    $("#" + $(this).data('id')).addClass('on')
      .siblings().removeClass('on');
    return false;
  });

  //sec03 popup

  $(".expandBt").addClass(function (index) {
    return "e" + index;
  })
  $(".expandBt").attr('data-id', function (index) {
    return "e" + index;
  });
  $(".popup").addClass(function (index) {
    return "u" + index;
  })
  $(".popup").attr('id', function (index) {
    return "e" + index;
  });
  $(".expandBt").click(function () {
    $(".popupBg").addClass("on");
    $("#" + $(this).data('id')).addClass("on")
      .siblings().removeClass("on");
    return false;
  });
  $(".popup .close").click(function () {
    $(".popupBg").removeClass("on");
  })



  $("ul.storeG > li").addClass("store");
  $("ul.storeG > li").addClass(function (index) {
    return "s" + index;
  });

  // sec04 modal
  $(".media i").attr('data-id', function (index) {
    return "m" + index;
  });
  $(".modalContent").attr('id', function (index) {
    return "m" + index;
  });

  $(".media i").click(function () {
    $(".modalBg, .modal").addClass("on");
    $("#" + $(this).data('id')).addClass("on")
      .siblings().removeClass("on");
  });

  $(".sec04 .modal li > span").click(function () {
    $(".modalBg").removeClass("on");
  })
});

$(document).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 300) {
    $("header > .top").addClass("hideBar");
  }
  else if (scroll < 299) {
    $("header > .top").removeClass("hideBar");
  }
});

// $(document).scroll(function () {
//   var scroll = $(window).scrollTop();
//   if (scroll > 800) {
//     $(".topBt").addClass("on");
//   } else if (scroll < 800) {
//     $(".topBt").removeClass("on");
//   }
// });

// var lastWidth = $(window).width();
// $(window).resize(function () {
//   if ($(window).width() != lastWidth) {
//     location.reload();
//     lastWidth = $(window).width();
//     return false;
//   }
// });

// 모바일 
// var iw = window.innerWidth;
// if (iw < 641) {
//   new Swiper('.swiper-container.mainVisual-c', {
//     pagination: {
//       el: '.swiper-pagination.main-paging',
//       type: 'fraction',
//     },
//   });

//   new Swiper('.swiper-container.mediaG', {
//     direction: 'vertical',
//     loop: false,
//     navigation: {
//       nextEl: '.swiper-button-next.mediaBt',
//       prevEl: '.swiper-button-prev.mediaBt',
//     },
//   });
// }


if ($(window).width() > 640 ) {
  $(document).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 800) {
      $(".topBt").addClass("on");
    } else if (scroll < 800) {
      $(".topBt").removeClass("on");
    }
  });

} else if ($(window).width() < 641) {
  // 메뉴버튼
  $(".menuBt").click(function () {
    $(".gnb").addClass("on");
  });
  $(".closeBt").click(function () {
    $(".gnb").removeClass("on");
  });

  //하위메뉴  
  $(".gnb .depth1 > a").next().hide();
  $(".gnb .depth1 > a").click(function () {
    $(this).next().toggle();
    $(".gnb .depth1 > a").not(this).siblings().hide();
    return false;
  });

  $(document).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".topBt").addClass("on");
    } else if (scroll < 300) {
      $(".topBt").removeClass("on");
    }
  });

}

