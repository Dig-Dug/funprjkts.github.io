

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
  };

  logIt();


}


