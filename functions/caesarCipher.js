function caesarCipher(text, shift) {
  // convert text chars to ascii array (integers)
  const arrCodes = textToAscii(text);
  // add/apply shift to update values based in its value
  // convert ascii array back again into text string
  // return ciphered text
  return;
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

// export function applyShift(arr) {
//   return;
// }

// export function asciiToText(arr) {
//   return;
// }


// console.log(textToAscii('baz'));

// export default caesarCipher;