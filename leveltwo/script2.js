const left = document.getElementById("left");
const right = document.getElementById("right");
const stageone = document.getElementById("stageone");
const stagetwo = document.getElementById("stagetwo");
const stagethree = document.getElementById("stagethree");
const stagefour = document.getElementById("stagefour");
const buttons = document.getElementById("buttons");
let stage = 1;

if (buttons) {
    if (stagetwo) stagetwo.style.display = "none";
    if (stagethree) stagethree.style.display = "none";
    if (stagefour) stagefour.style.display = "none";
}

function leftclick() {
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

function rightclick() {
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

if (left) left.addEventListener("click", leftclick);
if (right) right.addEventListener("click", rightclick);

// Mark level two as completed when a successful "EXIT" link is clicked.
const completed_two = document.getElementById("completed_two");
if (completed_two) {
    completed_two.addEventListener("click", function () {
        localStorage.setItem("level_two", 1);
    });
}
