import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'plotly.js-dist-min';
import 'plotly.js';
import createDeck, { Card } from './createDeck';
import createData from './createLineGraphData';
import rookieOddsData from './rookieOddsData';
import rookieAndChampionsOddsData from './rookieAndChampionOddsData';
import securityData from './securityData';


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

  //Creates Data/graph for rookie Odds
  const rookiePieGraph = rookieOddsData(deckObject);
  let displayRookieOdds = document.getElementById('rookieOdds')
  Plotly.newPlot(displayRookieOdds, rookiePieGraph, layout)


  //Create Data/graph for Rookies & Champions
  const rookieAndChampionPieGraph = rookieAndChampionsOddsData(deckObject);
  let displayRookieAndChampionOdds = document.getElementById('rookieAndChampionOdds')
  Plotly.newPlot(displayRookieAndChampionOdds, rookieAndChampionPieGraph, layout)

  //Create data for what everything in your security looks like 
  const testData = securityData(deckObject)
  console.log(testData)
}

window.addEventListener("load", function() {
  document.querySelector("#deck-checker-form").addEventListener("submit", handleDeckForm);
});
