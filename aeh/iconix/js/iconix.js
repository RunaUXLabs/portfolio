// 메인 애니메이션
var main = new Swiper('.swiper-container.main', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 30000,
    disableOnInteraction: false,
  },
});





//main_button 
$(function(){
  $(".b2").click(function(){
    var url = $("#sel").attr('value');
    window.open('https://www.youtube.com/channel/UCPUeGC_AL-OnDQORKhRm6iA');
  }); //뽀로로 유튜브
  $(".b4").click(function(){
    var url = $("#sel").attr('value');
    window.open('https://www.youtube.com/channel/UCxUZwdsqshu2iLQwdEE6e7Q');
  });  //타요 유튜브
});





//each로 줄여보기
$(document).ready(function(){
  $(".news_button .button1").click(function() {
      $(".news .news_1 .news_2.n1").addClass("on").siblings().removeClass("on");
      $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button2").click(function() {
      $(".news .news_1 .news_2.n2").addClass("on").siblings().removeClass("on");
      $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button3").click(function() {
    $(".news .news_1 .news_2.n3").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button4").click(function() {
    $(".news .news_1 .news_2.n4").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button5").click(function() {
    $(".news .news_1 .news_2.n5").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button6").click(function() {
    $(".news .news_1 .news_2.n6").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button7").click(function() {
    $(".news .news_1 .news_2.n7").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".news_button .button8").click(function() {
    $(".news .news_1 .news_2.n8").addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
});









//뉴스 라이선스
$(document).ready(function () {
  $(".inner.art1 .intro .int_2").click(function () {
    $(".inner.art1 .licens").addClass("on");
    $(".inner.art1 .news").removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
  $(".inner.art1 .intro .int_1").click(function () {
    $(".inner.art1 .news").addClass("on");
    $(".inner.art1 .licens").removeClass("on");
    $(this).addClass("on").siblings().removeClass("on")
  });
});




// // emailJS 유저 ID
// (function(){ emailjs.init("<aeh1724 ID>"); })();

// // form id, #contact-form 안에 있는 것들 전송 
// window.onload = function () {
//   document.getElementById('.licens_name').addEventListener('submit', function (event) {
//     event.preventDefault(); this.contact_number.value = Math.random() * 100000 | 0;
//     // 서비스 id, 이메일 템플릿
//     emailjs.sendForm('contact_service', 'contact_template', this);
//   });
// }
// // 출처: https://mahyuna.tistory.com/14 [maro]




// //라이선스 경고창
// window.onload = function () {
//   var licens_name = document.login;
//   licens_name.onsubmit = function() {
//     if(!licens_name.useId.value) {
//       alert('성함을 입력해주세요!');
//       licens_name.useId.focus();
//       return false;
//     }
//     if(!licens_name.useCompany.value) {
//       alert('이메일을 입력해주세요!');
//       licens_name.useCompany.focus();
//       return false;
//     }
//   }
// }
// //var 값은 클래스를 넣을 수 없음 div를 form태그로 바꿔서 입력
// //다음에 <유효성검사> 배우고 넣고 싶으면 그때 넣어보기




// footer 애니메이션
var youtube = new Swiper('.swiper-container.youtube1', {
    slidesPerView: 5,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    loop: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

