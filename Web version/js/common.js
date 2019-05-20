$(window).on("load", function() {
	$("#load").delay(1000).fadeOut('slow');
	$('#page').delay(1000).animate({'opacity':'1'},500);
});

$(document).ready(function(){
	$('.menu a').click(function(e){
		new Menu().Redirect(e, this);
	})
	new HelpFAQ('.help-faq');
});