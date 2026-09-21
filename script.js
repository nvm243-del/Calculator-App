let display = document.getElementById("display");

function appendValue(value) {
  // if a result is already shown (contains "="), start a fresh calculation
  if (display.value.includes("=")) {
    display.value = "";
  }

  // prevent two operators in a row
  const operators = ["+", "-", "*", "/", "%"];
  const lastChar = display.value.slice(-1);

  if (operators.includes(value) && operators.includes(lastChar)) {
    return;
  }

  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  // if a result is shown, backspace should clear it fully rather than
  // deleting one character from "5+4 = 9"
  if (display.value.includes("=")) {
    display.value = "";
    return;
  }
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value;
    const result = eval(expression.replace(/%/g, "/100"));
    display.value = expression + " = " + result;
  } catch (error) {
    display.value = "Error";
  }
}

// keyboard support
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key) || ["+", "-", "*", "/", ".", "%"].includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
function squareRoot() {

  try {

    const value = parseFloat(display.value);

    if (isNaN(value) || value < 0) {
      display.value = "Error";
      return;
    }

    const result = Math.sqrt(value);

    display.value = value + " √ = " + result;

  } catch (error) {

    display.value = "Error";

  }

}


function squareNumber() {

  try {

    const value = parseFloat(display.value);

    if (isNaN(value)) {
      display.value = "Error";
      return;
    }

    const result = value * value;

    display.value = value + "² = " + result;

  } catch (error) {

    display.value = "Error";

  }

}