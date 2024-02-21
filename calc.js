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
  }
  //Delete all
  else if (btnValue === "C") {
    display.value = "";
  }
  //Delete last character
  else if (btnValue === "X" && display.value != "") {
    display.value = dispVal.slice(0, dispVal.lastIndexOf(lastChar));
  }
  //Only minus operator can be first character
  else if (display.value === "" && btnValue.search(/\/|\+|\*|\./g) > -1) {
    display.value = "";
  }
  //Double operator prohibited and replace the last operator with the one just pushed
  else if (dispVal != "" && btnValue.search(/\/|\+|\*|\.|\-/g) > -1) {
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
