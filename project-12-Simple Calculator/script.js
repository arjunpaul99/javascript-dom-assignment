const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const result = document.querySelector("#result");

document.querySelector("#addd").addEventListener("click", () => {

    const answer = Number(num1.value) + Number(num2.value);

    result.textContent = `Result: ${answer}`;

});

document.querySelector("#sub").addEventListener("click", () => {

    const answer = Number(num1.value) - Number(num2.value);

    result.textContent = `Result: ${answer}`;

});

document.querySelector("#mul").addEventListener("click", () => {

    const answer = Number(num1.value) * Number(num2.value);

    result.textContent = `Result: ${answer}`;

});

document.querySelector("#div").addEventListener("click", () => {

    if(Number(num2.value) === 0){
        result.textContent = "Cannot divide by zero";
        return;
    }

    const answer = Number(num1.value) / Number(num2.value);

    result.textContent = `Result: ${answer}`;

});