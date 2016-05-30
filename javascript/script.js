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

$('#about-button').click(function(){
  $('html, body').animate({
    scrollTop: $('#content').offset().top
  }, 1000);
})

$('#projects-button').click(function(){
  $('html, body').animate({
    scrollTop: $('#projects').offset().top
  }, 1000);
})

$('#contact-button').click(function(){
  $('html, body').animate({
    scrollTop: $('#contact').offset().top
  }, 1000);
})


function showImg(div, wScroll) {
  if(wScroll > $(div).offset().top - 700) {
    $(div + " img").show(500);
  }
}
