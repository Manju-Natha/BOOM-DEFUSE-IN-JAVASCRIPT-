let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");

let counter = 10;

let timerId = setInterval(function () {
  counter = counter - 1;
  timerEl.textContent = counter;
  if (counter === 0) {
    timerEl.textContent = "BOOM";
    clearInterval(timerId);
  }
}, 1000);

defuserEl.addEventListener("keydown", function (event) {
  let bombDefuserText = defuserEl.value;
  if (event.key === "Enter" && bombDefuserText === "defuse" && counter !== 0) {
    timerEl.textContent = "You did it!";
    clearInterval(timerId);
  }
});
