/* window.onload = function () {

    let i = document.createElement("i");
    i.setAttribute('class','far fa-times-circle');
    i.setAttribute('id','close');
    i.setAttribute('onClick','quit(this)');


    let txt = document.createElement("textarea");
    txt.setAttribute('id','sticky1');
    txt.setAttribute('onkeypress','process(event, this)');
    txt.textContent= "note....";



    document.getElementById("content").appendChild(txt);
    document.getElementById("content").appendChild(i);

    document.getElementById("need1").setAttribute('class', 'need2');
    document.getElementById("need1").disabled = true;
} */
window.onload=not();
function not(){ //TODO
    let i = document.createElement("i");
    i.setAttribute('class','far fa-times-circle');
    i.setAttribute('id','close');
    i.setAttribute('onClick','quit(this)');


    let txt = document.createElement("textarea");
    txt.setAttribute('id','sticky1');
    txt.setAttribute('onkeypress','process(event, this)');
    txt.setAttribute('placeholder','note....');
    //txt.textContent= "note....";
    


    document.getElementById("content").appendChild(txt);
    document.getElementById("content").appendChild(i);

    document.getElementById("need1").setAttribute('class', 'need2');
    document.getElementById("need1").disabled = true;
}

function submit(){
    let div = document.createElement("div");
    div.setAttribute('id','sticky');
    
    document.getElementById("content").appendChild(div);
        console.log("oioioioioi")   
}

function multiply(){
  //  document.getElementById("need1").disabled = false;
    let o = document.getElementById("sticky1").value;

let div = document.createElement("div");
div.setAttribute('id','sticky');

let txt = document.createElement('p');
txt.setAttribute('id', 'texta');
txt.textContent = o;
//div.setAttribute('class','content2');


document.getElementById("content").appendChild(div);
document.getElementById("content").appendChild(txt);

    console.log("oioioioioi",o)
}

function quit(){
 let b = document.getElementById("dork");
 b.setAttribute('id','');

 var n = document.getElementById("close");
 var m = document.getElementById("sticky1");
 //var myobj = document.getElementById("demo");
 n.remove();
 m.remove();
 document.getElementById("need1").setAttribute('class', 'need1');


 document.getElementById("need1").disabled = false;

console.log("oioioioioi")
}


function process(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { //Enter keycode
        multiply();
       // quit();
       // alert("Sending your Message : " + document.getElementById('sticky1').value);
    }
}
