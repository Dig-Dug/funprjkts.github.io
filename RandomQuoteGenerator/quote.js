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
let contacts ='{"result":true, "count":42}';
  
   



function parseURLParams(result) {
    /* // Only change code below this line
  for( var i =0; i < contacts.length -1; i++){
      if(quote = contacts[i].hasOwnProperty("quote")){
        let txt = document.createElement("p");
        txt.innerText = JSON.parse([i]);
        document.body.appendChild(txt)
     
      } */
      const obj = JSON.parse(contacts);
      console.log(obj);
       let txt = document.createElement("p");
      txt.innerHTML  = obj;
      document.body.appendChild(txt) 
  }
  /* console.log(contacts); */
