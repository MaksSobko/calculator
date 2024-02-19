const btn = document.querySelectorAll(".button");
const display = document.querySelector(".display");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", calculate);
}

function calculate(event) {
  let btnValue = event.target.value;

  if (btnValue === "=") {
    display.value = eval(display.value);
  } else if (
    display.value[0] === "+" ||
    display.value[0] === "*" ||
    display.value[0] === "/" ||
    display.value[0] === "."
  ) {
    display.value = "";
  } else if (btnValue === "C") {
    display.value = "";
  } else {
    display.value += btnValue;
  }
}
