

// 섹션1
  var swiper1 = new Swiper('.swiper-container.sec1', {
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    loop: true,
    loopFillGroupWithBlank: true,

    pagination: {
      el: '.swiper-pagination.sec1',
      clickable: true,
    },
  });





// 섹션2
    var swiper2 = new Swiper('.swiper-container.sec2-dv', {
      centeredSlides: true,
      autoplay: {
        delay: 2300,
        disableOnInteraction: false,
      },
      
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
    
      pagination: {
        el: '.swiper-pagination.sec2-dv',
        clickable: true,
      },
    });




// 섹션2-컨텐츠
var swiper3 = new Swiper('.swiper-container.benefit', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});









// 모바일에 따라 스와이프 바꾸려면 
// responsive breakpoints 에서 브레이크포인트
// 키값 가져와야함.

// 섹션3
var swiper4 = new Swiper('.swiper-container.Bs', {
  slidesPerView: 1,
  // spaceBetween: 30,
  loop: true,

  pagination: {
    el: '.swiper-pagination.Bs',
    clickable: true,
  },
});







// 섹션4

var swiper5 = new Swiper('.swiper-container.books', {
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
});





// 게시판
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + country).classList.add("active");
   
   btnTarget.classList.add("active");
}
















