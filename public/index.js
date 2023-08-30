// Design a Calculator using inquirer and chalk
// Let's import 'Input Functions'
import { num1, options, num2 } from "./input.js";
// Call the functions and store their values in three variables
let a = await num1();
let operator = await options();
let b = await num2();
// console.log(`${a.firstNum} ${operator.operator} ${b.secondNum}`);
// Let's import 'Calculator Functions'
import { additionCalculator } from "./addFunc.js";
import { subtractionCalculator } from "./subFunc.js";
import { multiplicationCalculator } from "./mulFunc.js";
import { divisionCalculator } from "./divFunc.js";
import { modulusCalculator } from "./modFunc.js";
import { powerCalculator } from "./powFunc.js";
// Call the functions and used stored values of variables
additionCalculator(a.firstNum, operator.operator, b.secondNum);
subtractionCalculator(a.firstNum, operator.operator, b.secondNum);
multiplicationCalculator(a.firstNum, operator.operator, b.secondNum);
divisionCalculator(a.firstNum, operator.operator, b.secondNum);
modulusCalculator(a.firstNum, operator.operator, b.secondNum);
powerCalculator(a.firstNum, operator.operator, b.secondNum);
