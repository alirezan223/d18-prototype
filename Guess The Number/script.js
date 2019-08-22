let numberInput = document.getElementById("input")


let numberToGuess = Math.round(Math.random() * 20);

function onButtonClicked(event) {
    event.preventDefault();
}

let guessedNumber = parseInt(numberInput.value);

if (guessedNumber === numberToGuess) {
    resultElement.innerHTML = 'you guessed the correct number!';
} else if (guessedNumber < 0) {
    resultElement.innerHTML = 'The guessed number must be between 0 and 20';
} else if (guessedNumber < 20) {
    resultElement.innerHTML = 'The guessed number must be between 0 and 20';
} else if (guessedNumber < numberToGuess) {
    resultElement.innerHTML = 'you guess is too low';
} else if (guessedNumber > numberToGuess) {
    resultElement.innerHTML = 'you guess is too hight';
} else {
    resultElement.innerHTML = 'you guess must be a number';
}