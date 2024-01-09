
setTimeout(myfunction,5000);
function myfunction(){
    alert("Hello gays !");
}


let timoutid = setTimeout(fn,2000);
function fn(){
    alert("Arlm is on");
};
clearTimeout(timoutid);


let a = setInterval(fun,2000);
function fun(){
console.log("this is text");
}


let b = document.getElementById("btn4");
b.addEventListener("click",function(){
    clearInterval(a);
})