// object prototype
function student(first,last,age,cls){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
    }
    
    student.prototype.cuntry = "india";

    var student1 = new student("Adnan","Chouhan",20,12);
    var student2 = new student("Arbaaz","Chouhan",17,10);
    
    
    console.log(student1.cuntry);
    console.log(student2);
    