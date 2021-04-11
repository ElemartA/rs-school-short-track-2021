/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const ar = String(n).split('');
  const res = ar.reduce((a, b) => Number(a) + Number(b));
  let res2;
  if (res > 9) {
    const ar2 = String(res).split('');
    res2 = ar2.reduce((a, b) => Number(a) + Number(b));
    return res2;
  } return res;
}

module.exports = getSumOfDigits;
