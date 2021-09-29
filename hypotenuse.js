const sideInput = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputDiv = document.querySelector("#output-div");

function calculateSumOfSquare(side1, side2) {
    const sumOfSquares = side1**2 + side2**2;
    return sumOfSquares;

}

function calculateHypotenuse() {
    if(Number(sideInput[0].value) === "" || Number(sideInput[1].value === "")) {
        outputDiv.innerText = "please enter the sides to calculate hypotenuse!"
    }
    else if(Number(sideInput[0].value) < 0 || Number(sideInput[1].value < 0)) {
        outputDiv.innerText = "please enter the valid input!";
    } else {
        const sumOfSquares = calculateSumOfSquare(Number(sideInput[0].value), Number(sideInput[1].value));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        outputDiv.innerText = "Hypotenuse length is " + lengthOfHypotenuse;
    }   
}
    
hypotenuseBtn.addEventListener('click', calculateHypotenuse)