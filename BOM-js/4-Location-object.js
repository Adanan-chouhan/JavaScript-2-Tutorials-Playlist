 // this is property is location
 console.log(location.href);
 console.log(location.pathname);
 console.log(location.protocol);


 // there are type of Redirect location methed
 function fun3() {
     window.location = "https://www.google.com";
 }

 function fun4() {
     location.href = "https://www.google.com";
 }

 function fun5() {
     location.assign("https://www.google.com");
 }  

 function fun6() {
     location.replace("https://www.google.com");
 }  

 function fun7() {
     location.reload();
 }  