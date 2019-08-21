let input = document.getElementById("name");
let button = document.getElementById("button");



button.addEventListener("click", onButtonClick);

// function onButtonClick() {
//     alert("Hello " + input.value);
// }



function onButtonClick() {
    if (input.value == "") {
        alert("U A MONKEY :D");
    } else {
        alert("Hello " + input.value);
    }
}