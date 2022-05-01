const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let repeatTimes = Number(options.repeatTimes || 1);
    let separator = String(options.separator || '+');

    let addition = String(options.addition || '');

    if (addition == false) {
        addition = 'false';
    };
    let additionRepeatTimes = Number(options.additionRepeatTimes || 1);
    let additionSeparator = String(options.additionSeparator || '|');
    let additionArray = [];
    for (let i = 0; i < additionRepeatTimes; i++) {
        additionArray.push(String(addition));
    }
    let additionWithSeps = additionArray.join(additionSeparator);
    let strWithAddition = String(str) + String(additionWithSeps);
    let strArray = [];
    for (let i = 0; i < repeatTimes; i++) {
        strArray.push(strWithAddition);
    }
    strArray = strArray.join(separator);
    return strArray;

}

module.exports = {
    repeater
};