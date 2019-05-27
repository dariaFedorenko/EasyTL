class Quick {
	Close() {
		this.quickClock.Stop();
	}
	End() {
		console.log('your score: ' + this.score);
	}
	NextQ() {
		this.currentQ++;
		$('#progress').html(this.currentQ + 1);
		$('.q-progress-bar').css({'width' : (this.currentQ + 1) / this.qList.length * 100 + '%'});
		$('.q-a').removeClass('passed');

		if (this.currentQ >= this.qList.length - 1) {
			$('.q-next span').html('Закончить тест<i class="fas fa-long-arrow-alt-right"></i>');
			$('.q-next').click(() => {
				this.End();
			});
			return;
		}
		$('#img > img').attr({src : this.qList[this.currentQ].initGif});
	}
	Check(button) {
		let answer = $(button).attr("id").substr(-1);
		this.qList[this.currentQ].isPassed = true;
		let gif = this.qList[this.currentQ].answers[answer].gif;
		$('#img > img').attr({src : gif});
		this.qList[this.currentQ].resultGif = gif;
		if (this.qList[this.currentQ].answers[answer].isCorrect) this.score++;
		$('.q-a').addClass('passed');
	}
	GenerateQList() {
		this.qList = [];
		for (let i = 0; i < 20; i++) this.qList.push(new Question(QUESTIONS[0]));
	}
	constructor() {
		this.quickClock = new Clock('.clock');
		this.GenerateQList();
		this.currentQ = 0;
		this.score = 0;
		$('#img').append("<img src='" + this.qList[0].initGif + "'>");
		$('#progress').html(this.currentQ + 1);
		$('#q-title').html(this.qList[this.currentQ].theme);
		$('#q-formulation').html(this.qList[this.currentQ].title);
		for (let i = 0; i < this.qList[this.currentQ].answers.length; i++) {
			$('#answer-' + i).addClass('active');
			$('#answer-' + i).html(this.qList[this.currentQ].answers[i].text);
		}

		$('.q-next').click(() => {
			this.NextQ();
		});
	}
}