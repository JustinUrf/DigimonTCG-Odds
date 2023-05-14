import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'plotly.js-dist-min';
import 'plotly.js';
import createDeck, { Card } from './createDeck';
import rookieOdds from './RookieOdds';
import shuffleArray from './shuffleArray';

let Plotly = require('plotly.js')

function handleDeckForm(event) {
  event.preventDefault();
  const lv3 = parseInt(document.querySelector("#lv3").value) || 0;
  const lv4 = parseInt(document.querySelector("#lv4").value) || 0 ;
  const lv5 = parseInt(document.querySelector("#lv5").value) || 0 ;
  const lv6 = parseInt(document.querySelector("#lv6").value) || 0 ;
  const lv7 = parseInt(document.querySelector("#lv7").value) || 0;
  const options = parseInt(document.querySelector("#options").value) || 0 ;
  const tamers = parseInt(document.querySelector("#tamers").value) || 0 ;
  const deckObject = createDeck(lv3, lv4, lv5, lv6, lv7, options, tamers)
  const deckBarGraph = [
    {
      x:['lv3', 'lv4','lv5','lv6','lv7', 'options', 'tamers'],
      y:[lv3, lv4, lv5, lv6, lv7, options, tamers],
      type: 'bar'
    }
  ]
  // Creates bar graph based on const in tester div.
  let deck = document.getElementById('tester');
  Plotly.newPlot(deck, deckBarGraph);
  console.log(rookieOdds(deckObject));


}

window.addEventListener("load", function() {
  document.querySelector("#deck-checker-form").addEventListener("submit", handleDeckForm);
});
