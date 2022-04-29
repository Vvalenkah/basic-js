const { NotImplementedError } = require('../extensions/index.js');

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
    let arr1 = String(n).slice("");
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum1 += Number(arr1[i]);
    }
    let arr2 = String(sum1).slice("");
    if (arr2.length > 1) {
        for (let j = 0; j < arr2.length; j++) {
            sum2 += Number(arr2[j]);
        }
        return sum2;
    } else {
        return sum1;
    }
}

module.exports = {
    getSumOfDigits
};