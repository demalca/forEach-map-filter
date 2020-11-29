function filterByValue(arr, key) {
  return arr.filter((obj) => {
    if (obj[key]) {
      return obj;
    }
  });
}

function find(arr, val) {
  return arr
    .filter((num) => {
      return num === val;
    })
    .shift();
}

function findInObj(arr, key, val) {
  return arr
    .filter((obj) => {
      return obj[key] === val;
    })
    .shift();
}

function removeVowels(str) {
  lowCase = Array.from(str.toLowerCase());
  return lowCase
    .filter((char) => {
      return "aeiou".indexOf(char) === -1;
    })
    .join("");
}

function doubleOddNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0).map((num) => num * 2);
}
