class Calculator {
  add(a, b) {
    if (a === undefined && b === undefined) {
      return 'No value was given'
    } else if (a === undefined) {
      a = 0
    } else if (b === undefined) {
      b = 0
    }
    return a + b;
  }

  subtract(a, b) {
    if (a === undefined && b === undefined) {
      return 'No value was given'
    } else if (a === undefined) {
      a = 0
    } else if (b === undefined) {
      b = 0
    }
    return a - b;
  }

  multiply(a, b) {
    if (a === undefined && b === undefined) {
      return 'No value was given'
    } else if (a === undefined) {
      a = 0
    } else if (b === undefined) {
      b = 0
    }
    return a * b;
  }

  divide(a, b){
    if (a === undefined && b === undefined) {
      return 'No value was given'
    } else if (a === undefined) {
      a = b
    } else if (b === undefined) {
      b = a
    }
  return a / b;
}
}

module.exports = Calculator;