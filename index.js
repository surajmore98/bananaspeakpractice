let input = prompt("Please enter your Name!!");
alert("Welcome to the Banana Talk " + input + " !\nLets start the game.");

var button  = document.querySelector("#btn");
var inputArea  = document.querySelector("#input-text");
var outputArea = document.querySelector("#output-text");

const url = "https://api.funtranslations.com/translate/minion.json";

function getRequestUrl(input) {
    return url + "?text=" + input;
};

function errorHandler(error) {
    console.log(error);
    alert("We have error with API");
};

button.addEventListener("click" , () => {
    var inputText = inputArea.value;
    fetch(getRequestUrl(inputText))
        .then(response => response.json())
        .then(data => {
            var output  = data.contents.translated;
            outputArea.innerText = output;
        }).catch(error => errorHandler(error));
});
