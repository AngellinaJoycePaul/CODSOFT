let display = document.getElementById("display");
let history = document.getElementById("history");

function press(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let result = eval(display.value);
        history.innerHTML += `<div>${display.value} = <strong>${result}</strong></div>`;
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// Scientific functions
function square() {
    display.value = Math.pow(display.value, 2);
}

function sqrt() {
    display.value = Math.sqrt(display.value);
}

function sin() {
    display.value = Math.sin(display.value);
}

function cos() {
    display.value = Math.cos(display.value);
}

function tan() {
    display.value = Math.tan(display.value);
}

function log() {
    display.value = Math.log10(display.value);
}

/* 🔥 Keyboard Support */
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/().".includes(key)) {
        display.value += key;
    } 
    else if (key === "Enter") {
        calculate();
    } 
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } 
    else if (key === "Escape") {
        clearDisplay();
    }
});