
// 일기예보
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Jinju&appid=3ee9a36c086379642549c1eeb6cbe511&units=metric', function (result) {
  $('.ctemp').append(result.main.temp + '˚' + 'C');
  var wiconUrl = '<img src="../image/wheater/' + result.weather[0].icon + '.svg" width="90px" height="90px" alt="' + result.weather[0].description + '">'
  $('.icon').html(wiconUrl);
});

// D-day 카운팅
function counter() {
  var dday = new Date("Oct 1,2021,18:00:00").getTime();
  setInterval(function () {
    var now = new Date();
    var distance = dday - now;
    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    $('.d-day').html('D' + '-' + d)
  }, 1000);
}

$(document).ready(function () {
  //새로고침시 탑으로
  $(window).onload = function () {
    setTimeout(function () {
      scrollTo(0, 0);
    }, 100);
  }
  //페이드인
  $("div.fades").animate({ opacity: '1' }, 2500);
});
//페이지네이션
var lastWidth = $(window).width();
$(window).resize(function () {
  if ($(window).width() != lastWidth) {
    location.reload();
    lastWidth = $(window).width();
    return false;
  }
});
$(".side_nav div").each(function () {
  var thisOffset = $("." + $(this).data('id')).offset().top;

  $(this).click(function () {
    $("html, body").animate({
      scrollTop: thisOffset
    }, 1000);
    $(this).addClass('on');
  });

});
$(document).scroll(function () {
  var scrolltop = $(window).scrollTop();
  $("header,section, footer").each(function () {
    if (scrolltop >= $(this).offset().top) {
      $("div.side_nav div[data-id=" + $(this).attr('class') + "]").addClass('on').siblings().removeClass('on');
    }
  });
});

//header 배경
counter();
var swiper1 = new Swiper('.swiper-container.autobg', {
  spaceBetween: 30,
  effect: 'fade',
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper2 = new Swiper('.card_list .swiper-container', {
  effect: 'flip',
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 카드 플로우슬라이드
$(document).ready(function () {
  function detect_active() {
    var get_active = $("#dp-slider .dp_item:first-child").data("class");
    $("#dp-dots li").removeClass("active");
    $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
  }
  $("#dp-next").click(function () {
    var total = $(".dp_item").length;
    $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
    $.each($('.dp_item'), function (index, dp_item) {
      $(dp_item).attr('data-position', index + 1);
    });
    detect_active();
  });
  $("#dp-prev").click(function () {
    var total = $(".dp_item").length;
    $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
    $.each($('.dp_item'), function (index, dp_item) {
      $(dp_item).attr('data-position', index + 1);
    });
    detect_active();
  });
  $("#dp-dots li").click(function () {
    $("#dp-dots li").removeClass("active");
    $(this).addClass("active");
    var get_slide = $(this).attr('data-class');
    console.log(get_slide);
    $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
    $.each($('.dp_item'), function (index, dp_item) {
      $(dp_item).attr('data-position', index + 1);
    });
  });
  $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function () {
    var get_slide = $(this).attr('data-class');
    console.log(get_slide);
    $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
    $.each($('.dp_item'), function (index, dp_item) {
      $(dp_item).attr('data-position', index + 1);
    });
    detect_active();
  });
});

//팝업 레이아웃
function dialog() {

  var dialogBox = $('.content.con1.dialog'),
    dialogTrigger = $('.making.dialog__trigger'),
    dialogClose = $('.material-icons.dialog__close');

  dialogTrigger.on('click', function (e) {
    dialogBox.toggleClass('dialog--active');
    e.stopPropagation()
  });

  dialogClose.on('click', function () {
    dialogBox.removeClass('dialog--active');
  });

  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      dialogBox.removeClass('dialog--active');
    }
  });
};

$(function () {
  dialog();
});

function dialog2() {

  var dialogBox2 = $('.content.con2.dialog'),
    dialogTrigger2 = $('.flow_round.dialog__trigger'),
    dialogClose = $('.material-icons.dialog__close');

  dialogTrigger2.on('click', function (e) {
    dialogBox2.toggleClass('dialog--active');
    e.stopPropagation()
  });

  dialogClose.on('click', function () {
    dialogBox2.removeClass('dialog--active');
  });

  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      dialogBox2.removeClass('dialog--active');
    }
  });
};

$(function () {
  dialog2();
});


function dialog3() {

  var dialogBox3 = $('.content.con3.dialog'),
    dialogTrigger3 = $('.swings.dialog__trigger'),
    dialogClose = $('.material-icons.dialog__close');

  dialogTrigger3.on('click', function (e) {
    dialogBox3.toggleClass('dialog--active');
    e.stopPropagation()
  });

  dialogClose.on('click', function () {
    dialogBox3.removeClass('dialog--active');
  });

  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      dialogBox3.removeClass('dialog--active');
    }
  });
};

$(function () {
  dialog3();
});


//반응형 슬라이더
var swiper = new Swiper('.f1_photo.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination.f_pt',
    clickable: true,
  },
  breakpoints: {
    '@0.00': {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    '@0.75': {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    '@1.00': {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    '@1.50': {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  }
});

//토글 아코디언
$("div.text_N").on('click', function () {
  $(this).addClass('.on').next().slideToggle(800);
});

//오토 슬라이더
var swiper = new Swiper('.silde_insta.swiper-container', {
  centeredSlides: true,
  autoplay: {
    delay: 1800,
    disableOnInteraction: false,
  },
});

//동영상 슬라이더
var swiper = new Swiper('.swiper-container.video', {
  pagination: {
    el: '.swiper-pagination.vdp',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next.vd',
    prevEl: '.swiper-button-prev.vd',
  },
});

//나브 
$(document).ready(function () {
  $(".menu_fixed").click(function () {
    $(".hide_menu").addClass("on");
  });
  $(".close").click(function () {
    $(".hide_menu").removeClass("on");
  });


  //페이드 탭  
  $(".tab_contents").hide().eq(0).show();
  $(".section2 .tab_contents").hide().eq(0).show();
  $(".section3 .tab_contents").hide().eq(0).show();
  $(".section4 .tab_contents").hide().eq(0).show();
  $("ul.sub_nav li").click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $("#" + $(this).data('id')).fadeIn(1000)
      .siblings('.tab_contents').fadeOut(300);
  });
  var spot1 = $(".section1").offset().top;
  var spot2 = $(".section2").offset().top;
  var spot3 = $(".section3").offset().top;
  var spot4 = $(".section4").offset().top;
  $("#m1").click(function () {
    $("html, body").animate({
      scrollTop: spot1
    }, 500);
  });
  $("#m2").click(function () {
    $("html, body").animate({
      scrollTop: spot2
    }, 500);
  });
  $("#m3").click(function () {
    $("html, body").animate({
      scrollTop: spot3
    }, 500);
  });
  $("#m4").click(function () {
    $("html, body").animate({
      scrollTop: spot4
    }, 500);
  });
});
$(document).ready(function (e) {

  // 사진갤러리 팝업레이어
  lc_lightbox('.elem', {
    wrap_class: 'lcl_fade_oc',
    gallery: true,
    thumb_attr: 'data-lcl-thumb',

    skin: 'minimal',
    radius: 0,
    padding: 0,
    border_w: 0,
  });
});
