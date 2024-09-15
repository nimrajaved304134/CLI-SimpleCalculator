#! /usr/bin/env node

import { input } from '@inquirer/prompts';

const firstNumber = Number(await input({ message: 'Enter first number' }));

const secondNumber = Number(await input({ message: 'Enter second number' }));

import { select } from '@inquirer/prompts';

const operator = await select({
    message: 'Please select operator',
    choices: [
      { name: "Addition", value: "+" },
      { name: "Subtraction", value: "-" },
      { name: "Multiplication", value: "*" },
      { name: "Division", value: "/" }
    ]
  });
  

//conditions use of if else
//conditional statement
if (operator === "+") {
    console.log(`Your answer is: ${firstNumber + secondNumber}`);
  } else if (operator === "-") {
    console.log(`Your answer is: ${firstNumber - secondNumber}`);
  } else if (operator === "*") {
    console.log(`Your answer is: ${firstNumber * secondNumber}`);
  } else if (operator === "/") {
    console.log(`Your answer is: ${firstNumber / secondNumber}`);
  } else {
    console.log("Please select valid operator");
  }
  
