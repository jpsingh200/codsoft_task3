const display = document.getElementById('display');

// Clear display
function clearDisplay() {
  display.value = '';
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Insert number or operator
function insertNumber(num) {
  display.value += num;
}

function insertOperator(op) {
  display.value += ` ${op} `;
}

// Insert decimal
function insertDecimal() {
  if (!display.value.endsWith('.')) {
    display.value += '.';
  }
}

// Toggle positive/negative sign
function toggleSign() {
  display.value = display.value.startsWith('-') ? display.value.slice(1) : `-${display.value}`;
}

// Basic calculation
function calculate() {
  try {
    display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
  } catch {
    display.value = 'Error';
  }
}

// Trigonometric functions
function calculateSin() {
  display.value = Math.sin(toRadians(display.value));
}

function calculateCos() {
  display.value = Math.cos(toRadians(display.value));
}

function calculateTan() {
  display.value = Math.tan(toRadians(display.value));
}

// Logarithmic function
function calculateLog() {
  display.value = Math.log10(display.value);
}

// Square root
function calculateSqrt() {
  display.value = Math.sqrt(display.value);
}

// Square and cube
function calculateSquare() {
  display.value = Math.pow(display.value, 2);
}

function calculateCube() {
  display.value = Math.pow(display.value, 3);
}

// Exponential
function calculateExp() {
  display.value = Math.exp(display.value);
}

// Factorial function
function calculateFactorial() {
  let num = parseInt(display.value);
  display.value = factorial(num);
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Helper to convert degrees to radians
function toRadians(deg) {
  return (deg * Math.PI) / 180;
}
