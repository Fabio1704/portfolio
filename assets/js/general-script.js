
// window.addEventListener("scroll", event => {
//     let scrollTop = document.documentElement.scrollTop;
//     let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// 	let progress = 100 * scrollTop / scrollHeight;

// 	// if (progress > 1 && progress < 10){
// 	// 	document.querySelector(".progress").style.height = "10%";
// 	// } else if(progress < 1) {
// 	// 	document.querySelector(".progress").style.height = progress + "%";
// 	// } else {
// 		document.querySelector(".progress").style.height = progress + "%";
// 		document.querySelector(".eco-prog-circle").style.height = progress + "%";
// 	// }


// 	var docViewTop = $(window).scrollTop();
// 	var elemTop = $('#deux').offset().top;

// 	if(elemTop <= docViewTop) {
// 		document.querySelector(".progress").style.height = "9%";
// 	}

// 	var docViewTop3 = $(window).scrollTop();
// 	var elemTop3 = $('#trois').offset().top;

// 	if(elemTop3 <= docViewTop3) {
// 		document.querySelector(".progress").style.height = "20%";
// 	}

// 	var docViewTop4 = $(window).scrollTop();
// 	var elemTop4 = $('#quatre').offset().top;

// 	if(elemTop4 <= docViewTop4) {
// 		document.querySelector(".progress").style.height = "29%";
// 	}

// 	var docViewTop5 = $(window).scrollTop();
// 	var elemTop5 = $('#cinq').offset().top;

// 	if(elemTop5 <= docViewTop5) {
// 		document.querySelector(".progress").style.height = "39%";
// 	}

// 	var docViewTop6 = $(window).scrollTop();
// 	var elemTop6 = $('#six').offset().top;

// 	if(elemTop6 <= docViewTop6) {
// 		document.querySelector(".progress").style.height = "49%";
// 	}

// 	var docViewTop7 = $(window).scrollTop();
// 	var elemTop7 = $('#sept').offset().top;

// 	if(elemTop7 <= docViewTop7) {
// 		document.querySelector(".progress").style.height = "59%";
// 	}

// 	var docViewTop8 = $(window).scrollTop();
// 	var elemTop8 = $('#huit').offset().top;

// 	if(elemTop8 <= docViewTop8) {
// 		document.querySelector(".progress").style.height = "69%";
// 	}

// 	var docViewTop9 = $(window).scrollTop();
// 	var elemTop9 = $('#neuf').offset().top;

// 	if(elemTop9 <= docViewTop9) {
// 		document.querySelector(".progress").style.height = "79%";
// 	}

// 	var docViewTop10 = $(window).scrollTop();
// 	var elemTop10 = $('#dix').offset().top;

// 	if(elemTop10 <= docViewTop10) {
// 		document.querySelector(".progress").style.height = "90%";
// 	}

// 	var docViewTop11 = $(window).scrollTop();
// 	var elemTop11 = $('#onze').offset().top;

// 	if(elemTop11 <= docViewTop11) {
// 		document.querySelector(".progress").style.height = "100%";
// 	}

// 		// Scroll Down
// 		if( progress >= 9 && progress > 10 ) {
// 			$(".eco-prog-circle li:nth-child(2) .eco-a-for-section div").css('border-color', '#88B337' );
// 			$(".eco-prog-circle li:nth-child(2) .eco-a-for-section div > div").css('background', '#88B337' );
// 		}

// 		if( progress >= 20 && progress > 21 ) {
// 			$(".eco-prog-circle li:nth-child(3) .eco-a-for-section div").css('border-color', '#88B337' );
// 			$(".eco-prog-circle li:nth-child(3) .eco-a-for-section div > div").css('background', '#88B337' );
// 		}

// 		if( progress >= 29 && progress > 30 ) {
// 			$(".eco-prog-circle li:nth-child(4) .eco-a-for-section div").css('border-color', '#88B337' );
// 			$(".eco-prog-circle li:nth-child(4) .eco-a-for-section div > div").css('background', '#88B337' );
// 		}

// 		if( progress >= 39 && progress > 40 ) {
// 			$(".eco-prog-circle li:nth-child(5) .eco-a-for-section div").css('border-color', '#88B337' );
// 			$(".eco-prog-circle li:nth-child(5) .eco-a-for-section div > div").css('background', '#88B337' );
// 		}

// 		if( progress >= 49 && progress > 50 ) {
// 			$(".eco-prog-circle li:nth-child(6) .eco-a-for-section div").css('border-color', '#88B337' );
// 			$(".eco-prog-circle li:nth-child(6) .eco-a-for-section div > div").css('background', '#88B337' );
// 		}

// 		if( progress >= 59 && progress > 60 ) {
// 			$(".eco-prog-circle li:nth-child(7) .eco-a-for-section div").css('border-color', '#88B337' );
// 			$(".eco-prog-circle li:nth-child(7) .eco-a-for-section div > div").css('background', '#88B337' );
// 		}

// 		if( progress >= 69 && progress > 70 ) {
// 			$(".eco-prog-circle li:nth-child(8) .eco-a-for-section div").css('border-color', '#88B337' );
// 			$(".eco-prog-circle li:nth-child(8) .eco-a-for-section div > div").css('background', '#88B337' );
// 		}

// 		if( progress >= 70 && progress > 71 ) {
// 			$(".eco-prog-circle li:nth-child(9) .eco-a-for-section div").css('border-color', '#88B337' );
// 			$(".eco-prog-circle li:nth-child(9) .eco-a-for-section div > div").css('background', '#88B337' );
// 		}

// 		if( progress >= 89 && progress > 95 ) {
// 			$(".eco-prog-circle li:nth-child(10) .eco-a-for-section div").css('border-color', '#88B337' );
// 			$(".eco-prog-circle li:nth-child(10) .eco-a-for-section div > div").css('background', '#88B337' );
// 		}

// 		if( progress >= 99) {
// 			$(".eco-prog-circle li:nth-child(11) .eco-a-for-section div").css('border-color', '#88B337' );
// 			$(".eco-prog-circle li:nth-child(11) .eco-a-for-section div > div").css('background', '#88B337' );
// 		}

// 		// Scroll Up
// 		if( progress < 20 ) {
// 			$(".eco-prog-circle li:nth-child(3) .eco-a-for-section div").css('border-color', 'rgb(122, 122, 122)' );
// 			$(".eco-prog-circle li:nth-child(3) .eco-a-for-section div > div").css('background', 'rgb(122, 122, 122)' );
// 		}

// 		if ( progress < 9 ) {
// 			$(".eco-prog-circle li:not(:first-child) .eco-a-for-section div").css('border-color', 'rgb(122, 122, 122)' );
// 			$(".eco-prog-circle li:not(:first-child) .eco-a-for-section div > div").css('background', 'rgb(122, 122, 122)' );
// 		}

// 		if ( progress < 29 ) {
// 			$(".eco-prog-circle li:nth-child(4) .eco-a-for-section div").css('border-color', 'rgb(122, 122, 122)' );
// 			$(".eco-prog-circle li:nth-child(4) .eco-a-for-section div > div").css('background', 'rgb(122, 122, 122)' );
// 		}

// 		if ( progress < 39 ) {
// 			$(".eco-prog-circle li:nth-child(5) .eco-a-for-section div").css('border-color', 'rgb(122, 122, 122)' );
// 			$(".eco-prog-circle li:nth-child(5) .eco-a-for-section div > div").css('background', 'rgb(122, 122, 122)' );
// 		}

// 		if ( progress < 49 ) {
// 			$(".eco-prog-circle li:nth-child(6) .eco-a-for-section div").css('border-color', 'rgb(122, 122, 122)' );
// 			$(".eco-prog-circle li:nth-child(6) .eco-a-for-section div > div").css('background', 'rgb(122, 122, 122)' );
// 		}

// 		if ( progress < 59 ) {
// 			$(".eco-prog-circle li:nth-child(7) .eco-a-for-section div").css('border-color', 'rgb(122, 122, 122)' );
// 			$(".eco-prog-circle li:nth-child(7) .eco-a-for-section div > div").css('background', 'rgb(122, 122, 122)' );
// 		}

// 		if ( progress < 69 ) {
// 			$(".eco-prog-circle li:nth-child(8) .eco-a-for-section div").css('border-color', 'rgb(122, 122, 122)' );
// 			$(".eco-prog-circle li:nth-child(8) .eco-a-for-section div > div").css('background', 'rgb(122, 122, 122)' );
// 		}

// 		if ( progress < 80 ) {
// 			$(".eco-prog-circle li:nth-child(9) .eco-a-for-section div").css('border-color', 'rgb(122, 122, 122)' );
// 			$(".eco-prog-circle li:nth-child(9) .eco-a-for-section div > div").css('background', 'rgb(122, 122, 122)' );
// 		}

// 		if ( progress < 95 ) {
// 			$(".eco-prog-circle li:nth-child(10) .eco-a-for-section div").css('border-color', 'rgb(122, 122, 122)' );
// 			$(".eco-prog-circle li:nth-child(10) .eco-a-for-section div > div").css('background', 'rgb(122, 122, 122)' );
// 		}

// 		if ( progress < 99 ) {
// 			$(".eco-prog-circle li:nth-child(11) .eco-a-for-section div").css('border-color', 'rgb(122, 122, 122)' );
// 			$(".eco-prog-circle li:nth-child(11) .eco-a-for-section div > div").css('background', 'rgb(122, 122, 122)' );
// 		}

// });


$(document).ready(function(){


	$('.desktop-menu').css('opacity','0');
	$('.collapse-icon').on('click', function(){
		if(!$(this).hasClass("open")){
		$('.alllinks').css({
			"margin-left": "0%",
			"transition": "ease-in 1s"
		});
		
		setTimeout(function() { $('.mobile-menu').addClass('menu-rel'); }, 500);
		$(this).addClass('open');	
		$('body').addClass('animate-bar');
		$('.eco-prog-wrap, .eco-prog-circle').hide();
		$('.desktop-menu').css({
			"opacity":"1",
			"transition":"ease-in 1s"
		});
		
		}else{

			$('.desktop-menu').css({
				"opacity":"0",
				"transition":"ease-in 1s"
			});

			$('.eco-prog-wrap, .eco-prog-circle').show();

			setTimeout(function() { $('.mobile-menu').removeClass('menu-rel'); }, 800);
			// $('.alllinks').addClass('behindtext');
			// $('.alllinks').removeClass('overtext');

			if($(window).width() <= 1280 && $(window).width()>=900) {
				$('.alllinks').css({
					"margin-left": "-794px",
					"transition": "ease-in 1s"
				});
			}
			else if($(window).width() <= 899 && $(window).width() >= 755){
				$('.alllinks').css({
					"margin-left": "-649px",
					"transition": "ease-in 1s"
				});
			}
			else if($(window).width() <= 754 && $(window).width() >= 501){
				$('.alllinks').css({
					"margin-left": "-394px",
					"transition": "ease-in 1s"
				});
			}else if($(window).width() <= 500 && $(window).width() >= 401){
				$('.alllinks').css({
					"margin-left": "-330px",
					"transition": "ease-in 1s"
				});
			}else if($(window).width() <= 400 && $(window).width() >= 350){
				$('.alllinks').css({
					"margin-left": "-280px",
					"transition": "ease-in 1s"
				});
			}else if($(window).width() <= 349){
				$('.alllinks').css({
					"margin-left": "-230px",
					"transition": "ease-in 1s"
				});
			} else {
				$('.alllinks').css({
					"margin-left": "-1144px",
					"transition": "ease-in 1s"
				});
			}
			// $('.alllinks').css({
			// 	"margin-left": "-1144px",
			// 	"transition": "ease-in 1s"
			// });
			$(this).removeClass('open')	

			$('body').removeClass('animate-bar');
		}
		
	});

	// $('.up-image').on('click', function(){
	// 	$('.chapter1-dropdown').slideUp();
	// 	$('.up-image').hide()
	// 	$('.down-image').show();
	// });

	// $('.down-image').on('click', function(){
	// 	$('.chapter1-dropdown').slideDown();
	// 	$('.up-image').show()
	// 	$('.down-image').hide();
	// });

	// $('.up-image2').on('click', function(){
	// 	$('.chapter2-dropdown').slideUp();
	// 	$('.up-image2').hide()
	// 	$('.down-image2').show();
	// });

	// $('.down-image2').on('click', function(){
	// 	$('.chapter2-dropdown').slideDown();
	// 	$('.up-image2').show()
	// 	$('.down-image2').hide();
	// });
	
	// Menu Arrows Desktop
	if($('#desktop_active').hasClass('active')) {
		$('.chapter1-dropdown').show()
		$('.chapter2-dropdown').hide()
		$('.gen-arrows').prepend('<img src="assets/images/menu/Group 495.png" class="down-image"><img src="assets/images/menu/Group 495-rv.png" class="up-image">');
		$('.down-image').show();
		$('.up-image').hide();

	} else {
		$('.gen-arrows').prepend('<img src="assets/images/menu/inactive-downarrow.png" class="down-image2"><img src="assets/images/menu/inactive-uparrow.png" class="up-image2">');
		$('.down-image2').hide();
		$('.up-image2').show();
	}

	if($('#desktop_active2').hasClass('active')) {
		$('.chapter1-dropdown').hide()
		$('.chapter2-dropdown').show()
		$('.gen-arrows2').prepend('<img src="assets/images/menu/Group 495.png" class="down-image"><img src="assets/images/menu/Group 495-rv.png" class="up-image">');
		$('.down-image').show();
		$('.up-image').hide();
	} else {
		$('.gen-arrows2').prepend('<img src="assets/images/menu/inactive-downarrow.png" class="down-image2"><img src="assets/images/menu/inactive-uparrow.png" class="up-image2">');
		$('.down-image2').hide();
		$('.up-image2').show();
	}

	$('.gen-arrows .down-image').on('click', function(){
		$('.chapter1-dropdown').slideUp();
		$('.up-image').show()
		$('.down-image').hide();
	});

	$('.gen-arrows .up-image').on('click', function(){
		$('.chapter1-dropdown').slideDown();
		$('.gen-arrows .up-image').hide()
		$('.gen-arrows .down-image').show();
	});

	$('.gen-arrows .down-image2').on('click', function(){
		$('.chapter1-dropdown').slideUp();
		$('.up-image2').show()
		$('.down-image2').hide();
	});

	$('.gen-arrows .up-image2').on('click', function(){
		$('.chapter1-dropdown').slideDown();
		$('.gen-arrows .up-image2').hide()
		$('.gen-arrows .down-image2').show();
	});

	// 2
	$('.gen-arrows2 .down-image').on('click', function(){
		$('.chapter2-dropdown').slideUp();
		$('.up-image').show()
		$('.down-image').hide();
	});

	$('.gen-arrows2 .up-image').on('click', function(){
		$('.chapter2-dropdown').slideDown();
		$('.gen-arrows2 .up-image').hide()
		$('.gen-arrows2 .down-image').show();
	});

	$('.gen-arrows2 .down-image2').on('click', function(){
		$('.chapter2-dropdown').slideUp();
		$('.up-image2').show()
		$('.down-image2').hide();
	});

	$('.gen-arrows2 .up-image2').on('click', function(){
		$('.chapter2-dropdown').slideDown();
		$('.gen-arrows2 .up-image2').hide()
		$('.gen-arrows2 .down-image2').show();
	});

	// Menu Arrows Mobile
	// if($('#look_if_active').hasClass('active')) {
	// 	$('.gen-arrows').prepend('<img src="assets/images/menu/Group 495.png" class="up-image"><img src="assets/images/menu/Group 495-rv.png" class="down-image">');
	// } else {
	// 	$('.gen-arrows').prepend('<img src="assets/images/menu/inactive-uparrow.png" class="up-image2"><img src="assets/images/menu/inactive-downarrow.png" class="down-image2"></img>');
	// }

	// if($('#look_if_active2').hasClass('active')) {
	// 	$('.gen-arrows2').prepend('<img src="assets/images/menu/Group 495.png" class="up-image"><img src="assets/images/menu/Group 495-rv.png" class="down-image">');
	// } else {
	// 	$('.gen-arrows2').prepend('<img src="assets/images/menu/inactive-uparrow.png" class="up-image2"><img src="assets/images/menu/inactive-downarrow.png" class="down-image2"></img>');
	// }

	// Image Click
	$(".eco-trees #eco-to-click:first-child img").click(function(){
		if ($(window).width() <= 767){
			$(".eco-tree-arrows").css('display', 'none');
			$(".eco-text-tos").css('display', 'block');
			$(".eco-text-to-show:first-child").toggleClass("shows animated2 animatedFadeInUp fadeInUp");
			$('.eco-text-to-show:nth-child(2), .eco-text-to-show:nth-child(3)').removeClass('shows');
		} else {
			$(".eco-tree-arrows").css('display', 'none');
			$(".eco-text-tos").css('display', 'block');
			$(".eco-text-to-show:first-child").toggleClass("shows animated2 animatedFadeInUp fadeInUp");
		}
	});

	$(".eco-trees #eco-to-click:nth-child(2) img").click(function(){
		if ($(window).width() <= 767){
			$(".eco-tree-arrows").css('display', 'none');
			$(".eco-text-tos").css('display', 'block');
			$(".eco-text-to-show:nth-child(2)").toggleClass("shows animated2 animatedFadeInUp fadeInUp");
			$('.eco-text-to-show:nth-child(1), .eco-text-to-show:nth-child(3)').removeClass('shows');
		} else {
			$(".eco-tree-arrows").css('display', 'none');
			$(".eco-text-tos").css('display', 'block');
			$(".eco-text-to-show:nth-child(2)").toggleClass("shows animated2 animatedFadeInUp fadeInUp");
		}
	});

	$(".eco-trees #eco-to-click:nth-child(3) img").click(function(){
		if ($(window).width() <= 767){
			$(".eco-tree-arrows").css('display', 'none');
			$(".eco-text-tos").css('display', 'block');
			$(".eco-text-to-show:nth-child(3)").toggleClass("shows animated2 animatedFadeInUp fadeInUp");
			$('.eco-text-to-show:nth-child(1), .eco-text-to-show:nth-child(2)').removeClass('shows');
		} else {
			$(".eco-tree-arrows").css('display', 'none');
			$(".eco-text-tos").css('display', 'block');
			$(".eco-text-to-show:nth-child(3)").toggleClass("shows animated2 animatedFadeInUp fadeInUp");
		}
	});

	// Clickable Dot
	$('#uns').on('click', function(){
		document.querySelector(".eco-prog-wrap .progress").style.height = "0%";
	});

	$('#deuxs').on('click', function(){
		document.querySelector(".eco-prog-wrap .progress").style.height = "9%";
	});
	
	$('#troiss').on('click', function(){
		document.querySelector(".eco-prog-wrap .progress").style.height = "20%";
	});

	$('#quatres').on('click', function(){
		document.querySelector(".eco-prog-wrap .progress").style.height = "29%";
	});

	$('#cinqs').on('click', function(){
		document.querySelector(".eco-prog-wrap .progress").style.height = "39%";
	});

	$('#sixs').on('click', function(){
		document.querySelector(".eco-prog-wrap .progress").style.height = "49%";
	});

	$('#septs').on('click', function(){
		document.querySelector(".eco-prog-wrap .progress").style.height = "59%";
	});

	$('#huits').on('click', function(){
		document.querySelector(".eco-prog-wrap .progress").style.height = "69%";
	});

	$('#neufs').on('click', function(){
		document.querySelector(".eco-prog-wrap .progress").style.height = "79%";
	});

	$('#dixs').on('click', function(){
		document.querySelector(".eco-prog-wrap .progress").style.height = "90%";
	});

	$('#onzes').on('click', function(){
		document.querySelector(".eco-prog-wrap .progress").style.height = "100%";
	});


});
// animation
jQuery(function($) {


	var doAnimations = function() {
		
		var offset = $(window).scrollTop() + $(window).height(),
			$animatables = $('.animatable');
			$flew = $('.flew');
		
		if ($animatables.length == 0) {
			$(window).off('scroll', doAnimations);
		}
		
		$animatables.each(function(i) {
		var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
				$animatable.removeClass('animatable').addClass('animated');
			}
		});

	};

	$(window).on('scroll', doAnimations);
	$(window).trigger('scroll');

});