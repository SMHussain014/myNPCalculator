// Let us import chalk package
import chalk from "chalk";
// define an Addition Function
export function additionCalculator(a, operator, b) {
    if (operator == "+") {
        let c = a + b;
        return console.log(chalk.bgWhite.green(`\nThe desired result of Addition of ${a} and ${b} is ${c}.`));
    }
    ;
}
;
