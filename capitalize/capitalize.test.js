const capitalize = require("./capitalize");

describe('My capitalize function', () => {
  it('Returns a string with the first letter capitalized', () => {
    expect(capitalize('not capitalized')).toBe('Not capitalized');
  });
});