class Card {
  constructor(type) {
    this.type = type;
  }
}

export default function createDeck(lv3, lv4, lv5, lv6, lv7, options, tamers) {
  let deck = []

  for (let i = 0; i < lv3; i++) {
    cards.push(new Card("lv3"))
  }

  for (let i = 0; i < lv4; i++) {
    cards.push(new Card("lv4"))
  }

  for (let i = 0; i < lv5; i++) {
    cards.push(new Card("lv5"))
  }

  for (let i = 0; i < lv6; i++) {
    cards.push(new Card("lv6"))
  }

  for (let i = 0; i < lv7; i++) {
    cards.push(new Card("tamers"))
  }

  for (let i = 0; i < options; i++) {
    cards.push(new Card("options"))
  }

  for (let i = 0; i < tamers; i++) {
    cards.push(new Card("tamers"))
  }
  
}


