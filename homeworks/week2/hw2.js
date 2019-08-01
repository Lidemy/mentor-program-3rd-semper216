function capitalize(str) {
  const firstWord = str[0];
  let turnUpperCase = '';
  let newString = '';
  if (str[0].charCodeAt() <= 122 && str[0].charCodeAt() >= 97) {
    turnUpperCase = firstWord.toUpperCase();
    newString = str.replace(/^[a-z]/, turnUpperCase);
  }
  return newString;
}

capitalize('hello');
