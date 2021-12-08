const capitalize = require('./task4');

test('capitalize a string', () => {
    expect(capitalize('cow')).toBe('Cow');
});