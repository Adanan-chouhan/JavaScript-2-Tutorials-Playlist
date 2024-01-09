let perent = document.getElementById("menu");
let elm = document.createElement("li");
elm.textContent = "Hello";
let replace = perent.firstElementChild;
perent.replaceChild(elm, replace);


let a = document.getElementById("menu");
let b = document.createElement("li");
b.textContent = "who are you ?";
let rep = a.firstElementChild.nextElementSibling;
a.replaceChild(b, rep);

let c = document.getElementById("menu");
let d = document.createElement("li");
d.textContent = "My Name is Adnan Chouhan !";
let posi = c.firstElementChild.nextElementSibling.nextElementSibling;
c.replaceChild(d, posi);