let elm = document.getElementById("insertadjecnet");
let html = "<h1> New h1 Tag </h1>";
elm.insertAdjacentHTML("beforebegin", html);

let a = document.getElementById("insertadjecnet");
let html1 = "<h1> New h1 Tag </h1>";
a.insertAdjacentHTML("beforeend", html1);

let b = document.getElementById("insertadjecnet");
let html2 = "<h1> New h1 Tag </h1>";
b.insertAdjacentHTML("afterbegin", html2);

let c = document.getElementById("insertadjecnet");
let html3 = "<h1> New h1 Tag </h1>";
c.insertAdjacentHTML("beforeend", html3);
