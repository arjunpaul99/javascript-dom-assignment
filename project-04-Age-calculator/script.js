document.getElementById("btn-calculate").addEventListener("click", function () {
    const inputDate = document.getElementById("birthdate").value;
    const errorMsg = document.getElementById("error-message");
    
    errorMsg.textContent = "";
    resetDisplay();

    if (!inputDate) {
        errorMsg.textContent = "Please select a valid date.";
        return;
    }

    const birthDate = new Date(inputDate);
    const today = new Date();

    
    if (birthDate > today) {
        errorMsg.textContent = "Birth date cannot be in the future!";
        return;
    }

    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth() + 1; // getMonth() is 0-indexed (Jan is 0)
    let birthDay = birthDate.getDate();

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDay = today.getDate();

    let calculatedYears, calculatedMonths, calculatedDays;


    calculatedYears = currentYear - birthYear;


    if (currentMonth >= birthMonth) {
        calculatedMonths = currentMonth - birthMonth;
    } else {
        calculatedYears--;
        calculatedMonths = 12 + currentMonth - birthMonth;
    }

    if (currentDay >= birthDay) {
        calculatedDays = currentDay - birthDay;
    } else {
        calculatedMonths--;
        
        const daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
        calculatedDays = daysInPreviousMonth + currentDay - birthDay;

        if (calculatedMonths < 0) {
            calculatedMonths = 11;
            calculatedYears--;
        }
    }

    document.getElementById("years").textContent = calculatedYears;
    document.getElementById("months").textContent = calculatedMonths;
    document.getElementById("days").textContent = calculatedDays;
});

function resetDisplay() {
    document.getElementById("years").textContent = "--";
    document.getElementById("months").textContent = "--";
    document.getElementById("days").textContent = "--";
}