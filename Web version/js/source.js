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
const THEORY = [
	{
		theme: "Проверка",
		elements: [
			{
				wrapper: 'p',
				classes: 'topic-paragraph left',
				content: '<b>Это проверка.</b> Привет мир и тому подобное. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque enim quae laudantium minus magni, aspernatur tempore alias reprehenderit, repellat tempora, velit nobis nam non dignissimos veniam, dolorum amet nesciunt dicta!'
			},
			{
				wrapper: 'p',
				classes: 'topic-paragraph right',
				content: 'Это проверка. <i>Второй абзац.</i> Привет мир и тому подобное. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque enim quae laudantium minus magni, aspernatur tempore alias reprehenderit, repellat tempora, velit nobis nam non dignissimos veniam, dolorum amet nesciunt dicta!'
			},
			{
				wrapper: 'p',
				classes: 'topic-paragraph justify',
				content: 'Это проверка. Third абзац. Привет мир и тому подобное. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque enim quae laudantium minus magni, aspernatur tempore alias reprehenderit, repellat tempora, velit nobis nam non dignissimos veniam, dolorum amet nesciunt dicta!'
			},
			{
				wrapper: 'ul',
				classes: 'topic-list',
				content: [
					'Punct 1',
					'Punct 2',
					'Punct 3'
				]
			}
		]
	}
]
var userStatistic = {
	name: "User101",
	stars: "7",
	passedTopics: 0,
	questions: {
		correct: 1,
		total: 1
	},
	tests: {
		passed: 2,
		total: 5
	},
	averages: {
		correctAnswers: 10,
		time: 5
	}
}