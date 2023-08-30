// define an Addition Function
export function additionCalculator(a: number, operator: any, b: number) {
    if (operator == "+") {
        let c: number = a + b;
        return console.log(`The desired result of Addition of ${a} and ${b} is ${c}.`);
    };
};