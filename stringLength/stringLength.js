
const stringLength = (string) => {
  if (string !== undefined) {
    if (string.length <= 0) {
      return 'The string is too short'
    } else if (string.length > 10) {
      return 'The string is too long'
    } 
    return string.length;
  }
  return 'There is no string'
}

module.exports = stringLength;