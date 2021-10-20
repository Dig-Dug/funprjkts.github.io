



function increase(){
    const buttonElement = document.getElementById("in")
    buttonElement.addEventListener('click', function () {

        let txt = document.createElement("h2");

      for (let i= 0 ; i >= 0; i++){
        txt.innerHTML = '<h2"> '+ i  + '</h2>';
        document.getElementById("pop").appendChild(txt);
        i++
        increase(i)
        return;
        //document.body.appendChild(txt)
       
        
      }
       console.log("ke--pasa");
    
     /*   let o = document.getElementById("new");
       document.body.removeChild(txt);
       console.log("remove") */
      });

  
}


function decrease(){
    const buttonElement = document.getElementById("de")
    buttonElement.addEventListener('click', function () {
      
       console.log("ke--wasa");
    
     /*   let o = document.getElementById("new");
       document.body.removeChild(txt);
       console.log("remove") */
      });
 return
}

function messageIt() {
    console.log("dddd");
    let fname = document.querySelector("#fname");
    console.log(fname.value)
  
    if (!document.getElementById("parent")) {
      let msg = document.createElement("p");
      msg.innerHTML = '<p id="parent" name = "parent"> ' + fname.value + '</p>';
      document.getElementById("here").appendChild(msg);
  
      const buttonElement = document.getElementById('here');
      buttonElement.addEventListener('click', function () {
        console.log("kkk")
      })
      return;
    };
  
    logIt();
  
  
  }