/*-------------------------------- Constants --------------------------------*/
const numbers = []
const operators = []
const parsedNumbers = []

/*-------------------------------- Variables --------------------------------*/
let number, result, element

/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector("#calculator")
const display = document.querySelector(".display")

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener("click", (event) => {
  if (event.target.classList.contains("number")) {
    numbers.push(event.target.innerText)
    element = document.createElement("p")
    element.textContent = ""
    display.appendChild(element)
    element.textContent = event.target.innerText
  }
  if (event.target.classList.contains("operator") && event.target.innerText != "C") {
    operators.push(event.target.innerText)
    element = document.createElement("p")
    element.textContent = ""
    display.appendChild(element)
    element.textContent = event.target.innerText
    number = parseInt(numbers.join(""))
    numbers.length = 0
    parsedNumbers.push(number)
  }
  if (event.target.classList.contains("equals")) {
    number = parseInt(numbers.join(""))
    element = document.createElement("p")
    display.appendChild(element)
    numbers.length = 0
    parsedNumbers.push(number)
    element.textContent = "=" + calculate()
  }
  if (event.target.innerText === "C") {
    number.length = 0
    operators.length = 0
    parsedNumbers.length = 0
    display.innerHTML = ""
  }
})

/*-------------------------------- Functions --------------------------------*/

  const calculate = () => {
    result = parsedNumbers[0];
    for (let i=0; i<operators.length; i++) {
      const nextNumber = parsedNumbers[i + 1]
      switch (operators[i]) {
        case "/":
          result /= nextNumber
          break
        case "*": 
          result *= nextNumber
          break
        case "-":
          result -= nextNumber
          break
        case "+":
          result += nextNumber
          break
      }
    }
  
    return result;
  };
