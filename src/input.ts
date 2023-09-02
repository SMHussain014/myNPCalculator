// let's import inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
// Now take the value of first integer from the user
async function firstInteger() {
    let input1 = await inquirer.prompt(
        {
            name: "firstNum",
            type: "number",
            message: "\nPlease enter the first integer: \n"
        }
    )
    console.log(chalk.bgCyan.blueBright(`The value of first integer is: ${input1.firstNum}.\n`));
    return input1;
};
// Secondly take the required operator from the user
async function selectedOperator() {
    let input2 = await inquirer.prompt(
        {
            name: "operator",
            type: "list",
            message: "\nPlease enter the required operator: \n",
            choices: ["+", "-", "*", "/", "%", "**"]
        }
    )
    console.log(chalk.bgCyan.blueBright(`The desired operator is: ${input2.operator}.\n`));
    return input2;
};
// Lastly ake the value of second integer from the user
async function secondInteger() {
    let input3 = await inquirer.prompt(
        {
            name: "secondNum",
            type: "number",
            message: "\nPlease enter the second integer: \n"
        }
    )
    console.log(chalk.bgCyan.blueBright(`The value of second integer is: ${input3.secondNum}.\n`));
    return input3;
};
export { firstInteger, selectedOperator, secondInteger };