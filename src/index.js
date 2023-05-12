import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'plotly.js-dist-min';
import 'plotly.js';
// import createDeck, { Card } from './createDeck';

let Plotly = require('plotly.js')
// var data = [
//   {
//     x: ['giraffes', 'orangutans', 'monkeys'],
//     y: [20, 14, 23],
//     type: 'bar'
//   }
// ];

function handleDeckForm(event) {
  event.preventDefault();
  // document.querySelector('#rookieOdds').innerText = "Hi there";
  const lv3 = parseInt(document.querySelector("#lv3").value) || 0;
  const lv4 = parseInt(document.querySelector("#lv4").value) || 0 ;
  const lv5 = parseInt(document.querySelector("#lv5").value) || 0 ;
  const lv6 = parseInt(document.querySelector("#lv6").value) || 0 ;
  const lv7 = parseInt(document.querySelector("#lv7").value) || 0;
  const options = parseInt(document.querySelector("#options").value) || 0 ;
  const tamers = parseInt(document.querySelector("#tamers").value) || 0 ;
  const deckBarGraph = [
    {
      x:['lv3', 'lv4','lv5','lv6','lv7', 'options', 'tamers'],
      y:[lv3, lv4, lv5, lv6, lv7, options, tamers],
      type: 'bar'
    }
  ]
  let deck = document.getElementById('tester');
  Plotly.newPlot(deck, deckBarGraph)
}

window.addEventListener("load", function() {
  document.querySelector("#deck-checker-form").addEventListener("submit", handleDeckForm);
});
