//  object

let person = {
    firstName: "Adnan",
    lastName: "Chouhan",
    DOB: "13.10.2003"
}

person.age = 20; //add new properti Add in object

person.firstName = "Arbaaz"; // modify firstName Properti 

delete person.DOB;

// Acsses object
console.log(person.firstName);
console.log(person);
console.log("hight" in person);
// console.log(person.hight); //  check this properti Arjust in object answer undifind 


// for in loop in object
let marks = {
    Hindi: 78,
    English: 55,
    Math: 45,
    Computer: 80,
};

for(let key in marks){
    console.log(key + ":" + marks[key]);
}