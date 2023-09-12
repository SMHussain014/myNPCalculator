#! /usr/bin/env node
// Design a Calculator using inquirer, chalk and chalk-animation
// let's import inquirer, chalk and chalk-animation packages
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
// Let's import 'Input Functions'
import { getFirstInteger, selectedOperator, getSecondInteger } from "./input.js";
// Let's import 'calculator' Functions
import { calculator } from "./operations.js";
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
};
// Call the chalk-animation function
await welcome();
async function startLoop() {
    let loop;
    do {
        // Call the input functions and store their values in three variables
        let a = await getFirstInteger();
        let option = await selectedOperator();
        let b = await getSecondInteger();
        // Call the function and used stored values of these variables
        calculator(parseInt(a.firstNum), option.operator, parseInt(b.secondNum));
        loop = await inquirer.prompt({
            name: "restart",
            type: "input",
            message: "\nPlease specify whether you want to continue, if so, enter yes: \n"
        });
    }
    while (loop.restart == 'y' || loop.restart == 'Y' || loop.restart == 'yes' || loop.restart == 'Yes');
};
await startLoop();