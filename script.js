var textbox = document.querySelector("#textbox");
var char = document.querySelector("#char");
var word = document.querySelector("#word");


textbox.addEventListener('input',function(){
    var text = this.value;
    let char = text.length;
    document.querySelector("#char").innerHTML = char;

    let word = text.split(" ");
    document.querySelector("#word").innerHTML = word.length;

});