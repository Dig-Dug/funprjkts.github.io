function randomColor(){
    console.log(Math.random() + "   --  sth");
    document.getElementById("color").innerHTML = Math.random();
    return Math.random();
}

const colors = ["lightcoral","maroon","deeppink","blueviolet","lightpink","chartreuse","navy"];
function changeGradient() {

 for(i = 0; i < 5; i++){
  
  document.body.style.backgroundColor = colors.shift(i += 5);
  
 
  console.log("-> " + colors[i]); 

  }  

    console.log("dedww");
    
}

var mydata = JSON.parse(data);
alert(mydata[0].name);
alert(mydata[0].age);
alert(mydata[1].name);
alert(mydata[1].age);