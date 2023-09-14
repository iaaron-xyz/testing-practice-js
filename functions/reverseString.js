function reverseString(string) {
  if (string.length === 0) {
    return '';
  }
  if (string.length === 1) {
    return string;
  }
  return reverseString(string.slice(1)) + string.charAt(0);
}

module.exports = reverseString;