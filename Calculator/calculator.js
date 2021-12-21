const number = 0;

let num = document.getElementById("in").value;
/* 
function perform(){
   
let num = document.getElementById("in").value;
switch(num){
        case "+"  : sum();
       // console.log(num + num,"++");
        break;
        case "-": console.log("--");
        break;
        case "*": console.log("**");
        break;
        case "/": console.log("//");
        break;
        case "=": console.log(")#´##=");
        break;
        default: console.log("TODO");
    }
   
    } */
   
   
    function sum(){
      let num1 = document.getElementById("in").value;
      let num2 = document.getElementById("in").value;
        
        console.log(num1 + num2,"++")
        return;
 /*  document.onclick = reset;
   if(sum){
        document.getElementById("erase").defaultValue = "0";
        console.log("TOuuDO")
       
        return;
    } */
   /*  if(document.getElementById('sumo').onclick == "+"){
      
        console.log(num,"sssss")
        reset();
       
       return false;
    } */
    //let num1 = document.getElementById("input").value;
    
    console.log(num , "www," )

    //result()

}  

function result(){
    console.log("TODO")
}

function reset(){
    document.getElementById("erase").defaultValue = "0";
    console.log("TODO")
}