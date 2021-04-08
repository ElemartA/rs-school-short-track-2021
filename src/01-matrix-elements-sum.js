/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let n;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].indexOf(0) !== -1) {
      n = i;
    }
  }
  const newMat1 = matrix.slice(0, n).flat();
  let sum2 = 0;
  let i = 0;
  while (i < newMat1.length) {
    sum2 += newMat1[i];
    i += 1;
  }
  return sum2;
}
module.exports = getMatrixElementsSum;
