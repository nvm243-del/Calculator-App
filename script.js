function squareRoot() {
    try {
        const value = parseFloat(display.value);

        if (isNaN(value) || value < 0) {
            display.value = "Error";
            return;
        }

        const result = Math.sqrt(value);
        display.value = value + " √ = " + result;

    } catch (error) {
        display.value = "Error";
    }
}

function squareNumber() {
    try {
        const value = parseFloat(display.value);

        if (isNaN(value)) {
            display.value = "Error";
            return;
        }

        const result = value * value;
        display.value = value + "² = " + result;

    } catch (error) {
        display.value = "Error";
    }
}