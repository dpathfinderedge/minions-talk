
var textInput = document.querySelector('#txt-input');
var btnTranslate = document.querySelector('#btn-translate');
var textOutput = document.querySelector('#txt-output');

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickHandler() {

    var inputText = textInput.value;

    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var tText = json.contents.translated;
            textOutput.innerText = tText;
        })
        .catch(errorHandler)

};

btnTranslate.addEventListener("click", clickHandler)