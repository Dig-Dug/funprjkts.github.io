

function sume() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let b = parseInt(num1);
  let w = parseInt(num2);

  console.log(b + w);

  const totalResult = document.createElement("p");
  totalResult.setAttribute("id", "total");
  totalResult.innerHTML = b + w;
  document.getElementById("totall").appendChild(totalResult);

}

function rest() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let b = parseInt(num1);
  let w = parseInt(num2);

  console.log(b - w);

  const totalResult = document.createElement("p");
  totalResult.setAttribute("id", "total");
  totalResult.innerHTML = b - w;
  document.getElementById("totall").appendChild(totalResult);

}

function mult() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let b = parseInt(num1);
  let w = parseInt(num2);

  console.log(b * w);

  const totalResult = document.createElement("p");
  totalResult.setAttribute("id", "total");
  totalResult.innerHTML = b * w;
  document.getElementById("totall").appendChild(totalResult);

}
function div() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let b = parseInt(num1);
  let w = parseInt(num2);

  console.log(b / w);

  const totalResult = document.createElement("p");
  totalResult.setAttribute("id", "total");
  totalResult.innerHTML = b / w;
  document.getElementById("totall").appendChild(totalResult);

}


function reset() {
  //document.getElementById("totall").defaultValue = "";
  let u = document.getElementById('total');
  u.remove();
  console.log("reset")
} 