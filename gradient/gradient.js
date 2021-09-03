function randomColor(){
    console.log(Math.random() + "   --  sth");
    document.getElementById("color").innerHTML = Math.random();
    return Math.random();
}

let colors = ["#090979","#6dd5ed","lightcoral","maroon","deeppink","blueviolet","lightpink","chartreuse","navy"];
function changeGradient() {

 for(i = 0; i < 5; i++){
  
  document.body.style.backgroundColor = colors.shift(i += 5);
  
 
  //console.log("-> " + colors[i]); 

  }  

  //  console.log("dedww");
    
}

function getFile(src, target){
    var ifr = document.createElement('IFRAME');
    ifr.onload = function(e){
        //https://stackoverflow.com/questions/3875833/how-to-assign-file-contents-into-a-javascript-var
        target.innerHTML = 
           (ifr.contentDocument||ifr.contentWindow.document).body.innerHTML;
        document.body.removeChild(ifr);
        ifr = null;
    };
    ifr.src = src;
    ifr.style.display = 'none';
    document.body.appendChild(ifr);
}
getFile('gradient.json', document.getElementById('preview'));







/*var myObj = {
	imageURL: "https://images.unsplash.com/photo-1494249465471-5655b7878482?ixlib=rb-0.3.5&s=997116405ede44d63ddc54f16e2db8ce&auto=format&fit=crop&w=1350&q=80",
  Content: "my div content"
}

var URL = JSON.stringify(myObj.imageURL);

var insert = document.getElementById("insert");
var newbox = document.createElement("DIV");


newbox.style.backgroundImage = `url('${myObj.imageURL}')`;
newbox.style.height = "400px";
newbox.innerHTML += myObj.Content;
newbox.innerHTML += myObj.imageURL;
insert.append(newbox);*/

/*let path = "gradient.json";
JSON.stringify(path);
console.log(path);*/

/*let request = 'gradient.json';
var mydata = JSON.stringify(request);
//var mydata = JSON.parse(request);
console.log(mydata[0].name);
console.log(mydata[1].colorss);*/


/*
JSON.parse('{"p": 5}', (key, value) =>
  typeof value === 'number'
    ? value * 2 // return value * 2 for numbers
    : value     ,// return everything else unchanged
    console.log('number')
);*/

/*
const json = '{"gradient.json": false}';
const obj = JSON.parse(json);

console.log(obj);
// expected output: 42

console.log(obj);
// expected output: true*/
