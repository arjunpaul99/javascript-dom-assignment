const password = document.querySelector("#password");
const generate = document.querySelector("#generate");
const copy = document.querySelector("#copy");

const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

generate.addEventListener("click", () => {

    let newPassword = "";

    for(let i = 0; i < 12; i++){

        let randomIndex = Math.floor(Math.random() * characters.length);

        newPassword += characters[randomIndex];

    }

    password.value = newPassword;

});

copy.addEventListener("click", () => {

    navigator.clipboard.writeText(password.value);

    alert("Password Copied!");

});