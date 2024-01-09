// append h1
let elm = document.getElementById("container2");
let h1 = document.createElement("h1");
let text = document.createTextNode("this is a append hedaing");
h1.appendChild(text);
elm.appendChild(h1);

// append id tag and class tag in h1 
let elm1 = document.getElementById("container2");
let hh1 = document.createElement("h1");

hh1.className = "ada";
hh1.id = "ch";

// let text1 = document.createTextNode("this is a append hedaing");
// hh1.appendChild(text1);
hh1.textContent = "this is a append heading"; 
elm1.appendChild(hh1);

// body append h1
let elm2 = document.getElementById("container2");
let hh2 = document.createElement("h1");

hh2.className = "ada";
hh2.id = "ch";

let text2 = document.createTextNode("this is a append hedaing");
hh2.appendChild(text2);

document.body.appendChild(hh2);

// list append 
let list = document.getElementById("list-3");

let item = document.createElement("li");
item.textContent = " new list 5";

list.appendChild(item);