let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

console.log(
    "%cKALKULATOR I LODHT VEQ SA ME THAN QE KOM BO DIQKA",
    "font-size: 50px; font-weight: bold; background: linear-gradient(to right, red,  blue); color: white; padding: 10px; border-radius: 5px;"
  );
  
