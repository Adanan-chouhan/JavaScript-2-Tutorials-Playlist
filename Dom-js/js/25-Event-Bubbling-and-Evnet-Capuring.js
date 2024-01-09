  // bubbling Event
  let a = document.getElementById("mydiv");
  let b = document.getElementById("button");

  b.addEventListener("click", btnfn);
  a.addEventListener("click", divfn);
  document.body.addEventListener("click", bodyfn);

  function btnfn() {
      console.log("button clicked...");;
  }

  function divfn() {
      console.log("div clicked...");;
  }

  function bodyfn() {
      console.log("body clicked...");;
  }

  // capuring Event
  let c = document.getElementById("mydiv");
  let d = document.getElementById("button");

  d.addEventListener("click", btn, true);
  c.addEventListener("click", div, true);
  document.body.addEventListener("click", body, true);

  function btn() {
      console.log("this is child");
  }

  function div() {
      console.log("this is father-child");
  }

  function body() {
      console.log("this is grandfather child");
  }

  // stopPropagation();
  let e = document.getElementById("mydiv");
  let f = document.getElementById("button");

  f.addEventListener("click", btn);
  e.addEventListener("click", div);
  document.body.addEventListener("click", body);


  function btn(event) {
      event.stopPropagation();
      console.log("this is child");
  };

  function div(event) {
      event.stopPropagation();
      console.log("this is father-child");
  };

  function body() {
      console.log("this is grandfather child");
      
  }; 