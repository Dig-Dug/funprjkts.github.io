window.onload = function() {
    let txt = document.createElement("textarea");
    txt.setAttribute('id','sticky1');
    txt.textContent= "note...."

    let i = document.createElement("i");
  i.setAttribute('class','far fa-times-circle')


    document.getElementById("content").appendChild(txt);
    document.getElementById("content").appendChild(i);
}

function submit(){
    let div = document.createElement("div");
    div.setAttribute('id','sticky');
    
    document.getElementById("content").appendChild(div);
        console.log("oioioioioi")   
}

function multiply(){
let div = document.createElement("div");
div.setAttribute('id','sticky');

document.getElementById("content").appendChild(div);
    console.log("oioioioioi")
}