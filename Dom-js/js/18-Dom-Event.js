function fn() {
            alert("button was onclick");
        }

        function fn1() {
            alert("button was click");
        }

        let a = document.getElementById("listner");
        a.addEventListener("click", fn1);

        let b = document.getElementById("listner2");
        b.addEventListener("click", function () {
            alert("This is Anonymous fuction with Eventlistener");
        });


        function fn2() {
            console.log("Button was click");
        }

        let multipleListner = document.getElementById("multiple");
        multipleListner.addEventListener("click", fn2);

        multipleListner.addEventListener("mouseover", function () {
            console.log("Button was MouseOver");
        });

        multipleListner.addEventListener("mouseout", function () {
            console.log("Button was MouseOut");
        });

