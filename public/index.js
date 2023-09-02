// Design a Calculator using inquirer, chalk and chalk-animation
// let's import inquirer, chalk and  packages
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
// Let's import 'Input Functions'
import { firstInteger, selectedOperator, secondInteger } from "./input.js";
// Let's import 'Calculator Functions'
import { additionCalculator } from "./addFunc.js";
import { subtractionCalculator } from "./subFunc.js";
import { multiplicationCalculator } from "./mulFunc.js";
import { divisionCalculator } from "./divFunc.js";
import { modulusCalculator } from "./modFunc.js";
import { powerCalculator } from "./powFunc.js";
// Now use chalk animation package
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let welcomeMessage = chalkAnimation.rainbow(`Let's start calculation:`);
    await sleep();
    welcomeMessage.stop();
}
;
// Call the chalk-animation function
await welcome();
async function startLoop() {
    do {
        // Call the input functions and store their values in three variables
        let a = await firstInteger();
        let operator = await selectedOperator();
        let b = await secondInteger();
        // console.log(`${a.firstNum} ${operator.operator} ${b.secondNum}`);
        // Call the functions and used stored values of these variables
        additionCalculator(a.firstNum, operator.operator, b.secondNum);
        subtractionCalculator(a.firstNum, operator.operator, b.secondNum);
        multiplicationCalculator(a.firstNum, operator.operator, b.secondNum);
        divisionCalculator(a.firstNum, operator.operator, b.secondNum);
        modulusCalculator(a.firstNum, operator.operator, b.secondNum);
        powerCalculator(a.firstNum, operator.operator, b.secondNum);
        var loop = await inquirer.prompt({
            name: "restart",
            type: "input",
            message: "\nPlease specify whether you want to continue, if so, enter yes: \n"
        });
    } while (loop.restart == 'y' || loop.restart == 'Y' || loop.restart == 'yes' || loop.restart == 'Yes');
}
;
await startLoop();
