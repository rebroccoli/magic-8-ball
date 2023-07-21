const button = document.getElementById("submitButton");
button.onclick = function () {
  generateResponse();
};

async function generateResponse() {
  const responses = ["yes!", "maybe", "absolutely not!", "probably..."];
  document.getElementById("result").innerHTML = responses[Math.floor(Math.random() * responses.length)];
}

// document.addEventListener("DOMContentLoaded", function () {
//   // makes button and listens for the click
//   var button = document.getElementById("submitButton");

//   button.addEventListener("click", function () {
//     // randomly selects a response
//   });
// });
