var question = document.getElementById('question');
var choices = Array.from(document.getElementsByClassName('choice-text'));
console.log(choices);
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [
    {
        question: "What is 1+1?",
        choice1: "32",
        choice2: "2",
        choice3: "4",
        choice4: "6",
        answer: 2

    },
    {
        question: "What is 2+1?",
        choice1: "32",
        choice2: "2",
        choice3: "4",
        choice4: "6",
        answer: 2

    },
    {
        question: "What is 3+1?",
        choice1: "32",
        choice2: "2",
        choice3: "4",
        choice4: "6",
        answer: 2

    },
    {
        question: "What is 4+1?",
        choice1: "32",
        choice2: "2",
        choice3: "4",
        choice4: "6",
        answer: 2
    },
    {
        question: "What is 5+1?",
        choice1: "32",
        choice2: "2",
        choice3: "4",
        choice4: "6",
        answer: 2
    }
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ... questions];
    console.log(availableQuestions);
    getNextQuestion();
}

function getNextQuestion() {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;
        console.log(e.target);
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswers = selectedChoice.dataset["number"];

        console.log(selectedAnswers);


        getNextQuestion();
    });
});

startGame();