class Menu {
	mainMenu = {
		"#theory" : ".theory",
		"#quick" : ".quick",
		"#help" : ".help"
	}
	Redirect(event, element) {
		event.preventDefault();
		this.ClearActive();
		let address = $(element).attr("href");
		switch (address) {
			case "#quick":
				let quick = new Quick();
				$('.q-a').click(function() {
					quick.Check(this);
				});
				break;
		}
		$(this.mainMenu[address]).addClass("active");
	}
	ClearActive() {
		$(".state").removeClass("active");
	}
}