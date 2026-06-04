const palindromes = function (input) {
    const arr = input
                .toLowerCase()
                .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
                .replace(/ /g, "")
                .split('');
    //console.log(arr);
    let newArr = Array.from(arr).toReversed();
    //console.log(newArr)
    return arr.toString() == newArr.toString();
};

//let input = "ciao a tutti!";
//console.log(palindromes(input));

// Do not edit below this line
module.exports = palindromes;
