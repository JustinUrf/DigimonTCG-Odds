import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'plotly.js-dist-min';
import 'plotly.js';

let Plotly = require('plotly.js')

function handleDeckForm(event) {
  event.preventDefault();
  document.querySelector('#rookieOdds').innerText = "Hi there";
  let TESTER = document.getElementById('tester');
	Plotly.newPlot( TESTER, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
	margin: { t: 0 } } ); 
}

window.addEventListener("load", function() {
  document.querySelector("#deck-checker-form").addEventListener("submit", handleDeckForm);
});
