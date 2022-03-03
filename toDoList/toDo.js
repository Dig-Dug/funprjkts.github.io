function addIt(){
/**
 *   let z = document.getElementById("questioning").value;
    console.log(z);
    let flash = document.createElement("div");
    flash.setAttribute("id", "flashRev");

    let question = document.createElement("h3");
    question.setAttribute("id", "questionRev");
    question.setAttribute("onClick", "reveal()");
    question.textContent = z; //TODO
 */
  
    let z = document.getElementById("write").value;

    let div = document.createElement("div");
    div.setAttribute('class', 'paper');
    div.setAttribute('id', 'paper');
    //div.setAttribute('id', 'paper');


    let p = document.createElement("p");
    p.setAttribute('class','writing');
    p.setAttribute('id','writing');
    p.textContent = z;
    
    let check = document.createElement("input");
    check.setAttribute('type','checkbox');
    check.setAttribute('class','checkbox');
    check.setAttribute('id','checkbox');



    let i = document.createElement("i"); //icon
     i.setAttribute('class', 'fas fa-trash');
     i.setAttribute('id', 'fas fa-trash');
     i.setAttribute('onClick', 'deleteThis()');


    const elements = [div,p,check,i];

console.log("oioioio")
    for (let i = 0; i < 4; i++) {
        // console.log(elements);
        document.getElementById("content").appendChild(elements[i]);
    }

   return;
}

function deleteThis(){
    let u = document.getElementById('paper');
    let o = document.getElementById('writing');
    let i = document.getElementById('checkbox');
    let a = document.getElementById('fas fa-trash');
   // u.innerHTML = '';
   u.remove();
   o.remove();
   i.remove();
   a.remove();
    console.log("§poiopiopiopi")
}