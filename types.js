var l = null;
if(!l) console.log(' is null ');
else console.log(" not null");
const print  = console.log;

const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target);
const isArray = isType('Array');
print(isArray([]));
