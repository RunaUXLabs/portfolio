$(function(){
	$('div.mainimg:gt(0)').hide();
	setInterval(function(){
		$('div.mainimg:first-child').fadeOut()
		.next('div.mainimg').fadeIn()
		.end().appendTo('main');
	},4000);
});

$(function(){
	$("div.mainimg span").delay(200).animate({opacity:1,top:80},800,"swing", function(){
		$("div.mainimg p").delay(500).animate({opacity:1,top:150},800,"swing");
	})
});

var swiper = new Swiper('.swiper-container', {
	effect: 'flip',
	grabCursor: true,
	pagination: {
	  el: '.swiper-pagination',
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  });

  var swiper2 = new Swiper2('.swiper-container2', {
	cssMode: true,
	navigation: {
	  nextEl: '.swiper-button-next2',
	  prevEl: '.swiper-button-prev2',
	},
	pagination: {
	  el: '.swiper-pagination2'
	},
	mousewheel: true,
	keyboard: true,
  });