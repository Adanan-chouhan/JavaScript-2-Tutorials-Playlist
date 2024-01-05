//  input = 1, "y" ,"yes" output = continue....
//  input = 0, "n" ,"no" output = end....

let input = "yes";

switch (input) {
    case 1: //input == 1
        document.write("Continue....");
        break;
    case "y":  //input == "y"
        document.write("Continue....");
        break;
    case "yes": //input == "yes"
        document.write("Continue....");
        break;
    case 0:  //input == 0
        document.write("End....");
        break;
    case "n":  //input == "n"
        document.write("End....");
        break;
    case "no":  //input == "no"
        document.write("End....");
        break;
    default: //input is wrong
        document.write("Wrong input");
}