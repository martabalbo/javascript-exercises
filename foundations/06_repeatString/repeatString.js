const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let concat_string = "";
    for (let i=0; i<num; i++) {
        concat_string += string;;
    }
    return concat_string;
}


// Do not edit below this line
module.exports = repeatString;
