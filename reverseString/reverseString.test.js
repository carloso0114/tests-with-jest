const reverseString = require("./reverseString");

describe('My reverseString function', () => {
  it('Returns the input string reversed', () => {
    expect(reverseString('abc')).toBe('cba');
  });
  
  it('returns an error if there is no string', () => {
    expect(reverseString()).toBe('You must pass a string');
  });  
});