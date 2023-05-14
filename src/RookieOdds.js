import shuffleArray from "./shuffleArray"

export default function rookieOdds(deck) {
  let brickResult = {
    "rookie": 0,
    "rookieWithMulligan" : 0,
    "noRookie": 0
  }
  let newDeck = deck
  shuffleArray(newDeck)
  let startingHand = newDeck.slice(0, 5);

  for(let loop = 0; loop < 100; loop++) {
    for (let i = 0; i < startingHand.length; i++) {
      if (startingHand[i].type === "lv3") {
         brickResult.rookie += 1
      } else if (i === 4 && startingHand[i].type !== "lv3") {
        shuffleArray(newDeck)
        startingHand = newDeck.slice(0,5);
        for (let i = 0; i < startingHand.length; i++) {
          if (startingHand[i].type === "lv3") {
             brickResult.rookieWithMulligan += 1
          } 
          else if (i === 4 && startingHand[i].type !== "lv3") {
            brickResult.noRookie += 1;
          }
        }
      }
    }
  }
  return brickResult;
} 