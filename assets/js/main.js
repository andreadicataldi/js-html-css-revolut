$(document).ready(function () {
  $(".has-dropdown").hover(
    function () {
      //mostra sottomenu
      $(".dropdown", this).stop(true, true).delay(50).slideDown(100);
    },
    function () {
      //nascondi sottomenu
      $(".dropdown", this).stop(true, true).slideUp(200);
    }
  );
});
