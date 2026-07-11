const left = document.getElementById("left");
const right = document.getElementById("right");
const stageone = document.getElementById("stageone");
const stagetwo = document.getElementById("stagetwo");
const stagethree = document.getElementById("stagethree");
const stagefour = document.getElementById("stagefour");
const buttons = document.getElementById("buttons");
let stage = 1;
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

left.addEventListener("click", leftclick);
right.addEventListener("click", rightclick);