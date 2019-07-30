function isPalindromes(str) {
  const inWord = str.split('');
  const outWord = [];
  const n = inWord.length;
  for (let i = 0; i <= n; i += 1) {
    outWord.push(inWord[n - i]);
  }
  let result;
  if (inWord.join('') === outWord.join('')) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

module.exports = isPalindromes;
isPalindromes('applppa');
