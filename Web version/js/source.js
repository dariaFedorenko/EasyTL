const QUESTIONS = [
	{
		theme: "Обгон",
		title: "Разрешен ли обгон водителю красного автомобиля в этой ситуации?",
		initGif: "source/theme-2/q1.gif",
		answers: [
			{
				gif: "source/theme-2/q1-a1.gif",
				text: "Разрешен",
				isCorrect: false
			},
			{
				gif: "source/theme-2/q1-a2.gif",
				text: "Запрещен",
				isCorrect: true
			}
		]
	},
	{
		theme: "Обгон",
		title: "Разрешено ли водителю белого автомобиля выполнить обгон в этой ситуации?",
		initGif: "source/theme-2/q2.gif",
		answers: [
			{
				gif: "source/theme-2/q2-a1.gif",
				text: "Разрешен",
				isCorrect: false
			},
			{
				gif: "source/theme-2/q2-a2.gif",
				text: "Запрещен",
				isCorrect: true
			}
		]
	}
];

var userStatistic = {
	name: "User101",
	stars: "7",
	questions: {
		correct: 1,
		total: 1
	},
	tests: {
		passed: 2,
		total: 3
	},
	averages: {
		correctAnswers: 13,
		time: 5
	}
}