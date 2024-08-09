const reverseString = function (string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;

    // a better way
    /*
    return string.split("").reverse().join("");
    */
};

// Do not edit below this line
module.exports = reverseString;
