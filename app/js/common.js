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


$(window).scroll(function () {
	if ($(this).scrollTop() > $(this).height()) {
		$('.top-scroll').addClass('top-scroll_active');
	} else {
		$('.top-scroll').removeClass('top-scroll_active');
	}
	$('.top-scroll').click(function () {
		$("html, body").stop().animate({ scrollTop: 0 }, 'slow', 'swing');
	});

});


function sendMail() {
	$("#order-form").submit(function () {
		$.ajax({
			type: "POST",
			url: "../ajax/mail-form_order.php",
			data: $(this).serialize(),
			success: function (response) {
				if (response) {
					console.log("send");
					$(".popup-thank").show("500");
				} else {
					console.log("Ошибка отправки");
				}
			},
			error: function (response) {
				console.log("Файл не найден");
			}
		});
	});
}
