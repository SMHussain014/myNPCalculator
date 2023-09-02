// Let us import chalk package
import chalk from "chalk";
// define a Power Function
export function powerCalculator(a: number, operator: any, b: number) {
    if (operator == "**") {
        let c: number = a ** b;
        return console.log(chalk.bgWhite.green(`\nThe desired result of ${a} Power of ${b} is ${c}.`));
    };
};