var sentence = 'jsd78UY';

for(let i=0; i<sentence.length; i++)
   console.log(sentence.charCodeAt(i));

let i  = 0;
//sentence.forEach(() => console.log())

[...sentence].forEach( (c) => console.log(c));


sentence.split('').forEach(function(c) {
    console.log(c);
});


    