const inputOne = document.querySelector("#one");
const inputTwo = document.querySelector("#two");
const inputThree = document.querySelector("#three");
const inputFour = document.querySelector("#four");
const inputFive = document.querySelector("#five");
const button = document.querySelector(".primary-button");
const ratingContainer = document.querySelector(".rating-container");
const feedbackContainer = document.querySelector(".feedback-container");
const score = document.querySelector('#score');
let value;

inputOne.addEventListener('click', checkedToggle);
inputTwo.addEventListener('click', checkedToggle2);
inputThree.addEventListener('click', checkedToggle3);
inputFour.addEventListener('click', checkedToggle4);
inputFive.addEventListener('click', checkedToggle5);

function checkedToggle() {
  inputOne.classList.toggle('clicked');
  inputTwo.classList.remove('clicked');
  inputThree.classList.remove('clicked');
  inputFour.classList.remove('clicked');
  inputFive.classList.remove('clicked');
  value = 1;
}

function checkedToggle2() {
  inputTwo.classList.toggle('clicked');
  inputOne.classList.remove('clicked');
  inputThree.classList.remove('clicked');
  inputFour.classList.remove('clicked');
  inputFive.classList.remove('clicked');
  value = 2;
}


function checkedToggle3() {
  inputThree.classList.toggle('clicked');
  inputOne.classList.remove('clicked');
  inputTwo.classList.remove('clicked');
  inputFour.classList.remove('clicked');
  inputFive.classList.remove('clicked');
  value = 3;
}


function checkedToggle4() {
  inputFour.classList.toggle('clicked');
  inputOne.classList.remove('clicked');
  inputTwo.classList.remove('clicked');
  inputThree.classList.remove('clicked');
  inputFive.classList.remove('clicked');
  value = 4;
}

function checkedToggle5() {
  inputFive.classList.toggle('clicked');
  inputOne.classList.remove('clicked');
  inputTwo.classList.remove('clicked');
  inputThree.classList.remove('clicked');
  inputFour.classList.remove('clicked');
  value = 5;
}

button.addEventListener('click', showFeedback);

function showFeedback() {
  score.innerText = value;
  ratingContainer.classList.add('inactive');
  feedbackContainer.classList.remove('inactive');
}