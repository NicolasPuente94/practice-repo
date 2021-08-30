var counter = 0;
var counterTwo = 0;
var counterThree = 0;

var likesCounter = document.querySelector("#likesNum")
var likesCounterTwo = document.querySelector("#likesNumTwo")
var likesCounterThree = document.querySelector("#likesNumThree")

function add() {
    counter++;
    likesCounter.innerText = counter + " likes(s)";
    console.log(counter);
}

function addTwo() {
    counterTwo++;
    likesCounterTwo.innerText = counterTwo + " likes(s)";
    console.log(counterThree);
}

function addThree() {
    counterThree++;
    likesCounterThree.innerText = counterThree + " likes(s)";
    console.log(counterTwo);
}



