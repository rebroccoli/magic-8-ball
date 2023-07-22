const button = document.getElementById("submitButton");
const responses = ["yes!", "maybe...", "absolutely not!", "probably?", "nope.", "without a doubt!"];
const ball = document.getElementById("stillBall");
const result = document.getElementById("result");

button.onclick = function () {
  if (document.getElementById("question").value == "") {
    result.innerHTML = "no question asked, try again";
  } else {
    animateBall();
    // use arrow function since setTimeout requires a function w/ no parameters
    setTimeout(() => {
      pickResponse();
    }, 1100);
  }
};

function pickResponse() {
  // ball is finished shaking, make still again
  ball.src = "images/still-ball.png";
  // randomly pick a response to display in button HTML
  result.innerHTML = responses[Math.floor(Math.random() * responses.length)];
}

function animateBall() {
  // begin shaking ball
  ball.src = "images/ball-shake.gif";
  result.innerHTML = "generating...";
}
