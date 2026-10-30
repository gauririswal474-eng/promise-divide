# JavaScript - Promise-based Divide Function

## Objective
An arrow function that divides two numbers using a Promise and handles division by zero.

## How it works
`divide(a, b)` is an arrow function that returns a Promise:
- If `b` is `0`, the Promise is **rejected** with the message "Division by zero is not allowed."
- If either input is not a valid number, the Promise is **rejected** with "Both inputs must be valid numbers."
- Otherwise the Promise is **resolved** with `a / b`.

The results are handled with `async/await` and `try/catch`.

## Test Cases (dummy values)
| Case | Dividing | Result |
|------|----------|--------|
| 1 | 10 by 2 | 5 |
| 2 | 10 by 0 | Error: Division by zero is not allowed. |
| 3 | 25 by 5 | 5 |
| 4 | 7 by 2 | 3.5 |
| 5 | -20 by 4 | -5 |
| 6 | 0 by 5 | 0 |

## Output
```
Dividing 10 by 2...
Result: 5

Dividing 10 by 0...
Error: Division by zero is not allowed.
```
(and so on for all 6 cases). Results are printed with `console.log()` and also shown on the page.

## Files
- `index.html` - page structure, links the CSS and JS
- `style.css` - styling
- `script.js` - divide function and test cases
- `README.md` - project description

## How to Run
Open `index.html` in a browser and press F12 to view the console output.

## Live Link
https://gauririswal474-eng.github.io/promise-divide/
