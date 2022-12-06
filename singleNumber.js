var singleNumber = function(nums) {
    var digit = new Array(32).fill(0);    
    for(let i of nums){    
        for (let j=0; j<32; j++){
          digit[j] += (1<<j) & i ? 1 : 0;
        }    
    }
    for (let j=0; j<32; j++)
       digit[j] %= 3;    
    var res = digit.reverse().join("");    
    return parseInt(res,2);
};

console.log(singleNumber([2,2,3,2]));