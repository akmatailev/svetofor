  let red = document.getElementById("red");
let green = document.getElementById("green");
let time = document.getElementById("time");

let timer = 10;
let found = 1;
const interval = () => {
  time.innerText = timer;
  time.style.display = "block";
  setTimeout(() => {
    if (timer < 5) {
      time.style.display = "none";
    }
  }, 300);

  //условия для контроля таймера
  if (timer === 0) {
    timer = 15;
    if (found === 1) {
      found = 2;
    } else {
      found = 1;
    }
  } else {
    timer--;
  }

  // условия контроля светофора
  if (found === 2) {
    red.style.backgroundColor = "";
    green.style.backgroundColor = "green";
  } else if (found === 1) {
    red.style.backgroundColor = "red";
    green.style.backgroundColor = "";
  }
};
setInterval(interval, 1000);
