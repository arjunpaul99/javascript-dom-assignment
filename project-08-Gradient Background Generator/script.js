const btn = document.querySelector("#generateBtn");
const cssCode = document.querySelector("#cssCode");

function randomColor(){

    const letters = "0123456789ABCDEF";

    let color = "#";

    for(let i = 0; i < 6; i++){

        color += letters[Math.floor(Math.random() * 16)];

    }

    return color;

}

btn.addEventListener("click", () => {

    const color1 = randomColor();
    const color2 = randomColor();

    const gradient =
        `linear-gradient(to right, ${color1}, ${color2})`;

    document.body.style.background = gradient;

    cssCode.textContent =
    `background: ${gradient};`;

});