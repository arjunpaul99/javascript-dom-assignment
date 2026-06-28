// Set initial count
let count = 0;

// Select value text and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// Loop through all buttons and add a click event listener
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        // Find out which specific button was clicked using its class names
        const styles = e.currentTarget.classList;
        
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        // Change text color based on the number
        if (count > 0) {
            value.className = "positive";
        } else if (count < 0) {
            value.className = "negative";
        } else {
            value.className = "neutral";
        }

        // Update the actual text on screen
        value.textContent = count;
    });
});