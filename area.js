const sides = document.querySelectorAll(".side-input");
const calculateAreaBtn = document.querySelector("#area-btn");
const outputDiv = document.querySelector("#output-div");

function calculateArea() {
    if(Number(sides[0].value) <= 0 || Number(sides[1].value <= 0)){
        outputDiv.innerText = "please enter valid side length!";
    }else {
        const area = 1/2 * Number(sides[0].value) * Number(sides[1].value);
        outputDiv.innerText = "area of triangle is " + area;
    }
}

calculateAreaBtn.addEventListener('click', calculateArea);