const Calculator = require("./calculator");

const newCalculator = new Calculator();

describe('My calculator add method', () => {
  it('Returns both input numbers summed', () => {
    expect(newCalculator.add(10, 5)).toBe(15);
  });

  it('Returns result even if first input or second is not given', () => {
    expect(newCalculator.add(2)).toBe(2);
  });

  it('Returns a falsy message if no value is given', () => {
    expect(newCalculator.add()).toBe('No value was given');
  })
});

describe('My calculator subtract method', () => {
  it('Returns the first input minus the second one', () => {
    expect(newCalculator.subtract(3, 1)).toBe(2);
  });

  it('Returns result even if first input or second is not given', () => {
    expect(newCalculator.subtract(2)).toBe(2);
  });

  it('Returns a falsy message if no value is given', () => {
    expect(newCalculator.subtract()).toBe('No value was given');
  })
});

describe('My calculator multiply method', () => {
  it('Returns both inputs multiplied', () => {
    expect(newCalculator.multiply(2,5)).toBe(10);
  });

  it('Returns 0 if no second input is given', () => {
    expect(newCalculator.multiply(2)).toBe(0);
  });

  it('Returns a falsy message if no value is given', () => {
    expect(newCalculator.multiply()).toBe('No value was given');
  })
});

describe('My calculator divide method', () => {
  it('Returns the first input divided by the second one', () => {
    expect(newCalculator.divide(25, 5)).toBe(5);
  });

  it('Returns 1 if no second or first input is given', () => {
    expect(newCalculator.divide(100)).toBe(1);
  });

  it('Returns a falsy message if no value is given', () => {
    expect(newCalculator.divide()).toBe('No value was given');
  })
});