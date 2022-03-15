/*  const counter = document.getElementById('chrono');


counter.addEventListener('click', function () {

  go();
  


})   */

/**<button id="pl">Play</button>
    <button id="pa">Pause</button>
      
    <div style="display:flex;">
        <p id="min">0</p>
            
        <p id="sec">0</p>
            
        <p id="milisec">0</p>
    </div> */
document.getElementById("chrono")
.setAttribute("disabled", "true")
var stats = 0;

function waitforme(ms) {
return new Promise(resolve => {
    setTimeout(() => { resolve('') }, ms);
})
}

function pauser() {
return new Promise(resolve => {
    let playbuttonclick = function () {
        document.getElementById("chrono")
            .removeAttribute("disabled")

        document.getElementById("chrono")
            .setAttribute("disabled", "true")

        document.getElementById("chrono")
            .removeEventListener("click", 
                        playbuttonclick);

        stats = 0;
        resolve("resolved");
    }
    document.getElementById("chrono")
        .addEventListener("click", playbuttonclick)
})
}

document.getElementById("chrono")
.addEventListener("click", function () {

stats = 1;

document.getElementById("chrono")
    .setAttribute("disabled", "true")

document.getElementById("chrono")
    .removeAttribute("disabled")

})

//let second;
async function go(millis) {
//second = document.getElementById("chrono");

var minutes = Math.floor(millis / 60000);
var seconds = ((millis % 60000) / 1000).toFixed(0);
var mill = ((millis % 600) / 100).toFixed(0);
for (minutes = 0; ; minutes++ ) {
  
  for(seconds = 0;;seconds++){
    for(mill = 0;;mill++){
 
    document.getElementById("chrono")
    .innerHTML = minutes + ":" + seconds + ":" + mill; 
    
  if(mill > 60){
    seconds++
    if(seconds > 60){
      minutes++
    }
  }
await waitforme(100);
if (stats == 1) await pauser();
   }
  }
    
}
}
go();



/* let intervalID = setInterval(() => {
  countere.innerHTML += "S---------";
}, 100);
setTimeout(() => {
  clearInterval(intervalID);
}, 10000);
 */


//window.setInterval(1000);
//https://stackoverflow.com/questions/41711744/how-do-you-refresh-inner-html-every-second
//https://www.freecodecamp.org/news/javascript-settimeout-js-timer-to-delay-n-seconds/
//https://stackoverflow.com/questions/6893130/how-to-set-one-minute-counter-in-javascript
//https://www.geeksforgeeks.org/how-to-pause-and-play-a-loop-in-javascript-using-event-listeners/
/* let t = document.getElementById('chrono').innerHTML
let sp = t.split(" -- "); 
let min = sp[0]  */

 document.getElementById("chrono").ondblclick = function() {myFunction()};

function myFunction() {
  document.getElementById("chrono").innerHTML = "40:00:00 :P";
} 