function toggle() {
  var x = document.getElementById("myDropdown");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    var height = $(".navbar").height();
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= 1) {
      $(".header").addClass("solid-nav");
    } else {
      $(".header").removeClass("solid-nav");
    }
  });
});
