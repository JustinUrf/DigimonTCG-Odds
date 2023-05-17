import securityOdds from "./securityOdds";

export default function securityData(deck) {
  let securityObj = {
    1: {
        "lv3": 0,
        "lv4": 0,
        "lv5": 0,
        "lv6": 0,
        "lv7": 0,
        "option": 0,
        "tamer": 0
      },
    2 : {
          "lv3": 0,
          "lv4": 0,
          "lv5": 0,
          "lv6": 0,
          "lv7": 0,
          "option": 0,
          "tamer": 0
        },
    3 : {
          "lv3": 0,
          "lv4": 0,
          "lv5": 0,
          "lv6": 0,
          "lv7": 0,
          "option": 0,
          "tamer": 0
        },
    4 : {
          "lv3": 0,
          "lv4": 0,
          "lv5": 0,
          "lv6": 0,
          "lv7": 0,
          "option": 0,
          "tamer": 0
        },
    5 : {
          "lv3": 0,
          "lv4": 0,
          "lv5": 0,
          "lv6": 0,
          "lv7": 0,
          "option": 0,
          "tamer": 0
        },
  }

  for (let loop = 0; loop < 1000; loop++) {
    let result = securityOdds(deck)

    for (const property in result) {
      securityObj[property][result[property]] += 1;
    }
  }
  return securityObj
}