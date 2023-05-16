import shuffleArray from "./shuffleArray";

export default function rookieOdds(deck) {
  let newDeck = deck;
  shuffleArray(newDeck)
  let startingHand = newDeck.slice(0,5);
  let rookieInHand = false;
  let championInHand = false;
  let mulligan = false

  for (let i = 0; i < startingHand.length; i++) {
    if(startingHand[i].type === "lv3") {
      rookieInHand = true;
    }
    if(startingHand[i].type === "lv4") {
      championInHand = true;
    }
    if(rookieInHand === true) {
      if(newDeck[5] === "lv4") {
        championInHand = true;
      }
    }
    if(rookieInHand === true && championInHand === true) {
      return true
    }
  }

  shuffleArray(newDeck);
  startingHand = newDeck.slice(0, 5);
  rookieInHand = false;
  championInHand = false;

  for (let i = 0; i < startingHand.length; i++) {
    if(startingHand[i].type === "lv3") {
      rookieInHand = true;
    }
    if(startingHand[i].type === "lv4") {
      championInHand = true;
    }
    if(rookieInHand === true) {
      if(newDeck[5] === "lv4") {
        championInHand = true;
      }
    }
    if(rookieInHand === true && championInHand === true) {
      return "mulliganTrue"
    }
  }


  return false
}