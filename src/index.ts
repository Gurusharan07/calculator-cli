// Questions -
// difference between package json and packgae lock json
//

/* 
    ------------Project initialisation ---------------------
    1) npm init -y
    2)  npm i --save readline-sync   (for taking the user input readline sync )
    3) in typesctipt npm i --save @types/readline-sync
    4) about parseInt
    5) switch case
*/

// console.log("hello");

import { question } from "readline-sync";

function main(): void {
  let firstNumber: string = question("Enter first number : ");
  const secondNumber: string = question("Enter second number : ");
  const operator: string = question("Enter operator (+, -, *, / , %) : ");

  const number1: number = parseInt(firstNumber);
  const number2: number = parseInt(secondNumber);
  switch (operator) {
    case "+":
      console.log("result = ", number1 + number2);
      break;

    case "-":
      console.log("result = ", number1 - number2);
      break;

    case "*":
      console.log("result = ", number1 * number2);
      break;

    case "/":
      console.log("result = ", number1 / number2);
      break;

    case "%":
      console.log("result = ", number1 % number2);
      break;

    default:
      console.log("Enter the valid operator");
      break;
  }
}

main(); // function calling
