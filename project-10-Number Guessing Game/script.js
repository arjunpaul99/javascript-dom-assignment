const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

const guessInput = document.querySelector("#guess");
const checkBtn = document.querySelector("#checkBtn");
const message = document.querySelector("#message");

checkBtn.addEventListener("click", () => {

    const userGuess = Number(guessInput.value);
    if(userGuess === randomNumber){
        message.textContent = " Congratulations! You guessed correctly.";
    }else if(userGuess < randomNumber){
        message.textContent = "Too Low!";
    }else{
        message.textContent = "Too High!";
    }
});