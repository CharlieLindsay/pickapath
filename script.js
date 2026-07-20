// Welcome person looking at my script, well, to my script!
// All my constant variables being set
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
if (level_one && localStorage.getItem("level_one") == 1) {
    level_one.style.backgroundColor = "#ace6bb";
}
if (level_two && localStorage.getItem("level_two") == 1) {
    level_two.style.backgroundColor = "#ace6bb";
}
if (level_three && localStorage.getItem("level_three") == 1) {
    level_three.style.backgroundColor = "#ace6bb";
}

if (buttons) {
    if (stagetwo) stagetwo.style.display = "none";
    if (stagethree) stagethree.style.display = "none";
    if (stagefour) stagefour.style.display = "none";
}

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

if (left) left.addEventListener("click", leftclick);
if (right) right.addEventListener("click", rightclick);

// Mark level as completed (colours the button on the menu) when a
// successful "EXIT" link is clicked. Only the winning endings have
// id="completed_one" on their exit link/button - failed endings don't,
// so they never mark the level as complete.
const completed_one = document.getElementById("completed_one");
if (completed_one) {
    completed_one.addEventListener("click", function () {
        localStorage.setItem("level_one", 1);
    });
}
