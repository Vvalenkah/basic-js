const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
    let arr = [];
    let string = '';
    if (members.length = 0) {
        return false;
    }

    for (let i = 0; i < members.length; i++) {
        if (Array.isArray(members[i])) {
            continue;
        }
        if (typeof members[i] == 'string') {
            arr.push(members[i].trim().substr(0, 1).toUpperCase());
        } else {
            console.log(members[i]);
        }
    }
    arr.sort();
    for (let j = 0; j < arr.length; j++) {
        string += arr[j];
    }
    return (string);
}


module.exports = {
    createDreamTeam
};