const anglesOfTriangle = document.querySelectorAll(".angles-of-triangle");
const isTriangleButton = document.querySelector("#is-triangle");
const outputDiv = document.querySelector("#output-div");

function calculateSumOfAngles(angle1, angle2, angle3) {
   const sumOfAngles = (angle1 + angle2 + angle3);
   return sumOfAngles;
} 

function isTriangle() {
    if(Number(anglesOfTriangle[0].value) > 0 && Number(anglesOfTriangle[1].value) > 0 && Number(anglesOfTriangle[2].value) > 0 && Number(anglesOfTriangle[0].value) != 0 && Number(anglesOfTriangle[1].value) != 0 && Number(anglesOfTriangle[2].value) != 0) {
        const sumOfAngles = calculateSumOfAngles(Number(anglesOfTriangle[0].value), Number(anglesOfTriangle[1].value), Number(anglesOfTriangle[2].value))
        if(sumOfAngles === 180) {
            outputDiv.innerText = "Angles form a triangle";
        } else {
            outputDiv.innerText = "Not a triangle";
            }
    }
    else {
        outputDiv.innerText = "plz enter valid input";
        }
}

isTriangleButton.addEventListener("click", isTriangle)