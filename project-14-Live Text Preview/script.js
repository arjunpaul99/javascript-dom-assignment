const textInput = document.querySelector("#textInput");
const preview = document.querySelector("#preview");

textInput.addEventListener("input", () => {
    if(textInput.value.trim() === ""){
        preview.textContent = "Your text will appear here...";
    }else{
        preview.textContent = textInput.value;
    }
});