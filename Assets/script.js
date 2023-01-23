var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);
let currentQuestion = {};
let acceptingAnswers = true;
let secondsLeft = 5;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let timeEl = document.getElementById("timer");
let choiceEl = document.getElementById("correct");

let questions = [
  {
    question: "What is 1+1?",
    choice1: "32",
    choice2: "2",
    choice3: "4",
    choice4: "6",
    answer: 2,
  },
  {
    question: "What is 2+1?",
    choice1: "32",
    choice2: "2",
    choice3: "4",
    choice4: "6",
    answer: 2,
  },
  {
    question: "What is 3+1?",
    choice1: "32",
    choice2: "2",
    choice3: "4",
    choice4: "6",
    answer: 2,
  },
  {
    question: "What is 4+1?",
    choice1: "32",
    choice2: "2",
    choice3: "4",
    choice4: "6",
    answer: 2,
  },
  {
    question: "What is 5+1?",
    choice1: "32",
    choice2: "2",
    choice3: "4",
    choice4: "6",
    answer: 2,
  },
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNextQuestion();
  setTime();
}

function getNextQuestion() {
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  // Assigns the options choices to the page
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
}

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;
    console.log(e.target);
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswers = selectedChoice.dataset["number"];

    // learned the += and -= from freecodecamp.org
    console.log(selectedAnswers == currentQuestion.answer);
    if (selectedAnswers == currentQuestion.answer) {
      secondsLeft += 5;
      selectedChoice.parentElement.classList.add("correct-answer");

      setTimeout(() => {
        selectedChoice.parentElement.classList.remove("correct-answer");

        getNextQuestion();
      }, 1000);
    } else {
      secondsLeft -= 5;
      selectedChoice.parentElement.classList.add("wrong-answer");

      setTimeout(() => {
        selectedChoice.parentElement.classList.remove("wrong-answer");

        getNextQuestion();
      }, 1000);
    }
  });
});

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.innerHTML = "⏲" + secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      document.location.replace('./highscores.html')
      // Calls function to create and append image
    }
  }, 1000);
}

startGame();
