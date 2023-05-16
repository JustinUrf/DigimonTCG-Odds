import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'plotly.js-dist-min';
import 'plotly.js';
import createDeck, { Card } from './createDeck';
import shuffleArray from './shuffleArray';
import createData from './createData';
import rookieOddsData from './rookieOddsData';

let Plotly = require('plotly.js')

const layout = {
  height: 400,
  width: 500
};

function handleDeckForm(event) {
  event.preventDefault();
  //Collect user input, if field left empty(falsy) use 0 instead.
  const lv3 = parseInt(document.querySelector("#lv3").value) || 0;
  const lv4 = parseInt(document.querySelector("#lv4").value) || 0 ;
  const lv5 = parseInt(document.querySelector("#lv5").value) || 0 ;
  const lv6 = parseInt(document.querySelector("#lv6").value) || 0 ;
  const lv7 = parseInt(document.querySelector("#lv7").value) || 0;
  const options = parseInt(document.querySelector("#options").value) || 0 ;
  const tamers = parseInt(document.querySelector("#tamers").value) || 0 ;

  //Deck object
  const deckObject = createDeck(lv3, lv4, lv5, lv6, lv7, options, tamers)

  //Take user input and graph first graph.
  const deckBarGraphX = ['lv3', 'lv4','lv5','lv6','lv7', 'options', 'tamers']
  const deckBarGraphY =  [lv3, lv4, lv5, lv6, lv7, options, tamers]
  const deckBarGraph = createData(deckBarGraphX, deckBarGraphY, 'bar')
  let displayDeck  = document.getElementById('tester');
  Plotly.newPlot(displayDeck, deckBarGraph);


  const rookiePieGraph = rookieOddsData(deckObject);
  console.log(rookiePieGraph);
  let displayRookieOdds = document.getElementById('rookieOdds')
  Plotly.newPlot(displayRookieOdds, rookiePieGraph, layout)


}

window.addEventListener("load", function() {
  document.querySelector("#deck-checker-form").addEventListener("submit", handleDeckForm);
});
