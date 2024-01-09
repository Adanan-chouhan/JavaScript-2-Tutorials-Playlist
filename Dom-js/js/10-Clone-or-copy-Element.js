// clone and copy list-5
let list = document.getElementById("list-5");
let cloneElm = list.cloneNode(true);

console.log(cloneElm);



// clone and copy list-5 and append body and change id tag
let list1 = document.getElementById("list-5");
let cloneElm1 = list.cloneNode(true);

cloneElm1.id = "ch"
document.body.appendChild(cloneElm1);
console.log(cloneElm1);
