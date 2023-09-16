function analyzeArray(arr) {
  // check array validity
  if (!isValidArray(arr)) return;
  // empty array
  if (arr.length === 0) return null;
  
  // compute
  const average = avg(arr);
  const [min, max] = minmax(arr);
  const length = arr.length;

  return {
    average,
    min,
    max,
    length
  };
}

function isValidArray(arr) {
  if (!Array.isArray(arr)) return false;
  // all elements must be numbers
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] !== 'number') return false;
  }
  return true;
}

function avg(arr) {
  let total = 0;
  // add all the values
  for (let i=0; i < arr.length; i += 1) {
    total += arr[i];
  }
  return total/arr.length;
}

function minmax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i=1; i < arr.length; i += 1) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }
  return [min, max];
}

console.log(analyzeArray([1,'six',3]));

export default analyzeArray;