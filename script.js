const questions = [
    { question: "Other", answer: "100" },
    { question: "Narcotic", answer: "110" },
    { question: "Impersonating Officer", answer: "146" },
    { question: "Murder", answer: "187" },
    { question: "Kidnap", answer: "207" },
    { question: "Robbery", answer: "211" },
    { question: "Battery", answer: "242" },
    { question: "ADW", answer: "245" },
    { question: "Shots Fired", answer: "246" },
    { question: "Attack", answer: "261" },
    // Add the rest of the questions here...
];

let currentQuestionIndex = 0;
let incorrectAnswers = [];
let answeredQuestions = [];

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function loadQuestion() {
    const question = getRandomQuestion();
    document.getElementById('question').innerText = question.question;
    document.getElementById('answer-input').value = '';
    document.getElementById('message').innerText = '';
}

function submitAnswer() {
    const userAnswer = document.getElementById('answer-input').value.trim();
    const correctAnswer = questions.find(q => q.question === document.getElementById('question').innerText).answer;

    if (userAnswer === correctAnswer) {
        answeredQuestions.push(currentQuestionIndex);
        if (answeredQuestions.length === questions.length) {
            document.getElementById('message').innerText = "Congratulation! 🎉";
            showConfetti();
        } else {
            loadQuestion();
        }
    } else {
        incorrectAnswers.push(currentQuestionIndex);
        document.getElementById('message').innerText = "Incorrect! Try again.";
    }
}

function showConfetti() {
    // You can implement a confetti effect here (or just use emoji as a placeholder)
    document.getElementById('confetti').innerText = "🎉🎉🎉";
}

function resetQuiz() {
    currentQuestionIndex = 0;
    incorrectAnswers = [];
    answeredQuestions = [];
    loadQuestion();
    document.getElementById('incorrect-answers-list').style.display = 'none';
    document.getElementById('confetti').innerText = '';
}

function exitQuiz() {
    document.getElementById('exit-modal').style.display = 'flex';
}

function confirmExit() {
    window.close();
}

function closeModal() {
    document.getElementById('exit-modal').style.display = 'none';
}

function retryIncorrect() {
    document.getElementById('incorrect-answers-list').style.display = 'none';
    for (let i of incorrectAnswers) {
        // Show incorrect questions one by one for retry
        loadQuestion();
    }
}
