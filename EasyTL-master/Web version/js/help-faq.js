class HelpFAQ {
	faq = [
		{
			topic: "what",
			answer: "it"
		},
		{
			topic: "which",
			answer: "this"
		},
		{
			topic: "why",
			answer: "because"
		}
	]
	constructor(identifier) {
		for (let i = 0; i < this.faq.length; i++) {
			$(identifier).append(this.GetP(this.faq[i].topic));
		}
	}
	GetP(context) {
		return "<p>" + context + "</p>";
	}
}