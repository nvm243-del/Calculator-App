let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  const expression = display.value;

  // v1 only understands a single + or - between two numbers
  if (expression.includes('+')) {
    const parts = expression.split('+');
    display.value = Number(parts[0]) + Number(parts[1]);
  } else if (expression.includes('-')) {
    const parts = expression.split('-');
    display.value = Number(parts[0]) - Number(parts[1]);
  }
}