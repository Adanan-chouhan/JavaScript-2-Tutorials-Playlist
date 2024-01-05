//  this keyword in object
let person = {
    firstName: "Adnan",
    lastName: "Chouhan",
    sayHello (){
            console.log("Hello! i am " + this.firstName + " and i have a " + car.brand + " car"); // use this keyword 
         }
}

let car = {
    brand : "Aoudi",
    modal : "safari"
}

person.sayHello();