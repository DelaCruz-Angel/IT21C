function updateDisplay(){
    let Textbox = document.getElementById("Textbox");
    let display = document.getElementById("display");

    display.textContent = Textbox.value;
}