
var swiper1 = new Swiper('.swiper-container.sec3', {

  centeredSlides: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 6,
      spaceBetween: 0,
    }, loop: true,
    loopFillGroupWithBlank: true,
  }, autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

});

var swiper2 = new Swiper('.swiper-container.cube', {

  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 10,
    shadowScale: 0.30,
  }, pagination: {
    el: '.swiper-pagination',
  },
  loop: true
});

var swiper3 = new Swiper('.swiper-container.sec5', {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: '.arrow_left',
    prevEl: '.arrow_right',
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});

$(document).ready(function () {
  $(".memubar").click(function () {
    $(".sub").toggleClass("on");
  });
});

var burger = $('.memubar');

burger.each(function (index) {
  var $this = $(this);

  $this.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active-' + (index + 1));
  })
});



$(document).on("click", ".naccs .menu div", function () {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".naccs .menu div").removeClass("active");
    $(".naccs ul li").removeClass("active");

    $(this).addClass("active");
    $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

    var listItemHeight = $(".naccs ul")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".naccs ul").height(listItemHeight + "px");
  }
 
});

var spot1 = $(".sec4").offset().top;
  var spot2 = $(".sec6").offset().top;
  $("#m2").click(function () {
    $("html, body").animate({
      scrollTop: spot1
    }, 500);
  });
  $("#m1").click(function () {
    $("html, body").animate({
      scrollTop: spot2
    }, 500);
  });

window.addEventListener('load', function (event) {
  AOS.init();
});


function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


$(document).ready(function() {           
  
  
  $(".txt1").delay(1000).animate({opacity: 0.8, top: 150},800,"swing",function(){
  $(".txt2").delay(500).animate({opacity:0.8,top:200},800, "swing");
},);

});

