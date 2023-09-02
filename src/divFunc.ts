// define a Division Function
export function divisionCalculator(a: number, operator: any, b: number) {
    if (operator == "/") {
        let c = Math.fround(a / b).toFixed(2);
        if (b == 0) {
            console.error(`Division by Zero is not Allowed.`);
        }
        else {
            return console.log(`The desired result of Division of ${a} by ${b} is ${c}.`);
        };
};
};