$(document).ready(function(){

  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var UserScroll = 0;
  $(window).scroll(function(){
    var ScrollUp = $(this).scrollTop();
    if (ScrollUp - UserScroll > 50){
      var NavHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + NavHeight}, 150);
      UserScroll = ScrollUp;
    }
    else if (-ScrollUp + UserScroll > 50){
      $('.navbar').animate({top: '0px'}, 150);
      UserScroll = ScrollUp;
    }
  });
});
