const sumAll = function(arg1, arg2) {
    let total = 0;
    
    if(arg1 < 0 || arg2 < 0) {
        return 'ERROR';
    } else if(typeof arg1 !== 'number' || typeof arg2 !== 'number') {
        return "ERROR"
    }
    
    if(arg1 > arg2) {
        [arg1, arg2] = [arg2, arg1]
    }

    for(let i = arg1; i <= arg2; i++) {
     total += i;
   } 
   return total;
};

// Do not edit below this line
module.exports = sumAll;
