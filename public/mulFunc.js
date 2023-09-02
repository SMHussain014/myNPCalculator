// Let us import chalk package
import chalk from "chalk";
// define a Multiplication Function
export function multiplicationCalculator(a, operator, b) {
    if (operator == "*") {
        let c = a * b;
        return console.log(chalk.bgWhite.green(`\nThe desired result of Multiplication of ${a} to ${b} is ${c}.`));
    }
    ;
}
;
