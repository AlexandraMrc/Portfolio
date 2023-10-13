const quizQuestions = [
  {
    question: "Cate planete are Sistemul Solar?",
    options: ["10", "9", "8", "11"],
    correct: "c",
  },
  {
    question: "Ce planeta este numita planeta rosie?",
    options: ["Mercur", "Marte", "Uranus", "Neptun"],
    correct: "b",
  },
  {
    question:
      "Care este singura planeta care se invarte invers in jurul soarelui?",
    options: ["Venus", "Jupiter", "Saturn", "Pamant"],
    correct: "a",
  },
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");
const showAnswerButton = document.getElementById("showAnswer");

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = 0;

function displayQuestion() {
  const questionsData = quizQuestions[currentQuestion];

  const questionElement = document.createElement("div");
  questionElement.className = "question";
  questionElement.innerHTML = questionsData.question;
}
