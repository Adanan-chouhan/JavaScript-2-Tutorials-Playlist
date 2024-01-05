
let a = Math.random();
console.log(a);

// 0 to 9 Random Number
let b = Math.floor(Math.random() * 10);
console.log(b);

// 1 to 99 Random Number
let c = Math.floor(Math.random() * 100) + 1;
console.log(c);

// 15 to 24 Random Number
let d = Math.floor(Math.random() * (25-15)) + 15;
console.log(d);


// function any Random Number
function getRandom(min,max){
    let x = Math.floor(Math.random() * (max-min + 1)) + min;
 return x;
}

console.log(getRandom(10,20));
console.log(getRandom(50,55));