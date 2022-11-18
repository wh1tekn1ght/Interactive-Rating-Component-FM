const ratingNumbers = document.querySelectorAll(".rating-values");
const button = document.querySelector(".primary-button");
const ratingContainer = document.querySelector(".rating-container");
const feedbackContainer = document.querySelector(".feedback-container");
const score = document.querySelector('#score');
let value;

ratingNumbers.forEach((element) => {
  element.addEventListener("click", () => {
     ratingNumbers.forEach((element) => {
       element.classList.remove("clicked");
     });
     element.classList.add("clicked");
     value = element.innerText;
  });
});


button.addEventListener("click", function () {
  score.innerText = value;
  ratingContainer.classList.add("inactive");
  feedbackContainer.classList.remove("inactive");
});
