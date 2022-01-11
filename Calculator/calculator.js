const number = 0;

let num = document.getElementById("in").value;

document.addEventListener("keypress", function(event) {
	//console.log("waaaa")
 // sum();
});

function input(e) {
  var inn = document.getElementById("in");
  inn.value = inn.value + e.value; 

  var sum = document.getElementById("sumo");
  sum.value = sum.value + e.value;

  var less = document.getElementById("lesso");
  less.value = less.value + e.value;

}
function del() {
  var inn = document.getElementById("in");
  inn.value = inn.value.substr(0, inn.value= "0");
  

}

function sum(){
     const num = parseInt(document.getElementById("in").value);
    
    //num.innerHTML = 'Resumosults: ' + (num + num1);
    //console.log(num + num1) 


/** store input numbers
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
const sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}`); */



     if(document.getElementById('sumo').onclick){
      const num1 = parseInt(document.getElementById("in").value);
      console.log("waaaa",num + num1)
      //const num1 = parseInt(document.getElementById("in").value);
       del();
       return num + num1;
      /*   document.getElementById("in").value = "";
     
        if(document.getElementById('equal').onclick){
           function plus(){
            var sum = document.getElementById("in");
     
             sum.value = num + num1;
            console.log(sum)
            return sum;
           } 
          
            console.log(plus());
       } */
       console.log(num1) 
      } 

}  

function showResult(sum){
  let res = parseInt(document.getElementById("equal").value);
  this.sum(res);

  
    console.log("TODO", res);
    return res
}

 function reset(i){
    document.getElementById("erase").defaultValue = "0";
  
    console.log("reset")
} 

var results = document.getElementById('results');

function operations(value) {
  var numero_1 = parseInt(document.getElementById('num1').value);
  var numero_2 = parseInt(document.getElementById('num2').value);
  if (!isNaN(numero_1) && !isNaN(numero_2)) {
    switch (value) {
      case 'Sumar':
        results.innerHTML = 'Results: ' + (numero_1 + numero_2);
        break;
      case 'Restar':
        results.innerHTML = 'Results: ' + (numero_1 - numero_2);
        break;
      case 'Multiplicar':
        results.innerHTML = 'Results: ' + (numero_1 * numero_2);
        break;
      case 'Dividir':
        results.innerHTML = 'Results: ' + (numero_1 / numero_2);
        break;
    }
    var final = document.getElementById('results').textContent;
    console.log(final)
  } else {
    results.innerHTML = 'Please enter value to calculate'
  }

}

