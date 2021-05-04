//pc와 모바일     

//AOS 
    AOS.init();

// 현재 전시 swiper 
var swiper = new Swiper('.swiper1 .swiper-container.ex_wrap', {
    speed: 900,
    autoplay: true,
    loop: true,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        autoplay: true,
    },
});

//스크롤시 애니메이션 적용하기
    //분관전시 탭메뉴에 적용하기
    $(document).scroll(function(){
    var scroll = $(window).scrollTop();
    var content2 = $("#content2").scrollTop();
    if( scroll > content2 + 200){
        $(".tabCont > div > div").addClass("on");
    } else {
        $(".tabCont > div > div").removeClass("on");
    }
    });

    // swiper3 적용하기
    $(document).scroll(function(){
    var scroll2 = $(window).scrollTop();
    var content3 = $("#content3").height();
    if( scroll2 > content3 + 700 ){
        $(".swiper3 .swiper-slide").addClass("on");
    } else {
        $(".swiper3 .swiper-slide").removeClass("on");
    }
    });


// 분관전시 탭메뉴
// var tabBtn = $(".tabMenu > .tabBtn > a")
// var tabCont = $(".tabCont > div")

// tabCont.hide().eq(0).show();

// tabBtn.click(function(e){
//     e.preventDefault();
//     var target = $(this);
//     var index = target.index();

//     tabBtn.removeClass("active");
//     target.addClass("active");
//     tabCont.hide();
//     tabCont.eq(index).show();

    // tabCont.find("div").addClass("on");
// });

// 분관전시 탭메뉴 다시설계하기
var tabBtn = $(".tabBtn > a")
var tabCont = $(".tabCont > div")
// tabCont.hide().eq(0).show();
tabBtn.click(function(e){
    e.preventDefault();
    $(this).addClass("active").siblings().removeClass("active");
    $("#"+$(this).data('id')).addClass("active").siblings().removeClass("active");
});

//notice 탭메뉴
var noticeBtn = $(".noticeBtn > a")
var noticeCont = $(".noticeCont > div")

noticeCont.hide().eq(0).show();

noticeBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();

    noticeBtn.removeClass("active");
    target.addClass("active");
    noticeCont.css("display","none");
    noticeCont.eq(index).css("display","block");
});

//cummunication 탭메뉴
var communBtn = $(".communBtn > a")
var communCont = $(".communCont > div")

communCont.hide().eq(0).show();

communBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();

    communBtn.removeClass("active");
    target.addClass("active");
    communCont.css("display","none");
    communCont.eq(index).css("display","block");
});


// 소장품 swiper
var swiper2 = new Swiper('.swiper-container.swiper2', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: '.swiper-pagination',
    }
});

// event 교육행사 swiper
var swiper3 = new Swiper('.swiper-container.swiper3', {
    slidesPerView: 1,
    spaceBetween: 20,
    // slidesPerView: 4,
    // direction: getDirection(),
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    // on: {
    //   resize: function () {
    //     swiper.changeDirection(getDirection());
    //   }
    // }
    breakpoints: {
        641: {
        slidesPerView: 4,
        spaceBetween: 20,
        }
        // 768: {
        //   slidesPerView: 4,
        //   spaceBetween: 40,
        // },
        // 1024: {
        //   slidesPerView: 5,
        //   spaceBetween: 50,
        // },
    }
});
// function getDirection() {
//   var windowWidth = window.innerWidth;
//   var direction = window.innerWidth <= 640 ? 'horizontal' : 'horizontal';
//   return direction;
// }


//swiper 차례대로 나타나는 애니메이션 






//모바일에서만
var iw = window.innerWidth;
if(iw < 641){

    //모바일 햄버거 메뉴 아이콘, menu 움직이기
    $(".M_bt").click(function(){
    $(".M_bt").toggleClass("on");
    $(".menu").toggleClass("on");
    });

    //모바일 subMenu 움직이기
    $(".menu > ul > li").mouseover(function(){
    $(this).find(".subMenu").stop().slideDown(300);
    });
    $(".menu > ul > li").mouseout(function(){
    $(this).find(".subMenu").stop().slideUp(300);
    });


// pc에서만
} else {
    //menu 움직이기
    $(".menu > ul").hover(function(){
    $(".top").toggleClass("on");
    $(".subMenu").stop().slideToggle(300);
    });


    // UP 메뉴 올리기
    $(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $(".up").addClass("on");
        }else {
            $(".up").removeClass("on");
        }
    });
    $(".up a").click(function(event){
        $(window).scrollTop(0);
        event.preventDefault();
    });
    });  

    }
