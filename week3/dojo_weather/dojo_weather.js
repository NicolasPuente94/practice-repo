
var coockie_bar = document.querySelector("#cookie_bar")

function removeCookie() {
    coockie_bar.remove();
}

var degreesInfo = document.querySelector(".degrees")

var changeTemp = document.querySelector(".degreesToday")

function switchDegreesF() {
    changeTemp.innerHTML = ('75° <span style="color: brown;">65°');
}

function switchDegreesC() {
    changeTemp.innerHTML = changeTemp;
}

function changeDegrees(element) {
    console.log(element.value);
    switchDegreesC();
    switchDegreesF();
}

