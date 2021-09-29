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
             "quote":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse <---"},
      {
             "quote":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill"},
      {
             "quote":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein"},
      {
             "quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","author":"Robert Frost"},
      {
             "quote":"I attribute my success to this: I never gave or took any excuse.","author":"Florence Nightingale"}
      ]}
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
          var items = quotes.items;
         
          if(!document.getElementById("parent")){
           for(var i = 0; i < items.length; i++) {
            let quo = document.createElement("p");
            let aut = document.createElement("h5");
            quo.innerHTML = '<p id="parent" name = "parent">'+ items[i].quote+'</p>';
            aut.innerHTML = '<h5 id="parent" name = "parent">'+ items[i].author +'</h5>';
            console.log("this");
            document.getElementById("new").appendChild(quo);
            document.getElementById("new").appendChild(aut)
          // document.getElementById("new").addEventListener("click", removing);
  
          const buttonElement = document.getElementById('news-story')
          buttonElement.addEventListener('click', function () {
           // parseURLParams();
           // document.getElementById("new").innerHTML = Date();
            console.log("ke pasa");
           // var list = document.getElementById("new");
           /*  for(var i = 0; i < items.length; i--) {
              console.log("minus");
              //document.body.removeChild(quo.firstChild);
            } */
            
          });
          }
        }
       }
       function removing(){
        console.log("ke pasa");
        document.getElementById("new").innerHTML = Date();
      
      
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
