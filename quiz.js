const quizQuestions = [
	{
		question: "What is the capital of France?",
		answers: [
			{ answer: "Paris", correct: true },
			{ answer: "Berlin", correct: false },
			{ answer: "Madrid", correct: false },
			{ answer: "London", correct: false }
		]
	},
	{
		question: "What is the tallest mountain in the world?",
		answers: [
			{ answer: "Mount Everest", correct: true },
			{ answer: "K2", correct: false },
			{ answer: "Kilimanjaro", correct: false },
			{ answer: "Denali", correct: false }
		]
	},
	{
		question: "Which planet is closest to the sun?",
		answers: [
			{ answer: "Earth", correct: false },
			{ answer: "Jupiter", correct: false },
			{ answer: "Venus", correct: true },
			{ answer: "Saturn", correct: false }
		]
	},
	{
		question: "Who painted the Mona Lisa?",
		answers: [
			{ answer: "Leonardo da Vinci", correct: true },
			{ answer: "Michelangelo", correct: false },
			{ answer: "Pablo Picasso", correct: false },
			{ answer: "Vincent van Gogh", correct: false }
		]
	},
	{
		question: "What is the largest mammal in the world?",
		answers: [
			{ answer: "Blue whale", correct: true },
			{ answer: "Elephant", correct: false },
			{ answer: "Hippopotamus", correct: false },
			{ answer: "Rhinoceros", correct: false }
		]
	},
	{
		question: "Who wrote the novel 'To Kill a Mockingbird'?",
		answers: [
			{ answer: "Ernest Hemingway", correct: false },
			{ answer: "F. Scott Fitzgerald", correct: false },
			{ answer: "Harper Lee", correct: true },
			{ answer: "William Faulkner", correct: false }
		]
	},
	{
		question: "Which country is the largest by area?",
		answers: [
			{ answer: "China", correct: false },
			{ answer: "Russia", correct: true },
			{ answer: "United States", correct: false },
			{ answer: "Brazil", correct: false }
		]
	},
	{
		question: "What is the smallest continent by land area?",
		answers: [
			{ answer: "Africa", correct: false },
			{ answer: "Asia", correct: false },
			{ answer: "Australia", correct: true },
			{ answer: "Europe", correct: false }
		]
	},
	{
		question: "Which scientist proposed the theory of relativity?",
		answers: [
			{ answer: "Isaac Newton", correct: false },
			{ answer: "Albert Einstein", correct: true },
			{ answer: "Galileo Galilei", correct: false },
			{ answer: "Stephen Hawking", correct: false }
		]
	},
	{
		question: "Who is the author of the Harry Potter book series?",
		answers: [
			{ answer: "J.K. Rowling", correct: true },
			{ answer: "Stephenie Meyer", correct: false },
			{ answer: "Suzanne Collins", correct: false },
			{ answer: "George R.R. Martin", correct: false }
		]
	}
];

const quizContainer = document.getElementById('quiz-container');
const scoreContainer = document.getElementById('score-container');
const popup = document.getElementById('popup');
const popupQuestion = popup.querySelector('.question');
const popupAnswers = popup.querySelector('.answers');
const popupNextBtn = popup.querySelector('.next-btn');
const popupSkipBtn = popup.querySelector('.skip-btn');


let currentQuestionIndex = 0;
let score = 0;

// Display the first question popup when the quiz starts
showPopup();

popupNextBtn.addEventListener('click', () => {
	let selected = popupAnswers.querySelector('input[type="radio"]:checked');
	if (selected) {
		let answer = selected.value;
		let correct = quizQuestions[currentQuestionIndex].answers.find(a => a.answer === answer).correct;
		if (correct) {
			score++;
		}
		currentQuestionIndex++;
		if (currentQuestionIndex < quizQuestions.length) {
			showPopup();
		} else {
			showReportCard();
		}
	} else {
		alert('Please select an answer before moving to the next question!');
	}
});

popupSkipBtn.addEventListener('click', () => {
	currentQuestionIndex++;
	if (currentQuestionIndex < quizQuestions.length) {
		showPopup();
	} else {
		showReportCard();
	}
});

function showPopup() {
	let currentQuestion = quizQuestions[currentQuestionIndex];
	popupQuestion.textContent = currentQuestion.question;
	popupAnswers.innerHTML = '';
	currentQuestion.answers.forEach((answer) => {
		let label = document.createElement('label');
		let input = document.createElement('input');
		input.setAttribute('type', 'radio');
		input.setAttribute('name', 'answer');
		input.setAttribute('value', answer.answer);
		label.appendChild(input);
		label.append(' ' + answer.answer);
		popupAnswers.appendChild(label);
	});
	popup.style.display = 'block';
}

function showReportCard() {
	quizContainer.style.display = 'none';
	scoreContainer.style.display = 'block';
	let reportCard = '<h1>Report Card</h1>';
	reportCard += '<p>Your score is: ' + score + ' out of ' + quizQuestions.length + '</p>';
	scoreContainer.innerHTML = reportCard;
}
