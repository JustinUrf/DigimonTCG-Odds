import shuffleArray from "./shuffleArray"

export default function rookieOdds(deck) {
  let brickResult = {
    "rookie": 0,
    "noRookie": 0
  }
  let newDeck = deck
  shuffleArray(newDeck)
  let startingHand = newDeck.slice[0, 5];

  for(let loop = 0; loop < 100; loop++) {
    for (let i = 0; i < startingHand; i++) {
      if (startingHand[i].type == "lv3")  {
        brickResult.rookie += 1
        break
      } 
      // mulligan
      shuffleArray(newDeck)
      startingHand = newDeck.slice[0, 5];
      if (startingHand[i].type == "lv3")  {
        brickResult.rookie += 1
        break
      } else {
        brickResult.noRookie += 1
      }
    }
  }
  return brickResult
} 