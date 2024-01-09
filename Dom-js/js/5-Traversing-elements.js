// perentNode
let elm = document.getElementById("list-1");
let prt = elm.parentElement;
prt.innerHTML = "Adnan chouhan" ;
console.log(prt);

// firstElementchild
let elm2 = document.getElementById("list-2");
let node = elm2.firstElementChild;
node.innerHTML = "this is first child" ;
console.log(node);

// lastElementchild
let elm3 = document.getElementById("list-2");
let node1 = elm3.lastElementChild;
node1.innerHTML = "this is first child" ;
console.log(node1);

// children
let elm4 = document.getElementById("list-2");
let child = elm4.children;
console.log(child);

// previousElementSibling
let elm5 = document.getElementById("third");
let pre = elm5.previousElementSibling;
console.log(pre);

// previousElementSibling
let elm6 = document.getElementById("third");
let next = elm6.nextElementSibling;
console.log(next);

