window.onload = function() {

let output  = ""
    document.getElementById('date').innerHTML = output;
    console.log(output);

   
//new Intl.DateTimeFormat('de-DE', options).format(Xmas95);
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
 let hour = today.getHours();

console.log(today.toLocaleDateString("de-DE", options)); // 9/17/2016

   // var today = new Date();
    document.getElementById('date').value += today;
    console.log(today)
    let clock = document.createElement('span');
    clock.innerHTML = '<h2 class="clock" \>'+ today.toLocaleDateString("de-DE", options); + '</h2>';
    document.getElementById("date").appendChild(clock);
    
   /* TODO  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_datetime
    document.getElementById('date').value += hour;
    
    let hourr = document.createElement('span');
    hourr.innerHTML = '<h1 class="hour" \>'+ hour + '</h1>';
    document.getElementById("date").appendChild(hourr);
     */
   
  
}
    
