// Let us import chalk package
import chalk from "chalk";
// define the operations to be performed
export function calculator(a: number, operator: string, b: number) {
    if (operator == "Addition") {
        let c: number = a + b;
        return console.log(chalk.bgWhite.green(`\nThe desired result of Addition of ${a} and ${b} is ${c}.`));
    }
    else if (operator == "Subtraction") {
        let c: number = a - b;
        return console.log(chalk.bgWhite.green(`\nThe desired result of Subtraction of ${a} from ${b} is ${c}.`));
    }
    else if (operator == "Multiplication") {
        let c: number = a * b;
        return console.log(chalk.bgWhite.green(`\nThe desired result of Multiplication of ${a} to ${b} is ${c}.`));
    }
    else if (operator == "Division") {
        let c = Math.fround(a / b).toFixed(2);
        if (b == 0) {
            console.error(`Division by zero is not permissible.`);
        }
        else {
            return console.log(chalk.bgWhite.green(`\nThe desired result of Division of ${a} by ${b} is ${c}.`));
        };
    }
    else if (operator == "Remainder") {
        let c: number = a % b;
        return console.log(chalk.bgWhite.green(`\nThe desired result of Remainder of ${a} by ${b} is ${c}.`));
    }
    else if (operator == "PowerOf") {
        let c: number = a ** b;
        return console.log(chalk.bgWhite.green(`\nThe desired result of ${a} Power of ${b} is ${c}.`));
    };
};