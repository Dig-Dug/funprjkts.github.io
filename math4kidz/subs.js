
function subs(){
  let  removeSum = document.getElementById("pa");
  removeSum.textContent = '';  

    let num1 = document.getElementById('operand1');
    let sign = document.getElementById('sign');
    let num2 = document.getElementById('operand2');

sign.innerHTML = '-';
num1.setAttribute("value", num1.innerHTML = Math.floor(Math.random() * 20));
num2.setAttribute("value",num2.innerHTML = Math.floor(Math.random() * 20));

let n1 = num1.getAttribute("value");
let n2 = num2.getAttribute("value");
let res = parseInt(n1) - parseInt(n2)
console.log(res);


}
document.getElementById("sum").addEventListener("click", returnSum);
function returnSum() {
    add();
  }
 
function yes1(){

}

function no1(elem){

}



