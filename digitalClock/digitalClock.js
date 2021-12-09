window.onload = function() {
   
let output  = ""
    document.getElementById('date').innerHTML = output;
    console.log(output);

   
//new Intl.DateTimeFormat('de-DE', options).format(Xmas95);
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
 let hour = today.getHours();



console.log(today.toLocaleDateString("de-DE", options)); // 9/17/2016

  
    document.getElementById('date').value += today;
    console.log(today)
    let clock = document.createElement('span');
    clock.innerHTML = '<h2 class="clock" \>'+ today.toLocaleDateString("de-DE", options); + '</h2>';
    document.getElementById("date").appendChild(clock);
    
 
   
  /*   let m = today.getMinutes();
    let s = today.getSeconds();
    
    document.getElementById('date').value += hour;
    
    let hourr = document.createElement('span');
    hourr.innerHTML = '<p class="hour" \>'+ hour +":"+ m +":"+ s + '</p>';
    document.getElementById("date").appendChild(hourr); */
  

    startTime();
   
}
function startTime() {

    var today = new Date();
    var h = today.getHours();
    h = h > 12 ? h - 12 : h;
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

    
