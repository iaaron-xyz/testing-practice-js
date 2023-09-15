import caesarCipher from "../functions/caesarCipher";
import { textToAscii, applyShift, asciiToText } from "../functions/caesarCipher";

/** Test for textToAscii */
// empty text returns minus one code
test("empty string returns -1", () => {
  expect(textToAscii('')).toBe(-1);
})
test("in: baz, out: [98, 97, 122]", () => {
  expect(textToAscii('baz')).toEqual([98, 97, 122]);
})
test("in: BAZ, out: [66, 65, 90]", () => {
  expect(textToAscii('BAZ')).toEqual([66, 65, 90]);
})
test("in: fOo, out: [102, 79, 111]", () => {
  expect(textToAscii('fOo')).toEqual([102, 79, 111])
})
test("in: Python3.10, out: [80,121,116,104,111,110,51,46,49,48]", () => {
  expect(textToAscii('Python3.10')).toEqual([80,121,116,104,111,110,51,46,49,48]);
})

/** Test Caesar Code */
// get correct ciphered strings
// test("'javascript', shift=0 -> 'javascript", () => {
//   expect(caesarCipher('javascript', 0)).toBe('javascript');
// })
// // only aplhabetic characters get shifted
// test("('*abcde12.exe?', shift=1) -> *bcdef12.fyf?", () => {
//   expect(caesarCipher('*abcde12.exe?', 1)).toBe('*bcdef12.fyf?');
// })
// // if the shift exceeds the last position starts again
// test("('avxyz', shift=3) -> 'dzabc'", () => {
//   expect(caesarCipher('avxyz', 2)).toBe('dzabc');
// })
// // if apply a shift multiple of 26 you get the same string
// test("('foobar', shift=26) -> 'foobar'", () => {
//   expect(caesarCipher('foobar', 26)).toBe('foobar');
// })
