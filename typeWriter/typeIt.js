
window.addEventListener('load', (e) =>{
    show();
})


let typeIt = () => {
 fetch("https://type.fit/api/quotes")
  .then(function(response) {
  return response.json();
  })
  .then(function(data) {
    console.log(data[0]);
   
   let ran =  Math.floor(Math.random() * 200);
   console.log(ran);
   //JSON.stringify(theObject)
   let u = []
    u = JSON.stringify(data[ran]);
    
   for(let i = 0; i < 2; i++){
    let r  = document.createElement('p');
    //r.setAttribute('class','writer');
    r.innerHTML = u;
    let z = document.getElementById('quote').appendChild(r);
    return;
 }
 }
  );
}


function show(){

/*  let st = 'Lorem ipsum typing effect!'
    let s = 0, speed = 50;
    if(s < st.length){

        let r = document.createElement('p');
        z = document.getElementById("quote").appendChild(r);
        z.innerHTML += st.charAt(s); s+=1;
       // setTimeout(show, speed)
        
        for(let i = 0; i < 1; i++){
        console.log(typeIt(i))
      return
    }return 
*/

  let r = document.createElement('p');
    z = document.getElementById("quote").appendChild(r);
    for(let i = 0; i < 1; i++){
    console.log(typeIt(i))
    }

  }


