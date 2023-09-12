// Let us import inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
// Now define a function to take user's input with validation
async function getFirstInteger() {
    // We have to use a loop so that user may provide valid input
    while (true) {
        let input1 = await inquirer.prompt({
            name: "firstNum",
            type: "input",
            message: "\nPlease enter a valid integer: \n",
            validate: function (value) {
                let num = parseInt(value);
                if (!isNaN(num)) {
                    return true;
                }
                else {
                    return `Invalid Input, Please enter a valid integer:`;
                }
            },
        });
        console.log(chalk.bgCyan.blueBright(`Valid Input, the value of integer is: ${input1.firstNum}.\n`));
        return input1;
    }
}
// Secondly take the required operator from the user
async function selectedOperator() {
    let input2 = await inquirer.prompt({
        name: "operator",
        type: "list",
        message: "\nPlease select the required operator: \n",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Remainder", "PowerOf"]
    });
    console.log(chalk.bgCyan.blueBright(`The selected operator is: ${input2.operator}.\n`));
    return input2;
}
;
// Lastly ask the value of second integer from the user
async function getSecondInteger() {
    // We have to use a loop so that user may provide valid input
    while (true) {
        let input3 = await inquirer.prompt({
            name: "secondNum",
            type: "input",
            message: "\nPlease enter a valid integer: \n",
            validate: function (value) {
                let num = parseInt(value);
                if (!isNaN(num)) {
                    return true;
                }
                else {
                    return `Invalid Input, Please enter a valid integer:`;
                }
            },
        });
        console.log(chalk.bgCyan.blueBright(`Valid Input, the value of integer is: ${input3.secondNum}.\n`));
        return input3;
    }
}
export { getFirstInteger, selectedOperator, getSecondInteger };
