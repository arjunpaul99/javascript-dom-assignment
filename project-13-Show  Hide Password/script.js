const password = document.querySelector("#password");
const toggleBtn = document.querySelector("#toggleBtn");

toggleBtn.addEventListener("click", () => {

    if(password.type === "password"){

        password.type = "text";
        toggleBtn.textContent = "Hide Password";

    }else{
        password.type = "password";
        toggleBtn.textContent = "Show Password";

    }

});