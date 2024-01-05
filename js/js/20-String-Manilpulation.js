// length word count 
let str = "Adnan chouhan";
document.write(str.length + "<br>");

// councat two string
let str1 = "Adnan";
let str2 = "chouhan";
let str3 = str1.concat(" ",str2);
document.write(str3 + "<br>")

// substring
let str4 = "This is javascript tutorial it is good tutorial";
let str5 = str4.substring(8,27);
document.write(str5 + "<br>");

// indexof() use in string starting possition on Word
let str6 = "This is javascript tutorial it is good tutorial";
let str7 = str6.indexOf("good");
document.write(str7 + "<br>");

let str8 = "This is javascript tutorial it is good tutorial";
let str9 = str8.indexOf('is',6);
document.write(str9 + "<br>");


// lastindexof() use in string starting possition on Word serching lastindex
let str10 = "This is javascript tutorial it is good tutorial";
let str11 = str10.lastIndexOf("t");
document.write(str11 + "<br>");

let str12 = "This is javascript tutorial it is good tutorial";
let str13 = str12.lastIndexOf('is',46);
document.write(str13 + "<br>");

// trim() space end strating  and End
let str14 =  "This is javascript tutorial it is good tutorial";
let str15 = str14.trim();
document.write(str14 + "<br>");
document.write(str15 + "<br>");


// toupperCase();
let a = "my name is adnan chouhan";
let b = a.toUpperCase();
document.write(b + "<br>");

// toLowerCase();
let c = "my name is adnan chouhan";
let d = c.toLowerCase();
document.write(d + "<br>");

// replace();
let e = "my name is adnan ";
let f = e.replace("adnan","arbaaz");
document.write(f + "<br>");

// includes();
let g = "my name is adnan ";
let h = g.includes("adnan");
document.write(h + "<br>");

// 
