$('a[href*="#"]').click(function(event) {
  event.preventDefault();
  var target = $(this.hash);

  $('html, body').animate({
    scrollTop: target.offset().top
  }, 1000, function() {
    if(window.scrollY > 50) {
      $('#name').animate({
        fontSize: '55px'
      });
    } else {
      $('#name').animate({
        fontSize: '110px'
      });
    }
    var $target = $(target);
    $target.focus();
    if($target.is(":focus")) {
      return false;
    } else {
      $target.attr('tabindex', '-1');
      $target.focus();
    };
  });
});

$(document).scroll(function () {
  if(window.scrollY > 50) {
    $('#name').stop().animate({
      fontSize: '55px'
    });
  } else {
    $('#name').stop().animate({
      fontSize: '110px'
    });
  }
});
