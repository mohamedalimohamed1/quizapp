import { allQuestions } from "./question.js";

let questions = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let quizMode = '';

// Shuffle function to pick random questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Start the quiz with chosen mode
function startQuiz(mode) {
    quizMode = mode;
    correctCount = 0;
    incorrectCount = 0;
    currentQuestionIndex = 0;

    // Select questions based on the chosen mode
    if (mode === 'all') {
        questions = allQuestions;
    } else if (mode === 'random') {
        questions = [...allQuestions];
        shuffleArray(questions);
        questions = questions.slice(0, 25);
    }

    // Hide the guide text and mode selection
    document.getElementById("intro-text").style.display = "none";
    document.getElementById("mode-selection").style.display = "none";
    document.getElementById("question-container").style.display = "block";

    showQuestion();
}

// Make startQuiz globally accessible
window.startQuiz = startQuiz;

// Display the current question
function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = "";

    const questionElement = document.createElement("p");
    questionElement.innerText = `Soru ${questions[currentQuestionIndex].number}: ${questions[currentQuestionIndex].question}`;
    questionContainer.appendChild(questionElement);

    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => selectAnswer(button, option);
        questionContainer.appendChild(button);
    });
}

// Rest of the script remains unchanged...

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

        // Highlight the correct answer button
        highlightCorrectAnswer();
    }

    // Delay before moving to the next question to show the answer message
    setTimeout(() => {
        answerMessage.innerText = "";
        button.classList.remove("incorrect");

        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            showResults();
        }
    }, 1000); // 1 second delay to display feedback
}

// Highlight the correct answer for incorrect attempts
function highlightCorrectAnswer() {
    const buttons = document.querySelectorAll("#question-container button");
    buttons.forEach(btn => {
        if (btn.innerText === questions[currentQuestionIndex].answer) {
            btn.classList.add("correct"); // Highlight the correct answer
        }
    });
}

// Show final results with a "Giriş Sayfasına Git" button
function showResults() {
    const questionContainer = document.getElementById("question-container");
    let score = correctCount;

    if (quizMode === 'random') {
        score = (correctCount / 25) * 100; // Scale score to 100 points
    }

    questionContainer.innerHTML = `
        <h2>Sonuçlar</h2>
        <p>Doğru: ${correctCount}</p>
        <p>Yanlış: ${incorrectCount}</p>
        <p>Puan: ${quizMode === 'random' ? score.toFixed(2) + " / 100" : correctCount + " / " + questions.length}</p>
        <button onclick="resetQuiz()">Giriş Sayfasına Git</button>
    `;
}

// Reset quiz and show intro page
function resetQuiz() {
    document.getElementById("intro-text").style.display = "block";
    document.getElementById("mode-selection").style.display = "block";
    document.getElementById("question-container").style.display = "none";
    document.getElementById("answer-message").innerText = "";
}

// Initialize with the mode selection view
document.getElementById("question-container").style.display = "none";
document.getElementById("answer-message").style.display = "block";