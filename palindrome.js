

function palindrome(str) {
    // Good luck!

    strL = str.toLowerCase();
    var strNew = '';
    for(let i=0; i<strL.length; i++){
        var c = strL.charCodeAt(i);
         if((c > 47 && c < 58) || (c > 64 && c < 91) || (c > 96 && c < 123))
            strNew += strL.charAt(i);
    }

    var temp = [];
    var rStr = '';
    for(let c of strNew)
       temp.push(c);
    for(let i=0; i<temp.length; i++)
       rStr += temp.pop();
    
    for(let i=0; i<rStr.length; i++){
       if(rStr[i] !== strNew[i])
          return false;
    }

    return true;
}
  
//#var s = "2_A3*3#A2"
//var s = "eye"
//var s = "rAce Car"

var s = "0_0 (: /-\ :) 0-0"

if(palindrome(s))
    console.log('s is palindrome');
else
    console.log('s is NOT palindrome');