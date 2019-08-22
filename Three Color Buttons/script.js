let redButton = document.getElementById("red");


redButton.addEventListener("click", onRedButtonClicked);

function onRedButtonClicked() {
    alert("You Clicked The Red Button")
}

function onRedButtonClicked() {
    document.body.style.backgroundColor = "red";
}
//----------------------------------------------------

let greenButton = document.getElementById("green");

greenButton.addEventListener("click", onGreenButtonClicked);

function onGreenButtonClicked() {
    alert("You Clicked The Green Button")
}

function onGreenButtonClicked() {
    document.body.style.backgroundColor = "green";
}

//-----------------------------------------------------

let blueButton = document.getElementById("blue");

blueButton.addEventListener("click",
    onBlueButtonKlicked);

function onBlueButtonKlicked() {
    document.body.style.backgroundColor = "blue";
};