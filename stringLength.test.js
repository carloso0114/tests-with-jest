
const stringLength = require("./stringLength");

describe('My stringLength function', () => {
  it('returns the right length of the string', () => {
    expect(stringLength('test')).toBe(4);
  });
  
  it('returns an error if the string is too short', () => {
    expect(stringLength('')).toBe('The string is too short');
  });
  
  it('returns an error if the string is too long', () => {
    expect(stringLength('This is a big string')).toBe('The string is too long');
  });
  
  it('returns an error if there is no string', () => {
    expect(stringLength()).toBe('You must pass a string');
  });
});
