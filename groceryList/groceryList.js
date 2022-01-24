

function addIt() {
  var input = document.getElementById("myInput");
  input.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
     event.preventDefault();
     document.getElementById("myBtn").click();
    }
  });
  }
  