const circles = document.querySelectorAll(".selection-screen .circle");
const selectionScreen = document.querySelector(".selection-screen");
const resultScreen = document.querySelector(".result-screen");
const userPicked = document.querySelector(".you-picked .circle");
const housePicked = document.querySelector(".house-picked div");
const result = document.querySelector(".result-message");
const resultSpan = document.querySelector(".result-message span");
const playAgain = document.querySelector(".result-message button");
const score = document.querySelector(".score .your-score");
const closeModal = document.querySelector(".modal header .close");

const rulesButton = document.querySelector("footer button");
const modal = document.querySelector(".modal");

const arr = ["paper", "scissors", "rock"];
const rules = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

let gameScore = Number.parseInt(localStorage.getItem("score")) || 0;
score.textContent = gameScore;

circles.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    const yourPicked = e.target.getAttribute("aria-label");
    selectionScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    userPicked.className = "circle";
    userPicked.classList.add(yourPicked);

    const random = Math.floor(Math.random() * 3);
    setTimeout(() => {
      housePicked.className = "circle";
      housePicked.style.opacity = "1";
      housePicked.classList.add(arr[random]);
    }, 1000);

    if (rules[yourPicked] === arr[random]) {
      setTimeout(() => {
        result.style.opacity = "1";
        resultSpan.textContent = "You Win";
        userPicked.classList.add("winner");
        gameScore += 1;
        localStorage.setItem("score", gameScore);

        score.textContent = gameScore;
      }, 2000);
    } else if (rules[arr[random]] === yourPicked) {
      setTimeout(() => {
        result.style.opacity = "1";
        resultSpan.textContent = "You Lose";
        housePicked.classList.add("winner");
        gameScore -= 1;
        localStorage.setItem("score", gameScore);
        score.textContent = gameScore;
      }, 2000);
    } else {
      setTimeout(() => {
        result.style.opacity = "1";
        resultSpan.textContent = "Draw";
        score.textContent = gameScore;
      }, 2000);
    }
  });
});

playAgain.addEventListener("click", () => {
  selectionScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");
  result.style.opacity = "0";
  userPicked.className = "circle";
  housePicked.className = "hidden-circle";
});

rulesButton.addEventListener("click", (e) => {
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", (e) => {
  modal.classList.add("hidden");
});
