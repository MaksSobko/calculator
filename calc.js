const btn = document.querySelectorAll(".button");
const display = document.querySelector(".display");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", calculate);
}

function calculate(event) {
  let btnValue = event.target.value;
  let dispVal = display.value;
  let lastChar = dispVal[dispVal.length - 1];

  if (btnValue === "=") {
    display.value = eval(display.value);
  } else if (btnValue === "C") {
    display.value = "";
  } else if (btnValue === "X" && display.value != "") {
    display.value = dispVal.slice(0, dispVal.lastIndexOf(lastChar));
  } else if (display.value === "" && btnValue.search(/\/|\+|\*|\./g) > -1) {
    display.value = "";
  } else if (dispVal != "" && btnValue.search(/\/|\+|\*|\.|\-/g) > -1) {
    if (
      dispVal.lastIndexOf(lastChar) != dispVal.search(/\/$|\+$|\*$|\.$|\-$/g)
    ) {
      display.value += btnValue;
    }
    if (
      dispVal.lastIndexOf(lastChar) === dispVal.search(/\/$|\+$|\*$|\.$|\-$/g)
    ) {
      display.value = dispVal.replace(/.$/g, btnValue);
    }
  } else {
    display.value += btnValue;
  }
}
