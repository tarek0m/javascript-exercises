const sumAll = function (start, end) {
    if (
        !Number.isInteger(start) ||
        !Number.isInteger(end) ||
        start < 0 ||
        end < 0
    ) {
        return "ERROR";
    }
    let newArray = Array.from(
        { length: Math.abs(end - start) + 1 },
        (value, index) => Math.min(start, end) + index
    );
    return newArray.reduce((sum, item) => (sum += item), 0);
};

// Do not edit below this line
module.exports = sumAll;
