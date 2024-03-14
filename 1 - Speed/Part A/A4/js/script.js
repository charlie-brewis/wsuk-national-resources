//Put your code here

const face = document.getElementById("face");
//! This is gross defining color in js but first animation didnt play otherwise
face.style.background = "yellow";
const happyButton = document.getElementById("happy");
const neutralButton = document.getElementById("neutral");
const sadButton = document.getElementById("sad");

const duration = 500; // ms

happyButton.addEventListener("click", () => {
  animateFace(face.style.background, "green");
  face.textContent = ":)";
});
neutralButton.addEventListener("click", () => {
  animateFace(face.style.background, "yellow");
  face.textContent = ":|";
});
sadButton.addEventListener("click", () => {
  animateFace(face.style.background, "red");
  face.textContent = ":(";
});

const animateFace = (currentColor, targetColor) => {
  face.animate(
    { background: [currentColor, targetColor] },
    { duration: duration, fill: "both" }
  );
  face.style.background = targetColor;
};
