//events classwork
var inputstring = document.getElementById("typer");

var word = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
var indexcharacter = 0;
inputstring.onkeydown = function(e) {
    console.log(e);
    console.log(word[indexcharacter]);
    e.preventDefault();
    inputstring.textContent = inputstring.textContent + word[indexcharacter];

    if (indexcharacter < (word.length - 1))
    {
        indexcharacter++;
    }
    else
    {
        indexcharacter = 0
    }
    
var resetButton = document.getElementsByTagName("button");
resetButton[0].onclick = function () {
    inputstring.textContent = "";
    indexcharacter = 0
}
};