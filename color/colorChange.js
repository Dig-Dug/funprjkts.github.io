/* function randomColor() {
    console.log(Math.random() + "   --  sth");
    document.getElementById("color").innerHTML = Math.random();
    return Math.random();
}

const colors = ["lightcoral", "maroon", "deeppink", "blueviolet", "lightpink", "chartreuse", "navy"];
function changeColor() {
    for (i = 0; i < 5; i++) {
        document.body.style.backgroundColor = colors.shift(i += 5);
        console.log("-> " + colors[i]);
        console.log("dedww");
    }
} */
const changeColor= () => {
let i =   Math.floor(Math.random() * (255 - 0 + 1)) + 0;
 
 let rgb = "rgb";

 r = document.body.style.color = i * i;
 g = document.body.style.color = i / i;
 b = document.body.style.color = i;
 

document.body.style.backgroundColor = rgb + "(" +(r+ " " + g + " "+ b )+ ")";




}