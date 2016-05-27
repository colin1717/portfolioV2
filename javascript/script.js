$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.mac').css({
    'transform' : 'translate(0px, ' + wScroll /8 + '%)'
  });

  $('.ipad').css({
    'transform' : 'translate(0px, ' + wScroll /16 + '%)'
  });

  if(wScroll > $('.project1').offset().top - ($(window).height() / 1.6) && wScroll < 1000) {
    console.log('balls');
    $('.project1 .image').css({
      'right' : wScroll - ($(window).height() / 2)
    })
    $('.project1 .description').show(500);
  };

});
