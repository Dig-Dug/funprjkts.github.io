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
    //div.setAttribute('id', 'paper');


    let p = document.createElement("p");
    p.setAttribute('class','writing');
    p.textContent = z;
    let check = document.createElement("input");
    check.setAttribute('type','checkbox');
    check.setAttribute('class','checkbox');



    let i = document.createElement("i"); //icon
     i.setAttribute('class', 'fas fa-trash');
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
    let u = document.getElementById('content');
    u.innerHTML = '';
    console.log("§poiopiopiopi")
}