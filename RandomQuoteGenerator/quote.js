

function parseURLParams() {

  let quotes = {
    "items": [

      {
        "quote": "Life isn’t about getting and having, it’s about giving and being.", "author": "Kevin Kruse <---"
      },
      {
        "quote": "Whatever the mind of man can conceive and believe, it can achieve.", "author": "Napoleon Hill"
      },
      {
        "quote": "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein"
      },
      {
        "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "author": "Robert Frost"
      },
      {
        "quote": "I attribute my success to this: I never gave or took any excuse.", "author": "Florence Nightingale"
      },
      {
        "quote": "You miss 100% of the shots you don’t take.", "author": "Wayne Gretzky"
      },
      {
        "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "author": "Michael Jordan"
      },
      {
        "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.", "author": "Amelia Earhart"
      },
      {
        "quote": "Every strike brings me closer to the next home run.", "author": "Babe Ruth"
      }

    ]
  }

  console.log("lel");
  let moth = Math.floor(Math.random() * 11);
  var items = quotes.items;


  if (!document.getElementById("parent")) {

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
}


