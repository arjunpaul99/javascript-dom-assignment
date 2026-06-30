const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", () => {

    const bangla = Number(document.querySelector("#bangla").value);
    const english = Number(document.querySelector("#english").value);
    const math = Number(document.querySelector("#math").value);

    const total = bangla + english + math;
    const average = total / 3;

    let grade = "";

    if (average >= 80) {
        grade = "A+";
    } else if (average >= 70) {
        grade = "A";
    } else if (average >= 60) {
        grade = "A-";
    } else if (average >= 50) {
        grade = "B";
    } else if (average >= 40) {
        grade = "C";
    } else if (average >= 33) {
        grade = "D";
    } else {
        grade = "F";
    }

    result.innerHTML = `
        Total: ${total} <br>
        Average: ${average.toFixed(2)} <br>
        Grade: ${grade}
    `;

});