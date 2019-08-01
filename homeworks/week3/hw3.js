function isPrime(n) {
  const factors = [];
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  const numFactors = factors.length;
  let result = '';
  if (numFactors === 1) { /* 數字1不是質數 */
    result = false;
  }
  if (numFactors === 2) { /* 數字13是質數 */
    result = true;
  }
  if (numFactors > 2) { /* 數字12不是質數 */
    result = false;
  }
  return result;
}
module.exports = isPrime;
