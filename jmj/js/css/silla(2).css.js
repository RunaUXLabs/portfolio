//header
var swiper1 = new Swiper('.swiper-container.first', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  //accommodation
  var swiper2_1 = new Swiper('.swiper-container.a1', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var swiper2_2 = new Swiper('.swiper-container.a2', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var swiper2_3 = new Swiper('.swiper-container.a3', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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
  
    //active
    var swiper4 = new Swiper('.swiper-container.s', {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination.s',
        clickable: true,
      },
    });
    
    //spa
    var swiper5 = new Swiper('.swiper-container.spa', {
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
  
    //dining2
    $(document).ready(function(){
      $(".number span:eq(0)").click(function(){
        $(".lounge").addClass("on");
        $(".bakery").removeClass("on");
        $(".restaurant").removeClass("on");
      });
      $(".number span:eq(1)").click(function(){
        $(".bakery").addClass("on");
        $(".lounge").removeClass("on");
        $(".restaurant").removeClass("on");
      });
      $(".number span:eq(2)").click(function(){
        $(".restaurant").addClass("on");
        $(".bakery").removeClass("on");
        $(".lounge").removeClass("on");
      });
    });
  
    //accommodation2
    $(document).ready(function(){
      $(".rightB span:eq(0)").click(function(){
        $(".a1").addClass("on").swiper2_1.update();
        $(".a2").removeClass("on");
        $(".a3").removeClass("on");
        return false
      });
      $(".rightB span:eq(1)").click(function(){
        $(".a2").addClass("on").swiper2_2.update();
        $(".a1").removeClass("on");
        $(".a3").removeClass("on");
        return false
      });
      $(".rightB span:eq(2)").click(function(){
        $(".a3").addClass("on").swiper2_3.update();
        $(".a1").removeClass("on");
        $(".a2").removeClass("on");
        return false
      });
    });
  
    //activity
    $(document).ready(function(){
      $(".sumbt").click(function(){
        $(".sum").addClass("on").swiper4.update();
        $(".kids").removeClass("on");
        $(".camping").removeClass("on");
        return false
      });
      $(".sumbt01").click(function(){
        $(".kids").addClass("on").swiper4.update();
        $(".sum").removeClass("on");
        $(".camping").removeClass("on");
        return false
      });
      $(".sumbt02").click(function(){
        $(".camping").addClass("on").swiper4.update();
        $(".kids").removeClass("on");
        $(".sum").removeClass("on");
        return false
      });
    });
  
    //spa
    $(document).ready(function(){
      $(".spa span.s1").click(function(){
        $(".mark.sumbi").addClass("on");
        $(".mark.kabana").removeClass("on");
      });
      $(".spa span.s2").click(function(){
        $(".mark.kabana").addClass("on");
        $(".mark.sumbi").removeClass("on");
      });
    });


