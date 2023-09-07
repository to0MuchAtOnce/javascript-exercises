const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(num) {
  if (Array.isArray(num) && num.length === 0) {
    return 0;
  }  
  else if (Array.isArray(num) && num.length === 1) { 
    return num[0];
  } else if (Array.isArray(num)) {
    return num.reduce((prev, cur) => prev + cur, 0);
  } else {
    return 0;
  }
};

const multiply = function(nums) {
  if (Array.isArray(nums)) {
    return nums.reduce((prev, curr) => prev * curr, 1);
  }
}

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  let ans = 1;
  if(num === 0) {
    return 1;
  }
  for (let i = 2; i <= num; i++)
    ans = ans * i;
  return ans;
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
