const anglesOfTriangle = document.querySelectorAll(".angles-of-triangle");
const isTriangleButton = document.querySelector("#is-triangle");
const outputDiv = document.querySelector("#output-div");

function calculateSumOfAngles(angle1, angle2, angle3) {
   const sumOfAngles = angle1 + angle2 + angle3;
   return sumOfAngles;
} 

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(anglesOfTriangle[0].value), Number(anglesOfTriangle[1].value), Number(anglesOfTriangle[2].value))
    if(sumOfAngles === 180) {
        outputDiv.innerText = "Angles form a triangle";
    } 
    else {
    outputDiv.innerText = "Not a triangle";
    }
}

isTriangleButton.addEventListener("click", isTriangle)