let x = document.getElementById("myinput");
   x.addEventListener("focus",myFocusfunction);
   x.addEventListener("blur",myBlurfunction);

   x.addEventListener("change",function(){
    document.write(this.value)
   });

   x.addEventListener("input",function(){
    console.log(this.value)
   });


   function myFocusfunction(){
    x.style.background = "red";
   }

   function myBlurfunction(){
    x.style.background = "white";
   }

