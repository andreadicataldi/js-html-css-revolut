$(document).ready(function () {
  $(".has-dropdown").click(function(e){
    $(".dropdown").hide();
    $this = $(this).find(".dropdown");
    $this.toggle();
  });
});
