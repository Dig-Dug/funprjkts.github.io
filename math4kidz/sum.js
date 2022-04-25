
function add(){
    let num1 = document.getElementById('operand1');
    let sign = document.getElementById('sign');
    let num2 = document.getElementById('operand2');




//https://www.educative.io/edpresso/how-to-generate-a-random-number-between-a-range-in-javascript
sign.innerHTML = '+';
num1.setAttribute("value", num1.innerHTML = Math.floor(Math.random() * 20));
num2.setAttribute("value",num2.innerHTML = Math.floor(Math.random() * 20));


let n1 = num1.getAttribute("value");
let n2 = num2.getAttribute("value");
let res = parseInt(n1) + parseInt(n2)
console.log(res)

let a = document.createElement("h2");
a.setAttribute("id", "pa1"); a.setAttribute("value", a.innerHTML = Math.floor(Math.random() * 20));
a.setAttribute("onclick", "no(this)");

let b = document.createElement("h2");
b.setAttribute("id", "pa2"); b.setAttribute("value", b.innerHTML = Math.floor(Math.random() * 20));
b.setAttribute("onclick", "no(this)");

let c = document.createElement("h2");
c.setAttribute("onclick", "yes()");
c.setAttribute("id", "pa3"); c.setAttribute("value", c.innerHTML = res );

/*  let opt = document.createElement("h2");
opt.setAttribute("id", "pa4"); opt.setAttribute("value", opt.innerHTML = Math.floor(Math.random() * 10));
opt.setAttribute("onclick", "no(this)");  */

 o = document.getElementById("pa"); 
 if(a.innerHTML > 0 && a.innerHTML < 10){
     o.append(c,a,b) ;
    } else if(a.innerHTML > 10){
     console.log("a.innerHTML > 10")
    o.append(b,a,c) ;
 }//TODO when same result.......
/*  else if(a.innerHTML = b.innerHTML||a.innerHTML == c.innerHTML
    || b.innerHTML == c.innerHTML ){
    console.log("________________________")
   o.append(b,a,c) ;
} */

else{o.append(b,c,a)}

return[a,b,c, opt]

}



 
function yes(){
    console.log("yes");
    const el = document.getElementById('pa1'); 
    const ell = document.getElementById('pa2'); 
    const elll = document.getElementById('pa3'); 
    //const ellll = document.getElementById('pa4'); 

    let correct = document.createElement("audio");
    correct.src   = 'correct.mp3';
    correct.play();

    el.remove();
    ell.remove();
    elll.remove();
    //ellll.remove();
    add();
    const imgo = document.getElementById("nope");
    if(imgo){
    imgo.remove();}

    return;
}

function no(elem){

let r = document.createElement("img");
r.setAttribute("id", "nope");
r.src = 'nop.gif';
document.getElementById('pa').appendChild(r);
console.log("No");

let error = document.createElement("audio");
error.src   = 'error.mp3';

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_shake
if (elem.id == "pa3") {
    r.remove(); 
    console.log("eeeeeeeeeeeeeeeeee");
}else if (elem.id == "pa1") {
    console.log("eeeeeeeeeeeeeeeeee");
    r.remove(); error.play();
}/* else if (elem.id == "pa4") {
    console.log("eeeeeeeeeeeeeeeeee");
    r.remove(); error.play();return;
} */else if (elem.id == "pa2") { 
    r.remove();error.play();
    return
}

}

let tor = add();
//https://stackoverflow.com/questions/17114825/how-to-disable-button-after-one-click-with-validation-using-javascript
 let uu = document.getElementById("sum").onclick = function() {
   
    if (uu.length > 0) {
      uu[0].remove();
    }
    console.log("mmmmmmmmmmmmmmm")
   this.disabled = true;
  

}  

document.getElementById("subs").addEventListener("click", returnSubs);
function returnSubs() {
    subs();
  }
 







/* let msg = document.createElement("p");
msg.innerHTML = '<p id="parent" name = "parent"> ' + fname.value + '</p>';
document.getElementById("here").appendChild(msg); */ 

