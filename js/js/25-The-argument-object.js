
function add(){

    if(arguments.length == 0){
        console.log("No argument passed !");
    }else{
        let sum = 0;
        for( let i = 0; i < arguments.length; i++){
            sum = sum + arguments[i];
        }
        console.log(sum);
    }
}
add(3,5,7);
add(2,3,4,5,6,7);