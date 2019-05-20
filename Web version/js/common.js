$(window).on("load", function() {
	$("#load").delay(1000).fadeOut('slow');
	$('#page').delay(1000).animate({'opacity':'1'},500);
});
$(document).ready(function(){
	$('.menu a').click(function(e){
		new Menu().Redirect(e, this);
	})
	new HelpFAQ('.help-faq', '.help-answers');

	$('.help-faq p').click(function(){
		$('.help-faq p').removeClass("active");
		$(this).addClass("active");
		$('.help-answers p').removeClass('active');
		$('.help-answers p:nth-child(' + ($(this).index() + 1) + ')').addClass('active');
	});

	$('.help-back').click(function(){
		$('.help').removeClass('active');
		$('.main-menu').addClass('active');
	});
});
