const Calculator = require('./task3');
const add = require('./task3');
const multiply = require('./task3');
const subtraction = require('./task3');
const division = require('./task3');

describe('Calculator is performing well', () => {
    test('calculates the sum of two numbers', () => {
        let calc1 = new Calculator(2,3);
        expect(calc1.add()).toBe(5);
    });
    test('multiply two numbers', () => {
        let calc2 = new Calculator(6,3);
        expect(calc2.multiply()).toBe(18);
    });
    test('subtract two numbers', () => {
        let calc3 = new Calculator(7,3);
        expect(calc3.subtraction()).toBe(4);
    });
    test('divide two numbers', () => {
        let calc4 = new Calculator(9,3);
        expect(calc4.division()).toBe(3);
    });
});