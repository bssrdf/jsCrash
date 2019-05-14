function idToShortURL(n){

    let map  = `abcdefghijklmnopqrstuvwxyz
    ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`; 
    let shorturl = [];
    while(n){
        shorturl.push(map[n%62])
        n = Math.floor(n/62);
    }
    
    return shorturl.reverse().join("");
    
}


let n = 12345; 
let shorturl = idToShortURL(n); 
console.log("Generated short url is '"+shorturl+"'"); 