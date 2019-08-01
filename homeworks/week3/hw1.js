function stars(n) {
  const starsArr = [];
  for (let i = 1; i <= n; i += 1) {
    let starsStr = '';
    if (i === 1) {
      starsStr = '*';
    }
    if (i > 1) {
      starsStr += '*';
    }
    starsArr.push(starsStr);
  }
  return starsArr;
}
module.exports = stars;
