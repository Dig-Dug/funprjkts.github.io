

let prozent = 100;


/** 
 cp * preis = ? 
 ? / prozent = tip
 
 */
//https://slideplayer.com/slide/8115843/25/images/7/Calculating+Tips%3A+Step+One%3A+Step+Two%3A+Step+Three%3A.jpg
function calculate(){
let price = document.getElementById('price').value;
let clientProzent = document.getElementById('prozent').value;
let incog = clientProzent * price;
let person = document.getElementById('person').value;
let total = Math.round(incog / prozent);
let totalPerson = total / person;
console.log(total, person);
console.log(totalPerson);

if(person == "" || person == 0){
const error = document.createElement("p");
error.setAttribute("id","total");
error.innerHTML =  totalPerson;
document.getElementById("res").appendChild(error);
document.getElementsByTagName("p")[0].innerHTML="please add 'Number of Persons'";
// console.log("ioioioioi")
}

//https://www.educative.io/edpresso/how-to-add-an-id-to-element-in-javascript
const totalResult = document.createElement("p");
totalResult.setAttribute("id","total");
totalResult.innerHTML =  totalPerson;
document.getElementById("res").appendChild(totalResult);


//TODO
const element = document.getElementById('mero')
element.addEventListener("click", () => {

  //let u = document.getElementById('total');
  u.remove();
  calculate();
  return;
});
}

function clearIt(){
 let u = document.getElementById('total');
 u.remove();
}

