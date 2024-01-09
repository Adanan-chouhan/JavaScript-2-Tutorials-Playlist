let link = document.getElementById("anchor");
link.addEventListener("click", function (event) {
    console.log("link clicked...")
    event.preventDefault();
});


let form = document.getElementById("myform");
form.addEventListener("submit",function(e){
      e.preventDefault();
});
