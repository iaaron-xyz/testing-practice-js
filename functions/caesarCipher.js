function caesarCipher(plainText, shift=13) {
  // convert text chars to ascii array (integers)
  const arrCodes = textToAscii(plainText);
  // add/apply shift to update values based in its value
  const shiftedCodes = applyShift(arrCodes, shift);
  // convert ascii array back again into text string
  const cipheredText = asciiToText(shiftedCodes);
  // return ciphered text
  return cipheredText;
}

export function textToAscii(text) {
  // empty strings
  if (text === '') return -1;
  // split word/phrase by characters into an array
  const textArr = text.split('');
  // array to contain the characters in ascii code
  const asciiArr = [];
  // encode chars into ascii code
  for (let i = 0; i < textArr.length; i += 1) {
    asciiArr.push(textArr[i].charCodeAt())
  }
  return asciiArr;
}

export function applyShift(arr, shift) {
  // for non-array element return null
  if (!Array.isArray(arr)) return null;
  // apply shift only to alphabetic characters
  const shiftedCodes = arr.map((item) => {
    if (typeof item === 'number') {
      if (item >= 65 && item <= 90) {
        item = ((item-65)+shift%26)%26 + 65;
      } else if (item >= 97 && item <= 122) {
        item = ((item-97)+shift%26)%26 + 97;
      }
      return item;
    }
  })
  return shiftedCodes;
}

export function asciiToText(arr) {
  if (arr === null) return null;
  if (!Array.isArray(arr)) return null;
  if (arr.length === 0) return null;

  let cipheredText = '';
  for (let i = 0; i < arr.length; i += 1) {
    cipheredText += String.fromCharCode(arr[i]);
  }
  return cipheredText;
}


// console.log(textToAscii('baz'));

export default caesarCipher;