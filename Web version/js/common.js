$(window).on("load", function() {
	$("#load").fadeOut();
});
$(document).ready(function(){
	$('.menu a').click(function(e){
		new Menu().Redirect(e, this);
	})
	new HelpFAQ('.help-faq');
});