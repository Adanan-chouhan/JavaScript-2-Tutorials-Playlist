// set Attiribute
let a = document.getElementById("btn");
a.setAttribute("name", "Adnan");

let f = document.getElementById("btn");
f.setAttribute("class", "chouhan");

// get Attiribute
let b = document.getElementById("btn");
let c = b.getAttribute("name");
console.log(c);

// has Attiribute
let d = document.getElementById("btn");
let e = d.hasAttribute("name");
console.log(e);