
/* 
function addIt() {
  var input = document.getElementById("myInput");
  input.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
     event.preventDefault();
     document.getElementById("myBtn").click();
    }
  });
  } */


  function logIt(){
    let i = document.getElementById("input").value;
   console.log(i);
let o = document.createElement("p");
o.innerHTML = '<p>' + i + '</p>';
document.getElementById("log").appendChild(o);
  }

/*     if (!document.getElementById("parent")) {
      let msg = document.createElement("p");
      msg.innerHTML = '<p id="parent" name = "parent"> ' + i + '</p>';
      document.getElementById("log").appendChild(msg);

      

      const el = document.getElementById("outside");
      el.addEventListener("click", modifyText, false);
 
  }*/

function modifyText() {
    const t2 = document.getElementById("t2");
    if (t2.firstChild.nodeValue == "three") {
      t2.firstChild.nodeValue = "two";
    } else {
      t2.firstChild.nodeValue = "three";
    } 
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
  
    loiogIt();
  
  
  }
  