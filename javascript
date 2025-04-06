const questions = [
    'What is the capital of France?',
    'What is 2 + 2?',
    'Name a primary colour.',
    'Who wrote Hamlet?',
    'What is the largest mammal?',
];

let currentQuestionIndex = 0;

function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').innerText = questions[currentQuestionIndex];
        currentQuestionIndex++;
    } else {
        document.getElementById('question').innerText = 'You have completed the 3/6/9 round!';
    }
}
