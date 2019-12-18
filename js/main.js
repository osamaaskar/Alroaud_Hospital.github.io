$(function(){
    "use strict"
    var winh = $(window).height();
    var navh = $(".navbar").innerHeight();
    
    $(".hospital-header").height(winh-navh);
	
	//Slider
	 $(".slider-news, .carousel-item").height(winh- navh);
	
	//pagination
	
	$(".last-news .paginations .pagination .page-item .page-link").click(function(){
		
		$(this).addClass("active").parent().siblings().find("a").removeClass("active");
	});
	
});
	