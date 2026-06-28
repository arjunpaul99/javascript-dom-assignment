function colorGenar(){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
  
}
function randomColor(){
    const color = colorGenar();
    const colorBox = document.querySelector("body");
    colorBox.style.background = color;
    const ColorCode = document.querySelector("#color-code")
    ColorCode.innerHTML = color.valueOf();
}



document.querySelector("#random-color").addEventListener("click",()=>{
    randomColor()
})