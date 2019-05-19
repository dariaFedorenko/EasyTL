class Quick {
	Close() {
		this.quickClock.Stop();
	}
	Check(button) {
		let answer = $(button).attr("id").substr(-1);
		if (this.q.answers[answer].isCorrect) {
			this.score++;
			console.log(this.score);
		}
	}
	constructor() {
		this.quickClock = new Clock('.clock');
		this.q = new Question(QUESTIONS[0]);
		this.currentQ = 0;
		this.score = 0;
		$('#img').append("<img src='" + this.q.initGif + "'>");
		$('#progress').html(this.currentQ + 1);
		$('#q-title').html(this.q.theme);
		$('#q-formulation').html(this.q.title);
		for (let i = 0; i < this.q.answers.length; i++) {
			$('#answer-' + i).addClass('active');
			$('#answer-' + i).html(this.q.answers[i].text);
		}
	}
}