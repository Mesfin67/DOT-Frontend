let count = 0;

const counterDisplay = document.getElementById("counter");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
  count++;
  updateCounter();
});

decreaseButton.addEventListener("click", () => {
  count--;
  updateCounter();
});

function updateCounter() {
  counterDisplay.textContent = count;
}
