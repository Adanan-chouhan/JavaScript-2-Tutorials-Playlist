let a = ["ITT","Tally","Mathe","c langvage","Libra office"];
console.log(a.length);

// push(); Array in value Add last
let b = ["ITT","Tally","Mathe","c langvage","Libra office"];
b.push("Computer");
console.log(b);

// unshift(); Array in value Add starting
let c = ["ITT","Tally","Mathe","c langvage","Libra office"];
c.unshift("Computer");
console.log(c);

// pop(); value delete in last
let d = ["ITT","Tally","Mathe","c langvage","Libra office"];
d.pop();
console.log(d);

// shift(); value delete in starting
let e = ["ITT","Tally","Mathe","c langvage","Libra office"];
e.shift();
console.log(e);

// splice(); value delete in center
let f = ["ITT","Tally","Mathe","c langvage","Libra office"];
f.splice(2,3)
console.log(f);

// indexof();
let g = ["ITT","Tally","Mathe","c langvage","Libra office"];
let possition = g.indexOf("Mathe")
console.log(possition);

// isArray(); check a varaible Array and not Array Return true or false
let h = ["ITT","Tally","Mathe","c langvage","Libra office"];
// let h = "ITT";
console.log(Array.isArray(h));

// split(); string in divide and convert Array
let i = "this is a random text";
let divide = i.split(" ");
console.log(divide);

// join(); 
let j = ["ITT","Tally","Mathe","c langvage","Libra office"];
let join = j.join("-");
console.log(join);

// concat();
let k = ["ITT","Tally","Mathe","c langvage","Libra office"];
let l = ["Data structure","Digital Elactonic"];
let m = k.concat(l);
console.log(m);

// Multidimentional Array
let NamewithAge = [
    ["Adnan chouhan","20"],
    ["Arbaaz","17"],
    ["fayyaz","18"],
    ["ayyaz","16"]
];
console.log(NamewithAge[1][0]);
console.log(NamewithAge[0][0]);


// Array in for loop
let  brother = ["Adnan chouhan","Arbaaz","fayyaz","ayyaz"];

for (i = 0; i < brother.length; i++){
    console.log('Element is ' + i + ' is ' + brother[i]);
}

// forEach(); loop
let  Name = ["Adnan chouhan","Arbaaz","fayyaz","ayyaz"];
Name.forEach(ada);

function ada(value){
    console.log(value);
}