var button = document.getElementById("prettify");
button.addEventListener("click", prettify);

var boxCheck = document.getElementById("checkbox");
boxCheck.addEventListener("click", bling);

function prettify() {
    var text = document.getElementById("text");
    text.style.color = "goldenrod";
    text.style.fontSize = "24pt";
}

function bling(){
    var text = document.getElementById("text");
    
    if(boxCheck.checked) {
        text.style.fontWeight = "bold";
        text.style.color = "purple";
        text.style.textDecoration = "underline";
    } else {
        text.style.fontWeight = "normal";
        text.style.color = "golenrod";
        text.style.textDecoration = "none";
    }
}

