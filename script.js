const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on the 18th!";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// for mobile
const wrappermb = document.querySelector(".wrapper");
const questionmb = document.querySelector(".question");
const gifmb = document.querySelector(".gif");
const yesBtnmb = document.querySelector(".yes-btn");
const noBtnmb= document.querySelector(".no-btn");

yesBtnmb.addEventListener("click", () => {
  questionmb.innerHTML = "Yay, see you on the 18th!";
  gifmb.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtnmb.addEventListener("click", () => {
  moveNoButton();
});

function moveNoButton() {
  const noBtnRect = noBtnmb.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtnmb.style.left = randomX + "px";
  noBtnmb.style.top = randomY + "px";
}

// Handle mobile-specific adjustments
function handleMobile() {
  // Example: Adjusting button positions or other mobile-specific logic
  if (window.innerWidth <= 600) {
    noBtnmb.style.position = "relative"; // or "static" depending on your design
    noBtnmb.style.left = "0";
    noBtnmb.style.top = "0";
  }
}

// Initial call to handle mobile adjustments
handleMobile();

// Listen for window resize to adapt to changes
window.addEventListener("resize", handleMobile);
