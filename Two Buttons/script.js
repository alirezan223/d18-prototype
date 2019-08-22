let button1 = document.getElementById('buttonOne');
let button2 = document.getElementById('buttonTwo');
let text1 = document.getElementById('Paragraf')
button1.addEventListener('click', onButtonOneClicked);
button2.addEventListener('click', onButtonTwoClicked);



function onButtonOneClicked() {
    text1.innerHTML = 'Button 1 was clicked!';
}

function onButtonTwoClicked() {
    text1.innerHTML = 'You clicked on Button 2!';
}