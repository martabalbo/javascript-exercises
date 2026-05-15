const reverseString = function(inputString) {
    let arr = inputString.split("");
    console.log(arr)
    let reversedArr = [];
    for(let i=0; i<(inputString.length); i++) {
        let letter = arr.pop();
        console.log(letter);
        reversedArr[i] = letter;
        console.log(reversedArr)
    }
    return reversedArr.join("");
};

a = reverseString("ciao a tutti");
console.log(a);

// Do not edit below this line
module.exports = reverseString;
