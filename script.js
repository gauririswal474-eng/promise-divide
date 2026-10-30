// JavaScript - Promise-based Divide Function

const outputBox = document.getElementById("output");

// Show every result in the console and on the page
function show(text) {
  console.log(text);
  if (outputBox) {
    outputBox.textContent += text + "\n";
  }
}

// Arrow function that takes two numbers and returns a Promise
const divide = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number" || Number.isNaN(a) || Number.isNaN(b)) {
      reject("Both inputs must be valid numbers.");
    } else if (b === 0) {
      reject("Division by zero is not allowed.");
    } else {
      resolve(a / b);
    }
  });
};

// Dummy values for testing (6 cases)
const testCases = [
  [10, 2],
  [10, 0],
  [25, 5],
  [7, 2],
  [-20, 4],
  [0, 5]
];

// Run the cases one after another so the output stays in order
const runTests = async () => {
  for (const [a, b] of testCases) {
    show(`Dividing ${a} by ${b}...`);
    try {
      const result = await divide(a, b);
      show(`Result: ${result}`);
    } catch (error) {
      show(`Error: ${error}`);
    }
    show("");
  }
};

runTests();
