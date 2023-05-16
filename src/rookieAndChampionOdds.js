import shuffleArray from "./shuffleArray";

export default function rookieAndChampionsOdds(deck) {
  let newDeck = deck;
  shuffleArray(newDeck)
  let startingHand = newDeck.slice(0,5);
  let rookieInHand = false;
  let championInHand = false;
  let drewChampion = false

  for (let i = 0; i < startingHand.length; i++) {
    if(startingHand[i].type === "lv3") {
      rookieInHand = true;
    }
    if(startingHand[i].type === "lv4") {
      championInHand = true;
    }
    if(rookieInHand === true && i === 4 && championInHand === false) {
      if(newDeck[10] === "lv4") {
        championInHand = true;
        drewChampion = true;
      }
    }
    if(rookieInHand === true && championInHand === true && drewChampion === true) {
      return "topDeckChampion"
    }
    if(rookieInHand === true && championInHand === true) {
      return true
    }
  }

  shuffleArray(newDeck);
  startingHand = newDeck.slice(0, 5);
  rookieInHand = false;
  championInHand = false;
  drewChampion = false;

  for (let i = 0; i < startingHand.length; i++) {
    if(startingHand[i].type === "lv3") {
      rookieInHand = true;
    }
    if(startingHand[i].type === "lv4") {
      championInHand = true;
    }
    if(rookieInHand === true && i === 4 && championInHand === false) {
      if(newDeck[10] === "lv4") {
        championInHand = true;
        drewChampion = true;
      }
    }
    if(rookieInHand === true && championInHand === true && drewChampion === true) {
      return "topDeckChampionOnMulligan"
    }
    if(rookieInHand === true && championInHand === true) {
      return "mulliganedBoth"
    }
  }


  return false
}