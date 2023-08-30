// define a Modulus Function
export function modulusCalculator(a: number, operator: any, b: number) {
    if (operator == "%") {
        let c: number = a % b;
        return console.log(`The desired result of Remainder of ${a} by ${b} is ${c}.`);
    };
};