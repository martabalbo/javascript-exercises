const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    };
    let startingNum = a;
    let endingNum = b;
    if (a > b) {
        startingNum = b;
        endingNum = a;
    };
    console.log("start " + startingNum + " end " + endingNum);
    let sum = 0;
    console.log(endingNum-startingNum+1); 
    for (let i = 0; i < (endingNum-startingNum) + 1; i++) {
        sum = sum + startingNum + i;
        console.log("somma: " + sum + " i: " +i)
    }
    return sum;
};

console.log(sumAll(1, 3));

// Do not edit below this line
module.exports = sumAll;
