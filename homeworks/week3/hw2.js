function alphaSwap(str) {
  const strArr = str.split('');
  const NewWord = [];
  const Strlen = str.length;
  for (let w = 0; w < Strlen; w += 1) {
    const asciiW = strArr[w].charCodeAt(0);
    if (asciiW >= 97 && asciiW <= 122) {
      const Wnew = strArr[w].toUpperCase();
      NewWord.push(Wnew);
    }
    if (asciiW >= 65 && asciiW <= 90) {
      const Wnew = strArr[w].toLowerCase();
      NewWord.push(Wnew);
    }
    const NotChar = [91, 91, 92, 92, 94, 95, 96];
    if (asciiW > 122 || asciiW < 65 || asciiW in NotChar) {
      NewWord.push(w);
    }
  }
  const newStr = NewWord.join('');
  return newStr;
}
module.exports = alphaSwap;
