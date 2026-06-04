const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let total = 0;
	for (const el of arr) {
    total = total + el;
  }
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for (const el of arr) {
    total = total * el;
  }
  return total;
};

const power = function(base, exp) {
  let total = 1;
	for (let i = 0; i < exp; i++) {
    total = total * base;
  }
  return total;
};

const factorial = function(num) {
	let total = 1;
  for (let i = 0; i < num; i++) {
    total = total * (i+1);
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
