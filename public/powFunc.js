// Let us import chalk package
import chalk from "chalk";
// define a Power Function
export function powerCalculator(a, operator, b) {
    if (operator == "**") {
        let c = a ** b;
        return console.log(chalk.bgWhite.green(`\nThe desired result of ${a} Power of ${b} is ${c}.`));
    }
    ;
}
;
