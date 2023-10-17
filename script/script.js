$(function() {

  var hour = (new Date).getHours();

  if (hour >= 16) {
    $('.div').removeClass('dark').addClass('light');
  } else {
    $('.div').removeClass('light').addClass('dark');
  }
  console.log(hour);

});