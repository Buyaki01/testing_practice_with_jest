const stringLength = require('./practice');

test('Checks length of the string', () => {
    expect(stringLength('cow')).toBe(3);
  });

test('Throw errors string is less than 1 and longer than 10 char', () => {
    expect(() => stringLength('deliciousfood')).toThrowError('The string must be at least 1 character or at most 10 characters long');
});   
 