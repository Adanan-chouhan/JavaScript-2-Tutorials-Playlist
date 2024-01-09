// Example append child
let list = document.getElementById("list-3");
let createelm = document.createElement("li");
list.appendChild(createelm);
createelm.textContent = "new list 5";


// insert before
let list1 = document.getElementById("list-4");

let createelm1 = document.createElement("li");
createelm1.textContent = "New list 5";

let position = list1.firstChild.nextSibling.nextSibling.nextSibling.nextSibling;
list1.insertBefore(createelm1,position);


// body in insert berfore
let parent = document.body;

let elm = document.createElement("h1");
elm.textContent = "this is insert before text list-4";

let pos = document.getElementById("list-4");
parent.insertBefore(elm,pos);