
function add(){
    let num1 = document.getElementById('operand1');
    let sign = document.getElementById('sign');
    let num2 = document.getElementById('operand2');


sign.innerHTML = '+'

//https://www.educative.io/edpresso/how-to-generate-a-random-number-between-a-range-in-javascript

num1.innerHTML = Math.floor(Math.random() * 20);
num2.innerHTML = Math.floor(Math.random() * 20);
//
let r = num1.value;
let o = num1.value;
let result = r + o;
//
let pa1 = document.getElementById('pa1');
    let pa2 = document.getElementById('pa2');
    let pa3 = document.getElementById('pa3');
   
    pa1.innerHTML = Math.floor(Math.random() * 20);
    pa1.setAttribute("onclick", "test()");
    pa2.innerHTML = Math.floor(Math.random() * 20);
    pa2.setAttribute("onclick", "test()");
    pa3.innerHTML = Math.floor(Math.random() * 20);
    pa3.setAttribute("onclick", "test()");

    console.log("55");
    return result;
}

let tor = add();
console.log(tor);

function test(io){
p = pa1; 
q = pa2; 
r = pa3; 

io = tor;

p + q  /* = io  ? add()  : nope() */
    console.log(p,q,r,io,"jkkjfoiwejfoiwehoi")
}

function nope(){
    //disable 
}


/* let msg = document.createElement("p");
msg.innerHTML = '<p id="parent" name = "parent"> ' + fname.value + '</p>';
document.getElementById("here").appendChild(msg); */