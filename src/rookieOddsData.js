import rookieOdds from "./RookieOdds";

export default function rookieOddsData(deck) {
  let brickResult = {
    "rookie": 0,
    "rookieWithMulligan" : 0,
    "noRookie": 0
  }

  for(let loop = 0; loop < 100; loop++) {
    let result = rookieOdds(deck) 
    if(result === true) {
      brickResult.rookie += 1;
    }
    if (result === "mulliganRookie") {
      brickResult.rookieWithMulligan += 1
    }
    if( result === false) {
      brickResult.noRookie += 1;
    }
  }

  
}