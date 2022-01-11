var results = document.getElementById('results');

function operations(value) {
  var numero_1 = parseInt(document.getElementById('num1').value);
  var numero_2 = parseInt(document.getElementById('num2').value);
  if (!isNaN(numero_1) && !isNaN(numero_2)) {
    switch (value) {
      case 'Sumar':
        results.innerHTML = 'Results: ' + (numero_1 + numero_2);
        break;
      case 'Restar':
        results.innerHTML = 'Results: ' + (numero_1 - numero_2);
        break;
      case 'Multiplicar':
        results.innerHTML = 'Results: ' + (numero_1 * numero_2);
        break;
      case 'Dividir':
        results.innerHTML = 'Results: ' + (numero_1 / numero_2);
        break;
    }
    var final = document.getElementById('results').textContent;
    console.log(final)
  } else {
    results.innerHTML = 'Please enter value to calculate'
  }

}