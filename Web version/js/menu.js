class Menu {
	mainMenu = {
		"#theory" : ".theory",
		"#quick" : ".quick",
		"#help" : ".help"
	}
	Redirect(event, element) {
		event.preventDefault();
		this.ClearActive();
		$(this.mainMenu[$(element).attr("href")]).addClass("active");

	}
	ClearActive() {
		$(".state").removeClass("active");
	}
}