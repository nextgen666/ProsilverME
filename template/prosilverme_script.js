$(document).ready(function() {
	$('.colour-block').mouseenter(function() {
		$('.colour-block-hover').fadeIn('medium');
	});
	$('.colour-block-hover').mouseleave(function() {
		$('.colour-block-hover').fadeOut('medium');
	});
});

$(function() {

	// grab the initial top offset of the navigation 
	var navbg_offset_top = $('.navbg').offset().top;
	
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var navbg = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > navbg_offset_top) { 
			$('.navbg').css({ 'position': 'fixed', 'top':0, 'left':0 });
		} else {
			$('.navbg').css({ 'position': 'relative' }); 
		}   
	};
	
	// run our function on load
	navbg();
	
	// and run it again every time you scroll
	$(window).scroll(function() {
		 navbg();
	});
	
	// NOT required:
	// for this demo disable all links that point to "#"
	$('a[href="#"]').click(function(event){ 
		event.preventDefault(); 
	});
	
});