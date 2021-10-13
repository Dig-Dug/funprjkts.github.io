

function messageIt() {
   console.log("dddd");
    let fname = document.querySelector("#fname");
    console.log(fname.value)

   if (!document.getElementById("parent")) {
   let msg = document.createElement("p");
   msg.innerHTML = '<p id="parent" name = "parent"> ' +fname +"console.log" + '</p>';
   document.getElementById("here").appendChild(msg);

   const buttonElement = document.getElementById('here');
   buttonElement.addEventListener('click', function () {
        console.log("kkk")
   }) };
}


/** if (!document.getElementById("parent")) {

    for (var i = 0; i < items.length; i++) {

      let quo = document.createElement("p");
      let aut = document.createElement("h5");

      quo.innerHTML = '<p id="parent" name = "parent"> ' + items[moth].quote + '</p>';
      aut.innerHTML = '<h5 id="parent" name = "parent">' + items[moth].author + '</h5>';


      console.log(items[moth].quote);
      document.getElementById("new").appendChild(quo);
      document.getElementById("new").appendChild(aut);

      const buttonElement = document.getElementById('news-story')
      buttonElement.addEventListener('click', function () {

        console.log("ke--pasa");



        let o = document.getElementById("new");
        let d = document.getElementById("new");

        while (o.firstChild) {
          o.removeChild(o.firstChild);
        }


        parseURLParams()
        return;

      });


      parseURLParams();

      return;
    }
  }
} */