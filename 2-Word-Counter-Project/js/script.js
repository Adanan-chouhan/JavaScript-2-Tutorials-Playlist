let texbox = document.getElementById("texbox");
texbox.addEventListener("input", function () {
    var text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim();
    let words = text.split(" ");
    let cleanList = words.filter(function (elm) {
        return elm != "";
    })
    document.getElementById("word").innerHTML = cleanList.length;
});