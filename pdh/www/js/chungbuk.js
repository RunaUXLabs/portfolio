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



var swiper4 = new Swiper('.swiper-container.doc', {
  spaceBetween: 30,
    slidesPerView: 1,
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.doc .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.doc .swiper-button-next',
        prevEl: '.doc .swiper-button-prev',
    },
});

$(function() {
  $('.oneday').click(function() {

      var chkd = $("#pop_day").is(":checked");
      if(chkd){
          $.cookie('popup', 'hidden', {expires : 1});
          // jquery.cookie에서 $기호를 변수이름처럼 사용하였다. expires는 jquery.cookie에서 선언되었다.
          // 스크립트의 이름이 jquery. (혹은 $.)으로 시작하는 것은 이 스크립트가 jQuery에 의존적이하는 점을 명시하는것이다.
      }
      $('.news').css('display', 'none');
      // 1일동안 닫기라는 버튼을 눌렀을때 (체크박스)쿠키 적용 여부 판단하여 출력여부 판단
  });

  if($.cookie('popup') == 'hidden'){
      $('.news').css('display', 'none');
  }else{
      $('.news').css('display', 'block');
  }
  // 팝업의 출력형태를 분석해서, 이게 쿠키때문인지, 그냥 x눌러서 안보이게 한건지 구분해서 재처리


  //닫기버튼  
  $('.ic_close').click(function() {
      // $('.popup').hide();
      $('.news').css('display', 'none');
  });
  
});