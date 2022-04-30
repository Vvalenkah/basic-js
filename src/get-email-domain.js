const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    let str = email.split('');
    for (let i = str.length - 1; i > 0; i--) {
        if (str[i] == '@') {
            return (str.splice(i + 1, str.length - 1).join(''));
        }
    }
}

module.exports = {
    getEmailDomain
};