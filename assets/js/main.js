$(document).ready(function () {
  $(".has-dropdown").hover(
    function () {
      $(".dropdown", this).stop(true, true).delay(50).slideDown(100);
    },
    function () {
      $(".dropdown", this).stop(true, true).delay(100).slideUp(10);
    }
  );
});