var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'img/ACxDC-Powerviolence-696x464.jpg';
imgArray[1] = new Image();
imgArray[1].src = 'img/Hanin+Elias-1.jpg';
imgArray[2] = new Image();
imgArray[2].src = 'img/IanM0493u93u690u_465_546_int.jpg';
imgArray[3] = new Image();
imgArray[3].src = 'img/Incantation_1.jpg';
imgArray[4] = new Image();
imgArray[4].src = 'img/Incant.jpg';
imgArray[5] = new Image();
imgArray[5].src = 'img/tumblr_nefm9yko3H1qmyny3o1_1280.jpg';
imgArray[6] = new Image();
imgArray[6].src = 'img/V4HxMAckiNJegXyWvwa6JR.jpg';
imgArray[7] = new Image();
imgArray[7].src = 'img/bugs.jpg';


function toLeft(element){
/*    let im =  document.getElementById("loot");
   im.style.visibility = "visible";
   let om =  document.getElementById("lot");
   om.style.visibility = "hidden";
    
    console.log("left") */
    
        var img = document.getElementById(element);
    
        for(var i = 0; i < imgArray.length;i++)
        {
            if(imgArray[i].src == img.src) 
            {
                if(i === imgArray.length){
                    document.getElementById(element).src = imgArray[0].src;
                    break;
                }
                document.getElementById(element).src = imgArray[i+1].src;
                break;
            }
        }
}
function toRight(){
    let im =  document.getElementById("loot");
    im.style.visibility = "visible";
    let om =  document.getElementById("lot");
    om.style.visibility = "hidden";
    console.log("right")
}
