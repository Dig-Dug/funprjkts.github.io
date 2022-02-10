

let prozent = 100;


/** 
 cp * preis = ? 
 ? / prozent = tip
 
 */

function calculate(){
let price = document.getElementById('price').value;
let clientProzent = document.getElementById('prozent').value;
let incog = clientProzent * price;
let total = incog / prozent;
console.log(total);

//https://www.educative.io/edpresso/how-to-add-an-id-to-element-in-javascript
const totalResult = document.createElement("p");
totalResult.setAttribute("id","total");
totalResult.innerHTML =  total;
document.getElementById("res").appendChild(totalResult);

//TODO
const element = document.getElementById('mero')
element.addEventListener("click", () => {
	alert('hello');
  let u = document.getElementById('total');
  u.remove();
  return;
});
}

function clearIt(){
 let u = document.getElementById('total');
 u.remove();
}

