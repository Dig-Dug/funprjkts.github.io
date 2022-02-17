function showCard(){
    let c = document.createElement("div");
    let d = document.createElement("p");
    let question = document.createElement("textarea");
    let answer = document.createElement("textarea");
    let save = document.createElement("button");
    let close = document.createElement("button");

    const elements = [c,d, question,answer,save,close];

    c.setAttribute('id','showCard');
    c.setAttribute('class', 'showCard');

    d.innerText = 'create flashcard';
    d.setAttribute('class', 'titel');

    question.setAttribute('class', 'showCardInput');
    question.setAttribute('placeholder', 'write question here');
   
    answer.setAttribute('class', 'showCardInput');
    answer.setAttribute('placeholder', ' write answer here');


    save.textContent = 'save';
    save.setAttribute('class', 'btn1');
    save.setAttribute('onCLick', 'saveIt()');
    close.textContent = 'close';
    close.setAttribute('class', 'btn1');
    close.setAttribute('style', 'left: 16px');
    close.setAttribute("onClick", "closeIt()");




    for(let i = 0; i < 6; i++){
       // console.log(elements);
        document.getElementById("fc").appendChild(elements[i]);

    }



}

function closeIt(){
  let u = document.getElementById('fc');
  u.innerHTML = '';
  console.log("reset")
    console.log("close");
}

function saveIt(){
    console.log("saave")
}





//https://www.educative.io/edpresso/how-to-add-an-id-to-element-in-javascript