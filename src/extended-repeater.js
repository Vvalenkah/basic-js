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
function repeater( /* str, options */ ) {
    let str2 = '';
    const options = {
        repeatTimes: Number(this.repeatTimes) || 1,
        separator: String(this.separator) || '+',
        addition: String(this.addition) || '',
        additionRepeatTimes: Number(this.additionRepeatTimes) || 1,
        additionSeparator: String(this.additionSeparator) || '|',
        // str2 = `${str} + ${addition}`.repeat(repeatTimes)
        // str2.split()
    }
    let additionArray = [];
    for (let i = 0; i < options.additionRepeatTimes; i++) {
        options.additionCount.push(options.addition);
    }
    let additionWithSeps = additionArray.join(options.additionSeparator);
    let strWithAddition = String(str) + String(additionWithSeps);
    strArray = [];
    for (let i = 0; i < repeatTimes; i++) {
        strArray.push(strWithAddition);
    }
    strArray = strArray.join(options.separator);
    return strArray;

}

module.exports = {
    repeater
};