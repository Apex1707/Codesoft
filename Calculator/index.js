const display=document.getElementById("screen");

function appendtoDisplay(input){
    display.value+=input;
}

function clearDisplay(){
    display.value="";
}

function toCalculate(){
    try {
        display.value=eval(display.value)
    } catch (error) {
        display.value="ERROR";
    }
}