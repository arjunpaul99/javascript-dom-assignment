const quotes = [
    "Success comes from hard work.",
    "Never give up.",
    "Believe in yourself.",
    "Dream big.",
    "Practice makes perfect.",
    "Every day is a new opportunity.",
    "Stay positive and keep learning."
];

const button = document.getElementById("btn");
const quote = document.getElementById("quote");

button.addEventListener("click", function(){

    const randomIndex = Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[randomIndex];

});