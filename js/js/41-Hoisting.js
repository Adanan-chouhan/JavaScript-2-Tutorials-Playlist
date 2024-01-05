//  Hoisting in var Example
// this is true program
var x;
x = 5 ;
console.log(x);

// this is true program
a = 10 ;
console.log(a);

var a;

// this is error program
console.log(b);

var b;
b = 7 ;


// let in Hoisting
// this is error program
console.log(c);
let c;
c = 16;

// this is true program
d = 16;
console.log(c);
let d;