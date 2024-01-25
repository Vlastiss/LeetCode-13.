// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let total = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (i === s.length - 1 || roman[s[i]] >= roman[s[i + 1]]) {
            total += roman[s[i]];
        } else {
            total -= roman[s[i]];
        }
    }
    return total;
};

console.log(romanToInt("MCMXCIV"));