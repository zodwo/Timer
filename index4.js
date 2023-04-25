const start_stop_button = document.getElementById("start-stop-button");
const timer = document.getElementById("timer");
const reset = document.getElementById("reset-button");

let seconds = 0;
let minutes = 0;
let hours = 0;

let HeaderSecond;
let HeaderMinute;
let HeaderHour;

let TimeStatus = "stopped";
let TimeInterval;

function StartButton() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    HeaderSecond = "0" + seconds;
  } else {
    HeaderSecond = seconds;
  }
  if (minutes < 10) {
    HeaderMinute = "0" + minutes;
  } else {
    HeaderMinute = minutes;
  }
  if (hours < 10) {
    HeaderHour = "0" + hours;
  } else {
    HeaderHour = hours;
  }

  let DisplayScreen =
    (timer.innerHTML = `${HeaderHour}:${HeaderMinute}:${HeaderSecond}`);
}

start_stop_button.addEventListener("click", function () {
  if (TimeStatus === "stopped") {
    TimeInterval = window.setInterval(StartButton, 1000);
    start_stop_button.style.background = "orange";
    start_stop_button.innerHTML = `<i class=" fa-solid fa-pause" id="pause"></i>`;
    TimeStatus = "started";
  } else {
    start_stop_button.innerHTML = `<i class=" fa-solid fa-play" id="play"></i>`;
    start_stop_button.style.background = "#393646";
    clearInterval(TimeInterval);
    TimeStatus = "stopped";
  }
});

reset.addEventListener("click", function () {
  seconds = 0;
  minutes = 0;
  hours = 0;

  clearInterval(TimeInterval);
  start_stop_button.innerHTML = `<i class=" fa-solid fa-play" id="play"></i>`;
  start_stop_button.style.background = "#393646";
  timer.innerHTML = `00:00:00`;
  TimeStatus = "stopped";
});
