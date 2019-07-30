function capitalize(str) {
  if (97 <= str[0].charCodeAt() <= 122 ) {
    const first_word = str[0]
    const turn_UpperCase = first_word.toUpperCase();
    const new_string = str.replace(/^[a-z]/,turn_UpperCase);
  return new_string;
  }
}

capitalize('hello');