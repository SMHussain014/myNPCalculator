// Let us import chalk package
import chalk from "chalk";
// define a Division Function
export function divisionCalculator(a, operator, b) {
    if (operator == "/") {
        let c = Math.fround(a / b).toFixed(2);
        if (b == 0) {
            console.error(`Division by Zero is not Allowed.`);
        }
        else {
            return console.log(chalk.bgWhite.green(`\nThe desired result of Division of ${a} by ${b} is ${c}.`));
        }
        ;
    }
    ;
}
;
