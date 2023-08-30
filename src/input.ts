// Now take some input from the user with the help of 'inquirer' package
// let's import inquirer package
import inquirer from "inquirer";
// Get first integral inout
async function num1() {
    let number1 = await inquirer.prompt(
        {
            name: "firstNum",
            type: "number",
            message: "\nPlease enter the first integer: \n"
        }
    )
    return number1;
};
// Get option for operator
async function options() {
    const operator = await inquirer.prompt(
        {
            name: "operator",
            type: "list",
            message: "\nPlease enter the required operator: \n",
            choices: ["+", "-", "*", "/", "%", "**"]
        }
    )
    return operator;
};
// Get second integral input
async function num2() {
    const number2 = await inquirer.prompt(
        {
            name: "secondNum",
            type: "number",
            message: "\nPlease enter the second integer: \n"
        }
    )
    return number2;
};
export { num1, options, num2 };