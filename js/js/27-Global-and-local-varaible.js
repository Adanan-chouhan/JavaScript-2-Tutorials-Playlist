let car = "Audi";// this is globa variable

function add(){
    let result = 66;  // this is local variable only acsses function 
    console.log(result);
}

add();
console.log(car);//this is global variable acsses any place  