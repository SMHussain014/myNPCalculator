// define a Multiplication Function
export function multiplicationCalculator(a: number, operator: any, b: number) {
    if (operator == "*") {
        let c: number = a * b;
        return console.log(`The desired result of Multiplication of ${a} to ${b} is ${c}.`);
    };
};