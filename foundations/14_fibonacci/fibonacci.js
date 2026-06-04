const fibonacci = function(index) {
    if (index<0) {
        return 'OOPS';
    }
    let arr = [0, 1];
    for (let i=0; i<index; i++) {
    arr.push(arr.at(-1) + arr.at(-2));
    };
    return arr[index];

};

// Do not edit below this line
module.exports = fibonacci;
