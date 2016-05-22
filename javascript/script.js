$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.mac').css({
    'transform' : 'translate(0px, ' + wScroll /8 + '%)'
  });

  $('.ipad').css({
    'transform' : 'translate(0px, ' + wScroll /16 + '%)'
  });

});
