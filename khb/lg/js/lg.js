var swiper1 = new Swiper('.swiper-container.basicSwiper', {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    // loop: true,/
    pagination: {
        el: '.swiper-pagination.maincontroller',
        clickable: true,
    },
    on: {
        slideChangeTransitionStart: function() {
            $('.title').hide();
        },
        slideChangeTransitionEnd: function() {
            setTimeout(function () {
                $('.title').slideDown(1000);
            }, 1000);
        },
        slideChange: function () {
            if(this.realIndex == 1) {
                counting();
            } else {
                $('.num_animation').text('0')
            }
        }
    }
});

var iw = window.innerWidth;
if(iw < 641) {
    var swiper2 = new Swiper('.swiper-container.subSwiper1', {
        effect: 'flip',
        grabCursor: true,
        loop: true,
        pagination: {
        el: '.swiper-pagination.controller1',
        clickable: true
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }
    });
}

var swiper3 = new Swiper('.swiper-container.subSwiper2', {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination.controller2',
        dynamicBullets: true,
        clickable: true
    }
});

var iw = window.innerWidth;
if(iw < 641) {
    var swiper3 = new Swiper('.swiper-container.subSwiper2', {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination.controller2',
            dynamicBullets: true,
            clickable: true
        }
    });
}

var swiper4 = new Swiper('.swiper-container.subSwiper3', {
    spaceBetween: 0,
    // centeredSlides: true,
    effect: 'fade',
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    },
    loop: true,
    scrollbar: {
        el: '.swiper-scrollbar.controller3',
        hide: true,
        clickable: true
    }

});
function counting() {
    $('.num_animation').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-rate');
        
        $({ countNum: $this.text()}).animate({
            countNum: countTo
            //시작 숫자와 종료숫자를 비교한다
            },
            {
            duration: 3000,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
    
        });
    });
}


$(document).ready(function(){
    
    //nav togglebutton
    $(".mallbar").click(function(){
        $(this).toggleClass("on");
        $(".menu").toggleClass("on");
    })




    //nav click effect
    $(".menu > li > a").click(function(){
        $(this).toggleClass('on').siblings().removeClass('on');
        if($(this).hasClass('on')){
            $(this).next().removeClass('on');
        } else {
            $(this).next().addClass('on');
        }
        $(".menu > li > a").not(this).next().removeClass('on');
    });

    $(".submenu > li > a").click(function(){
        $(this).toggleClass('on').siblings().removeClass('on');
        if($(this).hasClass('on')){
            $(this).next().removeClass('on');
        } else {
            $(this).next().addClass('on');
        }
        $(".submenu > li > a").not(this).next().removeClass('on');
    });
    $(".brandmenu > li > a").click(function(){
        $(this).toggleClass('on').siblings().removeClass('on');
        if($(this).hasClass('on')){
            $(this).next().removeClass('on');
        } else {
            $(this).next().addClass('on');
        }
        $(".brandmenu > li > a").not(this).next().removeClass('on');
    });

    




    // footer slideup&down
    $(".footarrow").click(function(){
        $("footer").slideDown();
    });
    $(".button").click(function(){
        $("footer").slideUp();
    });



    
});


function openSite(select)
{
    if(select.value!='none') {
        window.open(select.value);
        select.value = 'none';
    } else {
        return;
    }
}
