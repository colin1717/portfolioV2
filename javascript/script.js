var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
console.log(isSafari);

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (!isSafari) {
    $('.mac').css({
      'transform' : 'translate(0px, ' + wScroll /8 + '%)'
    });

    $('.ipad').css({
      'transform' : 'translate(0px, ' + wScroll /12 + '%)'
    });
  }

  showImg("#takemehome", wScroll);
  showImg("#shining", wScroll);
  showImg("#crowdcare", wScroll);
  showImg('#brothersports', wScroll);

  moveContactIpad(wScroll);
});

$('#about-button').click(function(){
  $('html, body').animate({
    scrollTop: $('#content').offset().top
  }, 500);
})

$('#projects-button').click(function(){
  $('html, body').animate({
    scrollTop: $('#projects').offset().top
  }, 1000);
})

$('#contact-button').click(function(){
  $('html, body').animate({
    scrollTop: $('#contact').offset().top
  }, 1200);
})

$('.github').click(function(){
  window.open('http://github.com/colin1717', '_blank');
})

$('.linkedin').click(function(){
  window.open('https://www.linkedin.com/in/colinhancock', '_blank');
})

$('.twitter').click(function(){
  window.open('https://twitter.com/colin_atx', '_blank');
})

function moveContactIpad(wScroll) {
  if(wScroll > $('.contact-ipad').offset().top - 500) {
    $(".contact-ipad").animate({
    'margin-right': '50%',
    'background-size': '80%',
    }, 500);
  }
}

function showImg(div, wScroll) {
  if(wScroll > $(div).offset().top - 700) {
    $(div + " img").show(400);
  }
}
