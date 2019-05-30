class Quick {
	Close() {
		this.quickClock.Stop();
		$('.q-a').off();
		$('.quick').removeClass('active');
		$('.main-menu').addClass('active');
		$('#img').empty();
		$('.clock').empty();
	}
	End() {
		$('.q-a').off().removeClass('active');
		this.quickClock.Stop();
		$('.clock').empty();
		$('#q-title').html('Результат');
		$('.progress').hide();
		$('#q-formulation').html('');
		$('#img').empty();
		$('.q-progress-bar').css({'width' : '100%'});
		$('.q-prev').hide();
		$('.q-next span').html('Выйти в меню<i class="fas fa-long-arrow-alt-right"></i>');
		$('.q-next').click(() => {
			$('.q-progress-bar').css({'width' : '0%'});
			$('.quick').removeClass('active');
			$('.main-menu').addClass('active');
		})
		
		console.log('your score: ' + this.score);
	}
	PrevQ() {
		if (this.currentQ == this.qList.length - 1) {
			$('.q-next span').html('Следующий вопрос<i class="fas fa-long-arrow-alt-right"></i>');
			$('.q-next').off().click(() => {
				this.NextQ();
			});
		}
		if (this.currentQ == 1) {
			$('.q-prev span').html('<i class="fas fa-long-arrow-alt-left"></i>Выйти в меню');
			$('.q-prev').off().click(() => {
				this.Close();
			});
		}
		this.currentQ--;

		$('#progress').html(this.currentQ + 1);
		$('.q-progress-bar').css({'width' : this.currentQ / this.qList.length * 100 + '%'});
		$('.q-a').removeClass('passed');

		if (this.qList[this.currentQ].isPassed) {
			$('.q-a').addClass('passed');
			$('#img > img').attr({src : this.qList[this.currentQ].resultGif});
		} else 
			$('#img > img').attr({src : this.qList[this.currentQ].initGif});
	}
	NextQ() {
		if (this.currentQ == 0) {
			$('.q-prev span').html('<i class="fas fa-long-arrow-alt-left"></i>Предыдущий вопрос');
			$('.q-prev').off().click(() => {
				this.PrevQ();
			});
		}
		this.currentQ++;
		$('#progress').html(this.currentQ + 1);
		$('.q-progress-bar').css({'width' : this.currentQ / this.qList.length * 100 + '%'});
		$('.q-a').removeClass('passed');

		if (this.currentQ >= this.qList.length - 1) {
			$('.q-next span').html('Закончить тест<i class="fas fa-long-arrow-alt-right"></i>');
			$('.q-next').off().click(() => {
				this.End();
			});
		}
		if (this.qList[this.currentQ].isPassed) {
			$('.q-a').addClass('passed');
			$('#img > img').attr({src : this.qList[this.currentQ].resultGif});
		} else 
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
		$('.progress').show();
		$('#img').append("<img src='" + this.qList[0].initGif + "'>");
		$('#progress').html(this.currentQ + 1);
		$('#q-title').html(this.qList[this.currentQ].theme);
		$('#q-formulation').html(this.qList[this.currentQ].title);
		$('.q-prev').show();
		$('.q-next span').html('Следующий вопрос<i class="fas fa-long-arrow-alt-right"></i>')
		for (let i = 0; i < this.qList[this.currentQ].answers.length; i++) {
			$('#answer-' + i).addClass('active');
			$('#answer-' + i).html(this.qList[this.currentQ].answers[i].text);
		}
		$('.q-prev span').html('<i class="fas fa-long-arrow-alt-left"></i>Выйти в меню');
		$('.q-prev').off().click(() => {
			this.Close();
		});
		$('.q-next').off().click(() => {
			this.NextQ();
		});

	}
}