$('a[href*="#"]').click(function(event) {
  event.preventDefault();
  var target = $(this.hash);
  $("#menu").css("z-index", "-999");
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
    var menu = document.getElementById('menu');
    $("#menu").css("z-index", "999");
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
