var question = document.getElementById('question');
var choices = Array.from(document.getElementsByClassName('choice-text'));

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
        question: "What is 1+1?",
        choice1: "32",
        choice2: "2",
        choice3: "4",
        choice4: "6",
        answer: 2

    },
    {
        question: "What is 1+1?",
        choice1: "32",
        choice2: "2",
        choice3: "4",
        choice4: "6",
        answer: 2

    },
    {
        question: "What is 1+1?",
        choice1: "32",
        choice2: "2",
        choice3: "4",
        choice4: "6",
        answer: 2
    },
    {
        question: "What is 1+1?",
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
    getNextQuestion();
}

function getNextQuestion() {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
}

startGame();