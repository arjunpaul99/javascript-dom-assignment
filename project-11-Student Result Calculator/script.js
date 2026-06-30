const btn = document.querySelector("#resultBtn");
const result = document.querySelector("#result");

btn.addEventListener("click", () => {

    const bangla = Number(document.querySelector("#bangla").value);
    const english = Number(document.querySelector("#english").value);
    const math = Number(document.querySelector("#math").value);
    const science = Number(document.querySelector("#science").value);
    const ict = Number(document.querySelector("#ict").value);


    if ( bangla < 33 || english < 33 || math < 33 || science < 33 || ict < 33 ) {
        result.innerHTML = `Total : Failed <br> Grade : F `;
        return;
    }

    const total = bangla + english + math + science + ict;
    const average = total / 5;

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

    result.innerHTML = ` Total Marks : ${total} <br> Average : ${average.toFixed(2)} <br>
    Grade : ${grade} <br> Result : Pass`;

});