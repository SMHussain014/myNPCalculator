// Let us import chalk package
import chalk from "chalk";
// define a Modulus Function
export function modulusCalculator(a: number, operator: unknown, b: number) {
    if (operator == "%") {
        let c: number = a % b;
        return console.log(chalk.bgWhite.green(`\nThe desired result of Remainder of ${a} by ${b} is ${c}.`));
    };
};