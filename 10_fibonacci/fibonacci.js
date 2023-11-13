const fibonacci = function (num) {
  if (num < 0) return 'OOPS';

  let prevNum = 1;
  let secondPrevNum = 0;

  for (let i = 1; i < num; i++) {
    let totalNum = prevNum + secondPrevNum;
    secondPrevNum = prevNum;
    prevNum = totalNum;
  }
  return prevNum;
};

// Do not edit below this line
module.exports = fibonacci;
