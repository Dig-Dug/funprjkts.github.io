const buttonElement = document.getElementById('chrono');
let t = document.getElementById('chrono').innerHTML;

 let sp = t.split(" -- "); 
let min = sp[0] 
buttonElement.addEventListener('click', function () {


  for(let i = 0; i < 60; i++){

let seconds = 0;

document.getElementById("chrono").innerHTML = seconds;
  }
  
}) 

document.getElementById("chrono").ondblclick = function() {myFunction()};

function myFunction() {
  document.getElementById("chrono").innerHTML = "40:00:00 :P";
}


window.setInterval(1000);
//https://stackoverflow.com/questions/41711744/how-do-you-refresh-inner-html-every-second
//https://www.freecodecamp.org/news/javascript-settimeout-js-timer-to-delay-n-seconds/