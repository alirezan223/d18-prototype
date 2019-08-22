let button1 = document.getElementById('buttonOne');
let text1 = document.getElementById('Paragraf')
button1.addEventListener('click', onButtonOneClicked);




function onButtonOneClicked() {

    if (text1.style.display == 'none') {
        text1.style.display = '';
        button1.innerHTML = 'hide';
    } else {
        text1.style.display = 'none';
        button1.innerHTML = 'show';
    }

    TE
}