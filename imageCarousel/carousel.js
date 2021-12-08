/* 
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
imgArray[7].src = 'img/bugs.jpg'; */


let arr = ["img/ACxDC-Powerviolence-696x464.jpg",
"img/Hanin+Elias-1.jpg",
"img/IanM0493u93u690u_465_546_int.jpg",
"img/Incantation_1.jpg", "img/Incant.jpg",
"img/tumblr_nefm9yko3H1qmyny3o1_1280.jpg",
"img/V4HxMAckiNJegXyWvwa6JR.jpg", "img/bugs.jpg"];

function toLeft(){

 //try with the adding subs prjkt 
    for(let i = 0; i <= arr.length; i++){
      console.log("ddpopdo", arr.length);
     //arr.push(i)
    // let orr = [];
     
     //orr.push(arr[i+1]);
let pic = document.createElement('span');
pic.innerHTML = '<img   id="lot" class=""  src=\"'+arr[i+1]+'\">';
document.getElementById("mainImg").appendChild(pic);

var elem = document.getElementById("test");
     elem.parentNode.removeChild(elem);

     document.getElementById("kl").style.backgroundColor = "blue";
     //break
      //toLeft();
      return;
    }
 /*        var img = document.getElementById(element);
    
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
        } */
} 
function toRight(element){

    
        var img = document.getElementById(element);
    
        for(var i = 0; i <= imgArray.length;i++)
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

let i = 0;

/* let i = 0;
function toLeft(){

    let arr = ["img/ACxDC-Powerviolence-696x464.jpg",
        "img/Hanin+Elias-1.jpg",
        "img/IanM0493u93u690u_465_546_int.jpg",
        "img/Incantation_1.jpg", "img/Incant.jpg",
        "img/tumblr_nefm9yko3H1qmyny3o1_1280.jpg",
        "img/V4HxMAckiNJegXyWvwa6JR.jpg", "img/bugs.jpg"];
i++;

let pic = document.createElement('div');
pic.innerHTML = '<img   id="lot" class="let"  src=\"'+arr[i]+'\">';
document.getElementById("grenz").appendChild(pic);

console.log( "yes", o)
fade();
while (pic.firstChild) {
    pic.removeChild(pic.firstChild);
   
  }
  toLeft();
  return;
  
}

function fade(){
    let om =  document.getElementById("lot");
    om.style.visibility = "hidden";
    console.log("fading")
}



function increase() {
  i++;
  document.getElementById('pop').textContent = i;
}
function decrease() {
  i--;
  document.getElementById('pop').textContent = i;
}

function toRight(){
    let im =  document.getElementById("loot");
    im.style.visibility = "visible";
    let om =  document.getElementById("lot");
    om.style.visibility = "hidden";
    console.log("right")
}

function messageIt() {
    console.log("dddd");
    let fname = document.querySelector("#fname");
    console.log(fname.value)
  
    if (!document.getElementById("parent")) {
      let msg = document.createElement("p");
      msg.innerHTML = '<p id="parent" name = "parent"> ' + fname.value + '</p>';
      document.getElementById("here").appendChild(msg);
  
      const buttonElement = document.getElementById('here');
      buttonElement.addEventListener('click', function () {
        console.log("kkk")
      })
      return;
    }} */