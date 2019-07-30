function reverse(str) {
  const strLen = str.length;
  const newOrder = [];
  let newObj = '';
  let newStr = '';
  for (let i = 0; i < strLen; i += 1) {
    newObj = str[strLen - 1 - i];
    newOrder.push(newObj);
    newStr = newOrder.join('');
  }
  console.log(newStr);
  return newStr;
}

reverse('hello');
