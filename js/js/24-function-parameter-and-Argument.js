//  table function
function table(num){  //funtion parameter
    for(i = 1; i <= 10; i++){
        document.write(num  + " x " + i + " = " + (num * i) + "<br>");
    }
    document.write("<br><br>")
}

table(2);  // argument
table(5);


//  function two number add 
function add(no1,no2){
    document.write(no1 + no2);
    document.write("<br>");
}
add(2,3);
add(10,5);
document.write("<br>");


// function two number multiplay
function multiplay(num1,num2){
    document.write(num1 * num2);
    document.write("<br>");
}
multiplay(2,2);
multiplay(5,5);

