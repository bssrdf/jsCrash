function rotate(s, i){
    function reverse(l, r){
        while (l < r){
            [s[l], s[r]] = [s[r], s[l]];
            l++;
            r--;
        };        
    }
    reverse(0, i-1);
    reverse(i, s.length-1);
    reverse(0, s.length-1);   
}


var a = [2, 4, 10, 8, 6, 7, 16];

console.log(a);

rotate(a, 3);

console.log(a);


