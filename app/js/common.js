$(function() {

	//popups

	$('.header__btn').click(function(event) {
		$('.popup-nameClass').fadeIn("slow");
		$('body').css('overflow-y','hidden');
	});
	
	$('.popup-nameClass__close').click(function(event) {
		$(".popup-nameClass").fadeOut('slow');
		$('body').css('overflow-y','auto');
	});
	
	$('.popup-nameClass__mask').click(function(event) {
		$(".popup-nameClass").fadeOut('slow');
		$('body').css('overflow-y','auto');
	});

});
