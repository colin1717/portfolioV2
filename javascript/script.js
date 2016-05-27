$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.mac').css({
    'transform' : 'translate(0px, ' + wScroll /8 + '%)'
  });

  $('.ipad').css({
    'transform' : 'translate(0px, ' + wScroll /16 + '%)'
  });

  if(wScroll > $('.project1').offset().top - ($(window).height() / 1.5)) {
    console.log('balls');
    $('.project1 .description').show(500);
  };

});
