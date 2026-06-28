const textarea = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");


textarea.addEventListener("input", function () {
    const currentLength = textarea.value.length;
    const maxLength = textarea.getAttribute("maxlength");
    totalCounter.textContent = currentLength;
    remainingCounter.textContent = maxLength - currentLength;
});