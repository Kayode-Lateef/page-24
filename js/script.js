(function ($) {
  "use strict";
  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");

   
  
    if( $(".logo").css('visibility') == 'hidden')
    $(".logo").css({opacity: 1.0, visibility: "visible"}).animate({opacity: 0}, 5000);
    else
    $(".logo").css({opacity: 0.0, visibility: "hidden"}).animate({opacity: 1}, 2000);
  });



//   $("#btnToggle").on("click", function () {
//     $("#sidebar").toggleClass("active");
//   });


  $(".txt-1").on("click", function () {
  $(".txt-1").css({color: "#061541", fontSize: "18px", fontWeight: 700, opacity: "1.0" });
  $(".txt-2").css({color: "#061541", fontSize: "18px", fontWeight: 400, opacity: "0.5" });
  $(".txt-3").css({color: "#061541", fontSize: "18px", fontWeight: 400, opacity: "0.5" });

});

$(".txt-2").on("click", function () {
$(".txt-2").css({color: "#061541", fontSize: "18px",  fontWeight: 700, opacity: "1.0" });
$(".txt-1").css({color: "#061541", fontSize: "18px", fontWeight: 400, opacity: "0.5" });
$(".txt-3").css({color: "#061541", fontSize: "18px", fontWeight: 400, opacity: "0.5" });

});

$(".txt-3").on("click", function () {
  $(".txt-3").css({color: "#061541", fontSize: "18px",  fontWeight: 700, opacity: "1.0" });
  $(".txt-1").css({color: "#061541", fontSize: "18px",  fontWeight: 400, opacity: "0.5" });
  $(".txt-2").css({color: "#061541", fontSize: "18px",  fontWeight: 400, opacity: "0.5" });
});



})
(jQuery);

