/**
 * Analyzes an array and returns an object containing the array's
 * min value, max value, length and average value
 * @param {object} array 
 * @returns {object}
 */

function analyzeArray(array) {
  if (!allNumbers(array)) throw new Error('All array items must be numbers.');

  const average = array.reduce((sum, num) => sum + num) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  return { average, length, max, min }
}

/**
 * Checks all items of an array are numbers
 * @param {object} array 
 * @returns {boolean}
 */
function allNumbers(array) {
  return array.every(item => typeof item === 'number');
}

export default analyzeArray;