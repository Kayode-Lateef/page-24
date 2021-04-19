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
    // $('.collapse.in').toggleClass('in');
    // $(".logo").css("display", "block");
    // $(".logo").toggle();
    if( $(".logo").css('visibility') == 'hidden' )
    $(".logo").css('visibility','visible');
    else
    $(".logo").css('visibility','hidden');
    //  $(".logo").show();
        // $(".logo").css("display", "block");


  });
})(jQuery);

// $('#play-pause').click(function(){
//   if ( $('#video-over').css('visibility') == 'hidden' )
//     $('#video-over').css('visibility','visible');
//   else
//     $('#video-over').css('visibility','hidden');
// });