$('a[href*="#"]').click(function(event) {
  event.preventDefault();
  var target = $(this.hash);
  $('html, body').animate({
    scrollTop: target.offset().top
  }, 1000, function() {
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
