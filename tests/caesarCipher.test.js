import caesarCipher from "../functions/caesarCipher";
import { textToAscii, applyShift, asciiToText } from "../functions/caesarCipher";

/** Test for textToAscii */
// empty text returns minus one code
test("empty string returns -1", () => {
  expect(textToAscii('')).toBe(-1);
})
// lowercase
test("in: baz, out: [98, 97, 122]", () => {
  expect(textToAscii('baz')).toEqual([98, 97, 122]);
})
// uppercases
test("in: BAZ, out: [66, 65, 90]", () => {
  expect(textToAscii('BAZ')).toEqual([66, 65, 90]);
})
// mixed upper and lowercase
test("in: fOo, out: [102, 79, 111]", () => {
  expect(textToAscii('fOo')).toEqual([102, 79, 111])
})
// mixed uppercase, lowercase, numbers and symbols
test("in: Python3.10, out: [80,121,116,104,111,110,51,46,49,48]", () => {
  expect(textToAscii('Python3.10')).toEqual([80,121,116,104,111,110,51,46,49,48]);
})

/** applyShift */
// apply shift to only letters lowercase
test("shift=3, in: [97,98,99], out: [100,101,102]", () => {
  expect(applyShift([97,98,99], 3)).toEqual([100,101,102])
})
// apply shift to only letters lowercase
test("shift=4, in: [65,66,67], out: [69,70,71]", () => {
  expect(applyShift([65,66,67], 4)).toEqual([69,70,71])
})
// shifts are applied in circular form (after z/Z backs to a/A)
test("shift=4, in: [97,98,99,120,121,122], out: [101,102,103,98,99,100]", () => {
  expect(applyShift([97,98,99,120,121,122], 4)).toEqual([101,102,103,98,99,100])
})
// shift with multpile of 26 returns the same array
test("shift=26, in: [65,66,67], out: [65,66,67]", () => {
  expect(applyShift([65,66,67], 26)).toEqual([65,66,67])
})
// shifts greater than 25 gets applied mod of 26
test("shift=28, in: [65,66,67], out: [67,68,69]", () => {
  expect(applyShift([65,66,67], 28)).toEqual([67,68,69])
})
// Do not apply the shift to numbers amd symbols
test("shift=5, in: [49,50,65,63,114,126], out: [49,50,70,63,119,126]", () => {
  expect(applyShift([49,50,65,63,114,126], 5)).toEqual([49,50,70,63,119,126])
})
// Deal with empty arrays
test("in: [], out: null", () => {
  expect(applyShift([], 10)).toEqual([]);
})
// Deal with non array objects
test("in: -1, out: null", () => {
  expect(applyShift(-1, 5)).toBe(null);
})

/** asciiToText */
// case for empty arrays
test("in: [], out: null", () => {
  expect(asciiToText([])).toBe(null);
})
// case for empty arrays
test("in: null, out: null", () => {
  expect(asciiToText(null)).toBe(null);
})
// case for not arrays
test("in: 65, out: null", () => {
  expect(asciiToText(65)).toBe(null);
})
// only aplbetic characters : simple case
test("in: [97,98,99], out: 'abc'", () => {
  expect(asciiToText([97,98,99])).toBe('abc');
})
// only alphabetic characters
test("in: [65,98,99,120,121,90], out: 'AbcxyZ'", () => {
  expect(asciiToText([65,98,99,120,121,90])).toBe('AbcxyZ');
})
// only numbers and symbols
test("in: [62,46,60,51], out: >.<3", () => {
  expect(asciiToText([62,46,60,51])).toBe('>.<3')
})
// mix alphanumeric chars and symbols
test("in: [40,42,45,42,41,32,120,50], out: '(*-*) x2'", () => {
  expect(asciiToText([40,42,45,42,41,32,120,50])).toBe('(*-*) x2')
})

/** Test Caesar Code */
// get correct ciphered strings
test("'javascript', shift=0 -> 'javascript", () => {
  expect(caesarCipher('javascript', 0)).toBe('javascript');
})
// only aplhabetic characters get shifted
test("('*abcde12.exe?', shift=1) -> *bcdef12.fyf?", () => {
  expect(caesarCipher('*abcde12.exe?', 1)).toBe('*bcdef12.fyf?');
})
// if the shift exceeds the last position starts again
test("('avxyz', shift=3) -> 'dzabc'", () => {
  expect(caesarCipher('avxyz', 3)).toBe('dyabc');
})
// if apply a shift multiple of 26 you get the same string
test("('foobar', shift=26) -> 'foobar'", () => {
  expect(caesarCipher('foobar', 26)).toBe('foobar');
})
// apply a large shift
test("('baz', shift=262) -> 'dcb'", () => {
  expect(caesarCipher('baz', 262)).toBe('dcb');
})
// input an empty string
test("in: ('', shift=13), out: null", () => {
  expect(caesarCipher('', 13)).toBe(null);
})
// does not set a shift value explicitly
test("in: ('abc'), out: nop", () => {
  expect(caesarCipher('abc')).toBe('nop');
})
