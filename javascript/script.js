$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.mac').css({
    'transform' : 'translate(0px, ' + wScroll /8 + '%)'
  });

  $('.ipad').css({
    'transform' : 'translate(0px, ' + wScroll /16 + '%)'
  });

  showImg("#takemehome", wScroll);
  showImg("#shining", wScroll);
  showImg("#crowdcare", wScroll);
});


function showImg(div, wScroll) {
  if(wScroll > $(div).offset().top - 700) {
    $(div + " img").show(500);
  }
}
