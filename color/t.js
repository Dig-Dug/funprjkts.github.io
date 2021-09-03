
function multiplyText(p){
    p = document.getElementById('pl')
    p = p++;
}
function pushUp(){
    
    let o = document.getElementById('explosiv');
    let img = document.getElementById('ima');
    let p = document.getElementById('pl')
    
    let id = null;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame(){
        if(pos == 350){
            clearInterval(id);
        }else{
            document.getElementById("ima").style.visibility="visible";
            document.getElementById("pl").style.visibility="visible";
            pos++;
            multiplyText(p);
            //console.log(pl)
           
            img.style.bottom = pos + "px";
            //img.style.right = pos + "px";

        }
    }
    
    console.log(o, explosiv);
   // alert("jijijijij");
}
