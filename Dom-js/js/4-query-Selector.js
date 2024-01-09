let elm = document.querySelector("p.intro");
elm.innerHTML = "Hello";
console.log(elm);

let elm1 = document.querySelectorAll("p.intro");
for(let i = 0; i < elm1.length; i++){
    elm1[i].innerHTML = "Hello";
    console.log(elm1);  
}