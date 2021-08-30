function randomColor(){
    console.log(Math.random() + "   --  sth");
    return Math.random();
}

function changeColor(){
    document.getElementById("color").style.color = "blue";
   /* for (let i = 0; i < 10; i++) {
     if(changeColor){
        console.log(Math.random(i));
        document.body.style.background = "red";
        document.body.style.background = [i];
        document.body.style.background = "yellow";
      }}*/
      randomColor();
    document.body.style.background = "#AA0000";
    document.body.style.background = "yellow";
    document.body.style.background = "orange";
}

