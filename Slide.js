$(document).on('scroll', function() {
	$(".Test").css("opacity", Math.max(100 - 0.004*window.scrollY, 0));
})