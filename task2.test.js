const reverseString = require('./task2');

test('Reverse a string', () => {
    expect(reverseString('cow')).toBe('woc');
});