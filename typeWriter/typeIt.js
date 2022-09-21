
window.addEventListener('load', (e) =>{
  console.log("again")
   show();

   // return e;
})


let typeIt = () => {
 fetch("https://type.fit/api/quotes")
  .then(function(response) {
  return response.json();
  })
  .then(function(data) {
    //console.log(data[0],"wwww");
   
   let ran =  Math.floor(Math.random() * 200);
   console.log(ran);
  
   let u;


  u = JSON.stringify(data[ran],null, 4);

   for(let i = 0; i < 2; i++){
    let r  = document.createElement('p');
    r.setAttribute('id','writer');
    r.innerHTML = u;
    let z = document.getElementById('quote').appendChild(r);
    return;
 }
 }
  ); 
  setTimeout(removeNode, 8000)
  setTimeout(show, 10000)
 
}

let removeNode = () => {
  let d = document.getElementById("quote");
  let d_nested = document.getElementById("writer");
  let throwawayNode = d.removeChild(d_nested);
  return throwawayNode;
}


function show(){
    let r = document.createElement('p');
    z = document.getElementById("quote").appendChild(r);
    for(let i = 0; i < 1; i++){
    console.log(typeIt(i))
    }

}


