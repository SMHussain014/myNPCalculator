// define a Subtraction Function
export function subtractionCalculator(a: number, operator: any, b: number) {
    if (operator == "-") {
        let c: number = a - b;
        return console.log(`The desired result of Subtraction of ${a} from ${b} is ${c}.`);
    };
};