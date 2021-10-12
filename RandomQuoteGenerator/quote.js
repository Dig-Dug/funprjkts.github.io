/* function parseURLParams(url) {


    const parser = document.createElement('a');
	const searchObject = {};

	// Let the browser do the work
	parser.href = url;

	// Convert query string to object for convenience
	const queries = parser.search.replace(/^\?/, '').split('&');
	for (let i = 0; i < queries.length; i++) {
		const split = queries[i].split('=');
		searchObject[split[0]] = split[1];
	}

	return {
		protocol: parser.protocol,
		host: parser.host,
		hostname: parser.hostname,
		port: parser.port,
		pathname: parser.pathname,
		search: parser.search,
		searchObject: searchObject,
		hash: parser.hash
	};
}
const url = new URL('http://example.com/path/index.html');



let txt = document.createElement("p");
txt.innerText = url;
document.body.appendChild(txt)



console.log(url); */

/* 
var data = new String[1];
async function parseURLParams(url = '', data = {}) {
   // const data = { username: 'example' };

    fetch('https://example.com/profile', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
} */


function parseURLParams() {
  
     
    /*  let json ={"items": [
        {
          "quote": "Life isn’t about getting and having, it’s about giving and being.",
          "author": "Kevin Kruse"
        },
        {
         "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
         "author": "Napoleon Hill"
        },
        {
          "quote":"I attribute my success to this: I never gave or took any excuse.",
          "author":"Florence Nightingale"}

       ]};  */
    let quotes ={"items": [

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
     // let json = "quotes.json"



   
   
   
     /*   let moth =   Math.random();
       var news = document.getElementsByClassName("news-story")[0];
            var items = quotes.items;
            for(var i = 0; i < items.length; i++) {

              

              var h5 = document.createElement("h5");
              h5.innerHTML = items[i  ].quote;
              news.appendChild(h5 );
              var p = document.createElement("p", moth);
              p.innerHTML = items[i].author;
              news.appendChild(p , moth );
              
          }  */
          console.log("lel");
          let moth =   Math.floor(Math.random() * 11);
          var items = quotes.items;
          //items += moth;
        
          if(!document.getElementById("parent")){

           for(var i = 0; i < items.length; i++) {
    // checked  
           // let dov = document.createElement("div");
            let quo = document.createElement("p");
            let aut = document.createElement("h5");
    //checked
          // dov.innerHTML = '<div id="news-storyy"></div>';
           /*  quo.innerHTML = '<p id="parent" name = "parent">'+ items[i].quote+'</p>';
            aut.innerHTML = '<h5 id="parent" name = "parent">'+ items[i].author +'</h5>'; */
            //quo.innerHTML =  items[moth].quote;
           quo.innerHTML = '<p id="parent" name = "parent"> '+ items[moth].quote+'</p>';
            aut.innerHTML = '<h5 id="parent" name = "parent">'+ items[moth].author +'</h5>';
           

            console.log(items[moth].quote);
      // checked       
      //  document.getElementById("news-storyy").appendChild(dov);
        document.getElementById("new").appendChild(quo);
        document.getElementById("new").appendChild(aut);
          // document.getElementById("new").addEventListener("click", removing);
          
          
          const buttonElement = document.getElementById('news-story')
          buttonElement.addEventListener('click', function () {
          
            console.log("ke--pasa");
          
          
          /*   document.getElementById("new");
            document.body.removeChild(quo); */
            let o = document.getElementById("new");
            let d = document.getElementById("new");
            
            while(o.firstChild){
              o.removeChild(o.firstChild);
            }
          //  let d1 = document.getElementById("neww");
           // o.removeChild(d);
          
           // document.body.removeChild(o); <----
          
           parseURLParams()
           return;
        
          });
         
          
          parseURLParams();

         return; 
          }
        }
       }
      
  
  /* function myFunction() {
    //check if text box with id "parent" exists, add if doesn't
    if( !document.getElementById("parent") ) {
        var span = document.createElement('SPAN');
        span.innerHTML = '<input id="parent" name = "parent" type="textbox" />';
        document.getElementById("DemoteContainer").appendChild(span);
    }
}

<input onClick="myFunction();" id="demoteTask" name="demoteTask" type="checkbox"/>&nbsp;<label for"demoteTask_cbx">Demote to Child</label>

<span id="DemoteContainer"></span>






*/
