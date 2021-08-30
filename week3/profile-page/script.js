console.log("page loaded...");

// Counter Variables
var requestCounter = 2;
var connectionsCounter = 500;

// Bages Variables
var requestBadge = document.querySelector(".badge")
var connectionsBadge = document.querySelector(".secondBadge");

// Remove Variables
var removeConnection = document.querySelector(".first-request");
var removeSecondConnection = document.querySelector(".second-request");

// Functions for first request / card header
function add() { 
    connectionsCounter++;
    connectionsBadge.innerText = connectionsCounter + "+";
    console.log(connectionsCounter);
    subtract();
}

function subtract() {
    requestCounter--;
    requestBadge.innerText = requestCounter;
    hideConnection();
}

function hideConnection() {
    removeConnection.remove();
}


// Functions for second request / card header
function addTwo() {
    connectionsCounter++;
    connectionsBadge.innerText = connectionsCounter + "+";
    console.log(connectionsCounter);
    subtractTwo();
}

function subtractTwo() {
    requestCounter--;
    requestBadge.innerText = requestCounter;
    secondHideConnection();
}


function secondHideConnection() {
    removeSecondConnection.remove();

}

// Edit profile functions

var randomName = document.querySelector('#mainName')

function switchName() {
    randomName.innerText = "Sofi Moreno"
}


// darkmode

function active(element) {
    element.style.backgroundColor = "#222";
    
}