function() {
  /*
  If any input is empty make it's border red and shake it. After the animation is complete, remove the shake and animated classes so that the animation can repeat.
  */

  // Check name input
  if ($('#name').val() === '') {
    $('#name').addClass('form-error animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass('animated shake');
    });
  } else {
    $('#name').removeClass('form-error');
  }

  // Check email input
  if ($('#email').val() === '') {
    $('#email').addClass('form-error animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass('animated shake');
    });
  } else {
    $('#email').removeClass('form-error');
  }

  // Check message textarea
  // if ($('#message').val() === '') {
  //   $('#message').addClass('form-error animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  //     $(this).removeClass('animated shake');
  //   });
  // } else {
  //   $('#message').removeClass('form-error');
  // }

}