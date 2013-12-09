/**
 * Created by n0v0leg on 12/7/13.
 */
/**
 * Exponentiation by squaring
 * @param {number} base
 * @param {number} exponent
 * @return {number} result
 */

module.exports = expBySquaring;
function expBySquaring(x, n) {
  if (typeof x !== 'number' || typeof n !== 'number' || n % 1) {
    console.error('wrong arguments');
    return NaN;
  }
  if (n === 0)
    return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  var result = 1;
  while (n !== 1) {
    if (n % 2 === 1) {
      result *= x;
      n -= 1;
    }
    x *= x;
    n /= 2;
  }
  return result * x;
}
