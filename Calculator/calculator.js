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
  inn.value = inn.value.substr(0, inn.value.length - 1);

  var sum = document.getElementById("sumo");
  sum.value = sum.value.substr(0, sum.value.length - 1);

  var less = document.getElementById("lesso");
  less.value = less.value.substr(0, less.value.length - 1);
}

function sum(){
     const num = parseInt(document.getElementById("in").value);
     const num1 = parseInt(document.getElementById("in").value);
     


/** store input numbers
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
const sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}`); */



     if(document.getElementById('sumo').onclick){
       /*  

        const b = document.getElementById('sumo');
        b.addEventListener('click', function () {
          console.log(num1 += num2 ,"++")
        })
        num2; */
        
        document.getElementById("in").value = "";
       /*  function plus(){
            const sum = num + num1;
            return sum;
        }    */
        if(document.getElementById('equal').onclick){
           function plus(){
            var sum = document.getElementById("in");
           //Work this!!!
             sum.value = num + num1;
            console.log(sum)
            return sum;
           } 
           console.log( "wwwioi"); 
            console.log(plus());
       }
    // console.log(plus())
      // const sum = num + num1;
      //  console.log(`The sum of ${num} and ${num1} is ${sum}`);
    
      }

}  

function showResult(sum){
  let res = parseInt(document.getElementById("equal").value);
  this.sum(res);

  
    console.log("TODO", res);
    return res
}

 function reset(){
    document.getElementById("erase").defaultValue = "0";
   // del();
    console.log("TODO")
} 