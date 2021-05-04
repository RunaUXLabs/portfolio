
$(function () {
  var lastWidth = $(window).width();
  $(window).resize(function(){
      if($(window).width()!=lastWidth){
          location.reload();
          lastWidth = $(window).width();
          return false;
      }
  });
  $(".sub_menu1").hide();
  $(".menu1").click(function () {
    $(".sub_menu1").slideToggle(300);
  });
});


$(document).ready(function(){
  //리사이징 할때마다 새로고침
  var lastWidth = $(window).width();
  $(window).resize(function(){
      if($(window).width()!=lastWidth){
          location.reload();
          lastWidth = $(window).width();
          return false;
      }
  });
 // 모바일메뉴 open/close
 $(".mMenu").click(function(){
     $(".gnb").addClass("on");
     // nav에 on클래스 추가/삭제
 });
 $(".mCloseBt").click(function(){
     $(".gnb").removeClass("on");
     // nav에 on클래스 추가/삭제
 });

 // 모바일용 아코디언 메뉴
 $(".sub_menu2").hide();
 // .mSnb를 숨기고 시작
 $("ul.menu2 > .depth1 > a").click(function(){
     $(this).next().slideDown(300);
     //this 다음 요소를 슬라이드다운
     $("ul.menu2 > .depth1 > a").not(this).next().slideUp(300);
     return false;
    });    
});