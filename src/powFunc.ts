// define a Power Function
export function powerCalculator(a: number, operator: any, b: number) {
    if (operator == "**") {
        let c: number = a ** b;
        return console.log(`The desired result of ${a} Power Of ${b} is ${c}.`);
    };
};