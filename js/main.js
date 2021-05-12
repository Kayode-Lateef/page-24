(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$("#sidebarCollapse").on("click", function () {
		$("#sidebar").toggleClass("active");
	
	   
	  
		if( $(".logo").css('visibility') == 'hidden')
		$(".logo").css({opacity: 1.0, visibility: "visible"});
		else
		$(".logo").css({opacity: 0.0, visibility: "hidden"});
	  });
	
	

// $(document).ready(function() {
// 	$('#sidebarCollapse').on('click', function () {
//         $('.logo').css({'width': '100px', 'height': 'auto'});
//     });
// });

/*
	    Carousel
	*/
	$('#carousel-example').on('slide.bs.carousel', function (e) {

	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('.carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('.carousel-item').eq(i).appendTo('.carousel-inner');
	            }
	            else {
	                $('.carousel-item').eq(0).appendTo('.carousel-inner');
	            }
	        }
	    }
	});

	

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
	  

})(jQuery);
