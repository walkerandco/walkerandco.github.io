
$( document ).ready(function() {
	
	var scrollState = 0;

	/* after 150px, created fixed top menu */
	$(window).on("scroll", function(e) {
		
	  if ($(this).scrollTop() > 300 && scrollState === 0) {
		$(".fix").addClass("fix-nav");
		$('.navbar').animate({
			opacity: '1.0'
		});
		$('#name').removeClass('hidden');
		$('#xsbrand').removeClass('hidden');
		scrollState = 1;
		console.log("fixing nav");
	  } else if ($(this).scrollTop() <= 300 && scrollState == 1) {
		$(".fix").removeClass("fix-nav");
		$('.navbar').animate({
			opacity: '0.7'
		});
		$('#name').addClass('hidden');
		$('#xsbrand').addClass('hidden');
		scrollState = 0;
		console.log("remove fix");
	  }
	  
	});
	
	$("#navbutton").click(function() {
		if($(window).scrollTop() < 150 && $(window).width() < 500){
					$(".fix").addClass("fix-nav");
		}
	});
	
});