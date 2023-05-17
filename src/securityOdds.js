import shuffleArray from "./shuffleArray";

export default function securityOdds(deck) {
  let securityObj = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  }

  let newDeck = deck;
  shuffleArray(newDeck);
  let startingSecurity = newDeck.slice(5,10);

  for(let i = 0; i < startingSecurity.length; i++) {
    securityObj[i+1] = startingSecurity[i].type
  }

  return securityObj;
}