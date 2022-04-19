
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


 
// console.log(a.innerHTML,b,c)
 o = document.getElementById("pa"); 
 if(a.innerHTML > 0 && a.innerHTML < 10){
     o.append(c,a,b) ;
    } else if(a.innerHTML > 10){
     console.log("a.innerHTML > 10")
    o.append(b,a,c) ;
 }else{o.append(b,c,a)}

return[a,b,c]

/* let n1 = num1.getAttribute("value");
let n2 = num2.getAttribute("value");
let result = parseInt(n1) + parseInt(n2);



    let pa1 = document.getElementById('pa1');
    let pa2 = document.getElementById('pa2');
    let pa3 = document.getElementById('pa3');

    pa1.setAttribute("value", pa1.innerHTML = Math.floor(Math.random() * 20));
    pa1.setAttribute("onclick", "test()");

    pa2.setAttribute("value", pa2.innerHTML = Math.floor(Math.random() * 20));
    pa2.setAttribute("onclick", "test()");
    
    pa3.innerHTML = result; 
    pa3.setAttribute("onclick", "test()");

    console.log("hier-->");
    let z = pa1.getAttribute("value");
    let zz = pa2.getAttribute("value"); 
    return [result,parseInt(z),parseInt(zz)]; */
}

let tor = add();
/* let tst = tor[0];
let tst1 = tor[1];
let tst2 = tor[2];  */
/*console.log(tor, "TOR", tst,tst1,tst2);  */
 
function yes(){
    console.log("yes");
    const el = document.getElementById('pa1'); 
    const ell = document.getElementById('pa2'); 
    const elll = document.getElementById('pa3'); 

    let correct = document.createElement("audio");
    correct.src   = 'correct.mp3';
    correct.play();

    el.remove();
    ell.remove();
    elll.remove();
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


if (elem.id == "pa3") {
    r.remove(); 
    console.log("eeeeeeeeeeeeeeeeee");
}else if (elem.id == "pa1") {
    console.log("eeeeeeeeeeeeeeeeee");
    r.remove(); error.play();
}else if (elem.id == "pa2") { 
    r.remove();error.play();
    return
}

}
/*   if(document.getElementById('pa3') === tor) {
    console.log("Yertzrztrssi",tor);
    add(); return;
  } else{
      console.log("ddddd")
  }
} */
//io = tor;

//p + q  /* = io  ? add()  : nope() */
  //  console.log(p,q,r,io,"<----Wot???")
//}

function nope(){
    //disable 
}


/* let msg = document.createElement("p");
msg.innerHTML = '<p id="parent" name = "parent"> ' + fname.value + '</p>';
document.getElementById("here").appendChild(msg); */ 


/**function test(io){
p = pa1; 
q = pa2; 
r = pa3; 
if(document.getElementById('p3') == io){
    console.log("Yessi");
    add();
}

io = tor;

}**/