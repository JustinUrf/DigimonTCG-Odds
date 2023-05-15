import shuffleArray from "./shuffleArray"

export default function rookieOdds(deck) {
  let newDeck = [...deck];
  shuffleArray(newDeck);
  let startingHand = newDeck.slice(0, 5);

  for (let i = 0; i < startingHand.length; i++) {
    if (startingHand[i].type === "lv3") {
      return true;
    }
  }

  // If no rookie card found, shuffle the deck and draw again.
  shuffleArray(newDeck);
  startingHand = newDeck.slice(0, 5);

  for (let i = 0; i < startingHand.length; i++) {
    if (startingHand[i].type === "lv3") {
      return "mulliganRookie";
    }
  }

  return false;
}