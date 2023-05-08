import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'plotly.js-dist-min';
import 'plotly.js';

let Plotly = require('plotly.js')
var data = [
  {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    type: 'bar'
  }
];

function handleDeckForm(event) {
  event.preventDefault();
  document.querySelector('#rookieOdds').innerText = "Hi there";
  let TESTER = document.getElementById('tester');
	Plotly.newPlot(TESTER, data);
}

window.addEventListener("load", function() {
  document.querySelector("#deck-checker-form").addEventListener("submit", handleDeckForm);
});
