const palindromes = function (str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanStr.split('').reverse().join('') === cleanStr;
};

// Do not edit below this line
module.exports = palindromes;
