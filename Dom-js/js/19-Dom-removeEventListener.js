function click1(){
    console.log("click 1 activated");
}

function click2(){
    console.log("click 2 activated");
}
       
let x = document.getElementById("remove");
x.addEventListener("click",click1);
x.addEventListener("click",click2);

x.removeEventListener("click",click2);

