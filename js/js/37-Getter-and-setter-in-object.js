//  Getter function
let person = {
    name : "adnan",
    age : 20,

    get getname(){
        return this.name.toUpperCase();
    }
};

console.log(person.getname);



//  Getter function
let person1 = {
    name : "adnan",
    age : 20,

    set setname(n){
        return this.name = n.toUpperCase();
    }
};
person1.setname = "arbaaz";

console.log(person1.name);

