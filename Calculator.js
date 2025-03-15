document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    // Loop through all buttons and add event listeners
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.innerText;

            if (value === "=") {
                calculateResult();
            } else if (value === "AC") {
                clearDisplay();
            } else if (value === "x²") {
                calculateSquare();
            } else {
                appendToDisplay(value);
            }
        });
    });

    // Function to append value to the display
    function appendToDisplay(value) {
        if (display.value === "Error") {
            display.value = ""; // Clear error before new input
        }
        display.value += value;
    }

    // Function to clear the display
    function clearDisplay() {
        display.value = "";
    }

    // Function to calculate the result
    function calculateResult() {
        try {
            if (display.value.trim() === "") {
                display.value = "Error"; // Display error in screen
                return;
            }
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error"; // Display error in screen
        }
    }

    // Function to calculate the square of the number
    function calculateSquare() {
        const value = parseFloat(display.value);
        if (!isNaN(value)) {
            display.value = value * value;
        } else {
            display.value = "Error"; // Display error in screen
        }
    }
});
