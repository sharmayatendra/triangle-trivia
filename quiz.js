const quizForm = document.querySelector("#quiz-form");
const submitButton = document.querySelector("#submit-btn");
const outputDiv = document.querySelector("#output-div");


const correctAnswers = ['90°', 'right angle triangle', 'equilateral triangle', 'isosceles triangle', '12cm', "Heron's formula", '4cm'];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResult = new FormData(quizForm);
    for(let value of formResult.values()) {
        if(value === correctAnswers[index]) {
            score = score + 1;
        } 
            index = index + 1;
    }
    outputDiv.innerText = "Your score is " + score;
}

submitButton.addEventListener("click", calculateScore)

