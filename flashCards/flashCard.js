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
    question.setAttribute('id', 'questioning');
    question.setAttribute('name', 'question');
    question.setAttribute('placeholder', 'write question here');
   
    answer.setAttribute('class', 'showCardInput');
    answer.setAttribute('id', 'answering');
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
    

   
    return;

}

function closeIt(){
  let u = document.getElementById('fc');
  u.innerHTML = '';

 
  console.log("reset");
  
    console.log("close");
}

function saveIt(){
   let z = document.getElementById("questioning").value;
    console.log(z); 
    let flash = document.createElement("div");
    flash.setAttribute("id","flashRev");

    let question = document.createElement("h3");
    question.setAttribute("id", "questionRev");
    question.setAttribute("onClick", "reveal()");
    question.textContent= z; //TODO

    const elements = [flash, question];
    for(let i = 0; i < 2; i++){
        document.getElementById("flashcards").appendChild(elements[i]);
    }
    console.log("saave");
  //  showCard();
}
function reveal(){
    let z = document.getElementById("answering").value;

    let answer = document.createElement("h3");
    answer.setAttribute("id", "answerRev");
    answer.textContent= z;
    
    document.getElementById("flashcards").appendChild(answer);


    console.log("wwww");
   
    return;
}


function deleteCards(){
    let u = document.getElementById('flashcards');
    u.innerHTML = '';
  }


//https://www.educative.io/edpresso/how-to-add-an-id-to-element-in-javascript