let CurrentText = document.querySelector(".name > h1");
let CurrentIndex = 0;
const initialText = " ThankGod Munachimso Agu 🐱‍👤";

function Typewriter() {
  if (CurrentIndex < initialText.length) {
    CurrentText.textContent += initialText[CurrentIndex];
    CurrentIndex++;
    setTimeout(Typewriter, 1200);
  }
}

Typewriter();

document.addEventListener("DOMContentLoaded", Typewriter);



