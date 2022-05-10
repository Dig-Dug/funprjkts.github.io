function mult(){
//COLOR ISSUE
//COLOR ISSUE


    let  removeIt = document.getElementById("pa");
    removeIt.textContent = '';  

    let num1 = document.getElementById('operand1');
    let sign = document.getElementById('sign');
    let num2 = document.getElementById('operand2');
    sign.innerHTML = '*';
    num1.setAttribute("value", num1.innerHTML = Math.floor(Math.random() * 20));
    num2.setAttribute("value",num2.innerHTML = Math.floor(Math.random() * 20));
  
  let n1 = num1.getAttribute("value");
  let n2 = num2.getAttribute("value");
  let res = parseInt(n1) * parseInt(n2);
  console.log(Math.abs(res));

  let a = document.createElement("h2");
  a.setAttribute("id", "pa1"); a.setAttribute("value", a.innerHTML = Math.floor(Math.random() * 20));
  a.setAttribute("onclick", "no(this)");
  o = document.getElementById("pa");
  
  let b = document.createElement("h2");
  b.setAttribute("id", "pa2"); b.setAttribute("value", b.innerHTML = Math.floor(Math.random() * 20));
  b.setAttribute("onclick", "no(this)");
  
  let c = document.createElement("h2");
  c.setAttribute("onclick", "yesMult()");
  c.setAttribute("id", "pa3"); c.setAttribute("value", c.innerHTML = Math.abs(res) );
  
o = document.getElementById("pa"); 
if(a.innerHTML > 0 && a.innerHTML < 10){
    o.append(c,a,b) ;
   } else if(a.innerHTML > 10){
    console.log("a.innerHTML > 10")
   o.append(b,a,c) ;
}//TODO when same result.......
 else{o.append(b,c,a)}

return[a,b,c]
}

function yesMult(){
    
     const el = document.getElementById('pa1'); 
  
    const elll = document.getElementById('pa3'); 
  
    let correct = document.createElement("audio");
    correct.src   = 'correct.mp3';
    correct.play();
  
    el.remove();
    elll.remove();
    mult();
  
  }




  
  
  //YESSSSS
  document.getElementById("sum").addEventListener("click", returnSum);
  function returnSum() {
    let a = document.getElementById('pa1');
    let b = document.getElementById('pa2');
    let c = document.getElementById('pa3');
   a.remove();
   b.remove();
   c.remove();
     add();
    }
   
  
  
  
  
  