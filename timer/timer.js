const counter = document.getElementById('chrono');
const countere = document.querySelector(".chrono");

counter.addEventListener('click', function () {

  counter.innerHTML = "ioio";
  


}) 

let intervalID = setInterval(() => {
  countere.innerHTML += "S---------";
}, 100);
setTimeout(() => {
  clearInterval(intervalID);
}, 10000);



window.setInterval(1000);
//https://stackoverflow.com/questions/41711744/how-do-you-refresh-inner-html-every-second
//https://www.freecodecamp.org/news/javascript-settimeout-js-timer-to-delay-n-seconds/

/* let t = document.getElementById('chrono').innerHTML
let sp = t.split(" -- "); 
let min = sp[0]  */

document.getElementById("chrono").ondblclick = function() {myFunction()};

function myFunction() {
  document.getElementById("chrono").innerHTML = "40:00:00 :P";
}