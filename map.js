function doubleValuesWithMap(arr) {
  return arr.map((val) => val * 2);
}

function valTimesIndex(arr) {
  return arr.map((val, idx) => val * idx);
}

function extractKey(arr, key) {
  return arr.map((obj) => obj[key]);
}

function extractFullName(arr) {
  return arr.map((obj) => obj.first + " " + obj.last);
}
