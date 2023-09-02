// Let us import chalk package
import chalk from "chalk";
// define a Subtraction Function
export function subtractionCalculator(a: number, operator: any, b: number) {
    if (operator == "-") {
        let c: number = a - b;
        return console.log(chalk.bgWhite.green(`\nThe desired result of Subtraction of ${a} from ${b} is ${c}.`));
    };
};