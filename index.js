const questions = [
  {
    question: "What is the capital of india?",
    options: ["Mumbai", "Delhi", "Banglore", "Lucknow"],
    answer: 2 
  },
  {
    question: "In which year india got freedom?",
    options: ["1944", "1948", "1947", "1945"],
    answer: 3 
  },
  {
    question: "Who is the current prime minister of India?",
    options: ["Amit Shah", "Narendra Modi", "Rahul Gandhi", "Akhilesh"],
    answer: 2 
  },
  {
    question: "National flower of India?",
    options: ["Rose", "Lotus", "rose", "kfmrdkmf"],
    answer: 2 
  },
]

let currentQuestion = 0;
let userAnswers = Array(questions.length).fill(null);

function loadQuestion() {
  document.getElementById("question").innerText = questions[currentQuestion].question;
  const optionsElement = document.getElementById("options");
  optionsElement.innerHTML = "";

  questions[currentQuestion].options.forEach((option, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="radio" name="option" value="${index}" ${userAnswers[currentQuestion] === index ? "checked" : ""}> ${option}</label>`;
    optionsElement.appendChild(li);
  });

  document.querySelector(".btn-prev").style.display = currentQuestion === 0 ? "none" : "inline-block";
  document.querySelector(".btn-next").style.display = currentQuestion === questions.length - 1 ? "none" : "inline-block";
  document.querySelector(".btn-submit").style.display = currentQuestion === questions.length - 1 ? "inline-block" : "none";
}

function nextQuestion() {
  saveAnswer();
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
}

function prevQuestion() {
  saveAnswer();
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

function saveAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    userAnswers[currentQuestion] = parseInt(selectedOption.value);
  }
}

function submitQuiz() {
  saveAnswer();
  let score = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === questions[index].answer) {
      score++;
    }
  });

  const percentage = (score / questions.length) * 100;
  document.getElementById("score").innerText = `Your Score: ${percentage}%`;
  document.getElementById("quiz").style.display = "none";
}

loadQuestion();
