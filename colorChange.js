function randomColor(){
    console.log(Math.random() + "   --  sth");
    document.getElementById("color").innerHTML = Math.random();
    return Math.random();
}

const colors = ["maroon","deeppink","blueviolet","lightpink","chartreuse"];
function changeColor() {
  
 // colors.forEach(colors => document.body.style.backgroundColor = colors);
 
 for(i = 0; i < 5; i++){
  //document.body.style.backgroundColor = colors[i];
  //shift();
  document.body.style.backgroundColor = colors.shift(i += 5);
  //document.body.style.backgroundColor =  colors[i];
 
  console.log("-> " + colors[i]); 
  // return colors * Math.random(i)  ;
  //document.body.style.backgroundColor = colors[Math.random() * i + i];
  //document.body.style.background = Math.random(colors * i);
  // randomColor(); 
  //document.body.style.background = "#AA0000";
  //document.body.style.background = "yellow";
  //if(colors == "chartreuse"){changeColor(i);}
  }  
    //document.body.style.background = Math.random( this.colors);
    console.log("dedww");
    
}

