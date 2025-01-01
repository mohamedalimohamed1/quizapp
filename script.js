// Updated script.js with modernized functionality
import { allQuestions } from "./question.js";

let questions = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let quizMode = '';
let answered = new Map(); // Track if a question has been answered and its correctness

// Shuffle function to pick random questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Get the question range from input
function getRange() {
    const rangeInput = document.getElementById("question-range").value;
    const [start, end] = rangeInput.split("-").map(Number);

    if (start && end && start > 0 && end <= allQuestions.length && start <= end) {
        return [start, end];
    } else {
        alert("Lütfen geçerli bir aralık giriniz (örneğin 11-20)!");
        return null;
    }
}

// Start the quiz with chosen mode or selected range
function startQuiz(mode, range = null) {
    quizMode = mode;
    correctCount = 0;
    incorrectCount = 0;
    currentQuestionIndex = 0;
    answered.clear();

    if (mode === 'all') {
        questions = allQuestions;
    } else if (mode === 'random') {
        questions = [...allQuestions];
        shuffleArray(questions);
        questions = questions.slice(0, 20);
    } else if (mode === 'range' && range) {
        const [start, end] = range;
        questions = allQuestions.slice(start - 1, end);
    }

    document.getElementById("intro-text").style.display = "none";
    document.getElementById("mode-selection").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    showQuestion();
}

// Make functions globally accessible
window.startQuiz = startQuiz;
window.getRange = getRange;
window.resetQuiz = resetQuiz;

// Display the current question
function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = "";

    const questionElement = document.createElement("p");
    questionElement.innerText = `Soru ${questions[currentQuestionIndex].number}: ${questions[currentQuestionIndex].question}`;
    questionElement.classList.add("modern-question");
    questionContainer.appendChild(questionElement);

    // Display options if the question hasn't been answered
    if (!answered.has(currentQuestionIndex)) {
        questions[currentQuestionIndex].options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option;
            button.classList.add("modern-button");
            button.onclick = () => selectAnswer(button, option);
            questionContainer.appendChild(button);
        });
    } else {
        // Highlight the correct answer for already answered questions
        const correctAnswer = questions[currentQuestionIndex].answer;
        questions[currentQuestionIndex].options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option;
            button.classList.add(option === correctAnswer ? "correct" : "disabled");
            button.disabled = true;
            questionContainer.appendChild(button);
        });
    }

    // Add navigation buttons
    const navContainer = document.createElement("div");
    navContainer.classList.add("nav-container");

    const prevButton = document.createElement("button");
    prevButton.innerText = "Önceki Soru";
    prevButton.classList.add("modern-nav-button");
    prevButton.onclick = goToPreviousQuestion;
    prevButton.disabled = currentQuestionIndex === 0;
    navContainer.appendChild(prevButton);

    const nextButton = document.createElement("button");
    nextButton.innerText = "Sonraki Soru";
    nextButton.classList.add("modern-nav-button");
    nextButton.onclick = goToNextQuestion;
    navContainer.appendChild(nextButton);

    questionContainer.appendChild(navContainer);
}

// Navigate to the previous question
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// Navigate to the next question
function goToNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResults();
    }
}

// Handle answer selection
function selectAnswer(button, selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const answerMessage = document.getElementById("answer-message");

    if (selectedOption === correctAnswer) {
        correctCount++;
        answerMessage.innerText = "Doğru!";
        answerMessage.className = "correct";
    } else {
        incorrectCount++;
        answerMessage.innerText = "Yanlış!";
        answerMessage.className = "incorrect";
        button.classList.add("incorrect");
    }

    answered.set(currentQuestionIndex, selectedOption === correctAnswer);

    setTimeout(() => {
        answerMessage.innerText = "";
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

// Show final results
function showResults() {
    const questionContainer = document.getElementById("question-container");
    let score = (correctCount / questions.length) * 100;

    questionContainer.innerHTML = `
        <h2 class="modern-results-title">Sonuçlar</h2>
        <p class="modern-results">Doğru: ${correctCount}</p>
        <p class="modern-results">Yanlış: ${incorrectCount}</p>
        <p class="modern-results">Puan: ${score.toFixed(2)} / 100</p>
        <button onclick="resetQuiz()" class="modern-button">Giriş Sayfasına Git</button>
    `;
}

// Reset quiz and show intro page
function resetQuiz() {
    document.getElementById("intro-text").style.display = "block";
    document.getElementById("mode-selection").style.display = "block";
    document.getElementById("question-container").style.display = "none";
    document.getElementById("answer-message").innerText = "";
    questions = [];
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    answered.clear();
}

// Initialize with the mode selection view
document.getElementById("question-container").style.display = "none";
document.getElementById("answer-message").style.display = "block";
