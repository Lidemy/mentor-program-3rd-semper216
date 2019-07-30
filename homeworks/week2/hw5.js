function join(arr, concatStr) {
  let newStr = '';
  if (arr.length === 0) {
    newStr = '';
  }
  for (let i = 0; i < arr.length - 1; i += 1) {
    newStr = newStr + arr[i] + concatStr;
  }
  const lastStr = arr[arr.length - 1];
  newStr += lastStr;
  return newStr;
}

const arr = ['a', 'b', 'c'];
console.log(join(arr, '!'));

function repeat(str, times) {
  let reString = str;
  for (let i = 1; i <= times; i += 1) {
    reString += str;
  }
  return reString;
}

repeat('a', 5);
