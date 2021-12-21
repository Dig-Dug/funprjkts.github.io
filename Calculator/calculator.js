const number = 0;

let num = document.getElementById("in").value;

   

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
        function plus(){
            const sum = num + num1;
            return sum;
        }  
        if(document.getElementById('equal').onclick){
            
            console.log( "wwwioi"); console.log(plus());
           }
       }
     console.log(plus())
      // const sum = num + num1;
      //  console.log(`The sum of ${num} and ${num1} is ${sum}`);
    
     

}  

function result(){
    console.log("TODO")
}

/* function reset(){
    document.getElementById("erase").defaultValue = "0";
    console.log("TODO")
} */