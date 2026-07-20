console.log("Welcome! Seeing as you are reading the console, I think I should tell you some things.")
console.log("I only know basics of html, css, and JavaScript. Note that the alignment and size of elements in this website is designed for my scale.")
console.log("I have tried making it work for as many people as possible, but you may need to zoom out if something is covering something else.")
const left = document.getElementById("left");
const right = document.getElementById("right");
const stageone = document.getElementById("stageone");
const stagetwo = document.getElementById("stagetwo");
const stagethree = document.getElementById("stagethree");
const stagefour = document.getElementById("stagefour");
const buttons = document.getElementById("buttons");
const level_one = document.getElementById("level_one");
const level_two = document.getElementById("level_two");
const level_three = document.getElementById("level_three");
const completed_one = document.getElementById("completed_one");
const completed_two = document.getElementById("completed_two");
const completed_three = document.getElementById("completed_three");
let stage = 1;

if (!localStorage.getItem("level_one")) {
    localStorage.setItem("level_one", 0);
}
if (!localStorage.getItem("level_two")) {
    localStorage.setItem("level_two", 0);
}
if (!localStorage.getItem("level_three")) {
    localStorage.setItem("level_three", 0);
}
if (localStorage.getItem("level_one") == 1){
    level_one.style.backgroundColor = "#ace6bb";
}
if (localStorage.getItem("level_two") == 1){
    level_two.style.backgroundColor = "#ace6bb";
}
if (localStorage.getItem("level_three") == 1){
    level_three.style.backgroundColor = "#ace6bb";
}

stagetwo.style.display = "none";
stagethree.style.display = "none";
stagefour.style.display = "none";
function leftclick() {
    if (stage == 1) {
        stage = 2;
        stageone.style.display = "none";
        stagetwo.style.display = "block";
    }
    else if (stage == 2) {
        stagetwo.style.display = "none";
        stagefour.style.display = "block";
        buttons.style.display = "none";
        stage = 1
    }
}
function rightclick() {
    if (stage == 1) {
        stage = 3;
        stageone.style.display = "none";
        stagethree.style.display = "block";
        buttons.style.display = "none";
    }
    else if (stage == 2) {
        stage = 3;
        stagetwo.style.display = "none";
        stagethree.style.display = "block";
        buttons.style.display = "none";
    }
}

function completedFirst() {
  alert("First was completed!");
}
function completedSecond() {
  alert("Second was completed!");
}
function completedThird() {
  alert("Third was completed!");
}


completed_one.addEventListener("click", completedFirst);
completed_two.addEventListener("click", completedSecond);
completed_three.addEventListener("click", completedThird);
left.addEventListener("click", leftclick);
right.addEventListener("click", rightclick);