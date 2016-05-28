$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  console.log(wScroll);

  $('.mac').css({
    'transform' : 'translate(0px, ' + wScroll /8 + '%)'
  });

  $('.ipad').css({
    'transform' : 'translate(0px, ' + wScroll /16 + '%)'
  });

  // if(wScroll > $('.project1').offset().top - ($(window).height() / 1.6) && wScroll < 1000) {
  //   $('.project1 .image').css({
  //     'right' : wScroll - ($(window).height() / 2)
  //   });
  //   $('.project1 .description').show(500);
  // };

  // if(wScroll < ($('.project1').offset().top / 1.6)) {
  //   $('.project1 .description').hide(500);
  // }

});
