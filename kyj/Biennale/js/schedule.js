const newYears = '9 september 2021';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate)/1000;
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600)%24;
    const minutes = Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds)%60;

    document.getElementById('days').innerText = formatTime(days) + '일';
    document.getElementById('hours').innerText = formatTime(hours) + '시간';
    document.getElementById('minutes').innerText = formatTime(minutes) + '분';
    document.getElementById('seconds').innerText = formatTime(seconds) + '초';

}
function formatTime(time){
    return time < 10 ?   + time : time;
}
setInterval(countdown,1000);

$(document).ready(function(){
    $(".memubar").click(function(){
      $(".sub").toggleClass("on");
    });
  });

  var swiper = new Swiper('.swiper-container.craft', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },loop: true
  });

  var burger = $('.memubar');

  burger.each(function(index){
   var $this = $(this);

  $this.on('click', function(e){
 e.preventDefault();
 $(this).toggleClass('active-' + (index+1));
})
});
$(".sub > div").click(function(){ 
  $(this).addClass('on').siblings().removeClass('on');
  $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');

  $(this).addClass("on");
  $(".sub > div").not(this).removeClass("on");
  $(this).children("ul").slideToggle(300);
  $(".sub > div").not(this).children("ul").slideUp(300);
  $(".submini").click(function(e){ 
  e.stopPropagation();
  });
});