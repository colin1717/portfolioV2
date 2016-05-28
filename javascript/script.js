$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  console.log(wScroll);
  console.log('This is propic top: ' + ($('#upcoming .project-pic').offset().top - ($(window).height()) / 1.5));

  $('.mac').css({
    'transform' : 'translate(0px, ' + wScroll /8 + '%)'
  });

  $('.ipad').css({
    'transform' : 'translate(0px, ' + wScroll /16 + '%)'
  });

  shiftLeft('#take-me-home .project-pic', '#take-me-home .project-description', 1.7, 2, wScroll);

  shiftRight('#shining .project-pic', '#shining .project-description', 1.45, 2, wScroll);

  shiftLeft('#upcoming .project-pic', '#upcoming .project-description', 1.5, .55, wScroll);

});

function shiftLeft(projectPic, projectDescription, val, val2, wScroll) {
  if(wScroll > $(projectPic).offset().top - ($(window).height() / val)) {
    $(projectPic).css({
      'right' : wScroll - ($(window).height() / val2)
    });
    $(projectDescription).show(500);
  } else if (wScroll < $(projectPic).offset().top - ($(window).height() / val)) {
      $(projectDescription).hide(500);
  }
}

function shiftRight(projectPic, projectDescription, val, val2, wScroll) {
  if(wScroll > $(projectPic).offset().top - ($(window).height() / val)) {
    console.log(projectPic);
    $(projectPic).css({
      'left' : wScroll - ($(window).height() / val2)
    });
    $(projectDescription).show(500);
  } else if (wScroll < $(projectPic).offset().top - ($(window).height() / val)) {
      $(projectDescription).hide(500);
  }
}
