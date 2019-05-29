class Menu {
	mainMenu = {
		"#theory" : ".theory",
		"#quick" : ".quick",
		"#help" : ".help"
	}
	profileMenu = {
		"#login" : ".login",
		"#registration" : ".registration",
		"#account" : ".account"
	}
	Redirect(event, element) {
		event.preventDefault();
		this.ClearActive();
		let address = $(element).attr("href");
		switch (address) {
			case "#quick":
				let quick = new Quick();
				$('.q-a').click(function() {
					if (quick.qList[quick.currentQ].isPassed !== true)
						quick.Check(this);
				});
				break;
		}
		$(this.mainMenu[address]).addClass("active");
	}
	ProfileRedirect(event, element) {
		event.preventDefault();
		this.ProfileClearActive();
		let address = $(element).attr("href");
		$(this.profileMenu[address]).addClass("active");
	}
	ProfileClearActive() {
		$('.profile-state').removeClass("active");
	}
	ClearActive() {
		$(".state").removeClass("active");
	}
}