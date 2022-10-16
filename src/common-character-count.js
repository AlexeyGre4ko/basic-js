const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let m = s1.split('').reduce ((acc, i) => acc.set(i, (acc.get(i) || 0) + 1), new Map());
  return s2.split('').reduce((acc, j) => m.get(j) > 0 ? (m.set(j, m.get(j) - 1), acc + 1) : acc, 0);
}
//  return s2.split('').reduce ((acc, j) => {
//    let m_value = m.get(j);
//    if (m_value > 0) {
//      m.set(j, m_value - 1);
//      return acc + 1;
//    }
//    return acc;
//  }, 0);


module.exports = {
  getCommonCharacterCount
};
