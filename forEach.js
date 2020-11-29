function doubleValues(arr) {
  const newArr = [];
  arr.forEach((value) => {
    newArr.push(value * 2);
  });
  return newArr;
}

function onlyEvenValues(arr) {
  const newArr = [];
  arr.forEach((value) => {
    if (value % 2 === 0) newArr.push(value);
  });
  return newArr;
}

function showFirstAndLast(arr) {
  const newArr = [];
  arr.forEach((str) => {
    newArr.push(str[0] + str[str.length - 1]);
  });
  return newArr;
}

function addKeyAndValue(arr, key, value) {
  const newArr = [];
  arr.forEach((obj) => {
    obj[key] = value;
    newArr.push(obj);
  });
  return newArr;
}

function vowelCount(str) {
  let lowCase = Array.from(str.toLowerCase());
  const newObj = {};
  lowCase.forEach(function (char) {
    if ("aeiou".indexOf(char) !== -1) {
      if (newObj[char]) {
        newObj[char] += 1;
      } else newObj[char] = 1;
    }
  });
  return newObj;
}
