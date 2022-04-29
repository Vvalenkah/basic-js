const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
    const arr1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    const arr2 = n.split('-');
    let arr3;
    let phrase = '';
    for (let i = 0; i < arr2.length; i++) {
        phrase += arr2[i];
    }
    arr3 = phrase.split('');
    for (let j = 0; j < arr3.length; j++) {
        if (!arr1.includes(arr3[j])) {
            return false;
        } else {
            return true;
        }
    }
}
module.exports = {
    isMAC48Address
};