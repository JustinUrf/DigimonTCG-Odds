import rookieOddsAndChampion from "./rookieAndChampionOdds";
import createPieData from "./createPieData";

export default function rookieAndChampionsOddsData(deck) {
  let finalResult = {
    "both": 0,
    "bothAfterMulligan" : 0,
    "topDeckChampion" : 0,
    "topDeckChampionMulligan" : 0, 
    "didNot" : 0
  }

  for (let loop = 0; loop < 10000; loop++) {
    let result = rookieOddsAndChampion(deck) 
    if (result === true) {
      finalResult.both += 1;
    } else if (result === "mulliganedBoth") {
      finalResult.bothAfterMulligan += 1;
    } else if (result === "topDeckChampion") {
      finalResult.topDeckChampion += 1;
    } else if (result === "topDeckChampionOnMulligan") {
      finalResult.topDeckChampionMulligan += 1;
    } else if (result === false) {
      finalResult.didNot += 1;
    }
  }
  const dataX = [finalResult.both, finalResult.bothAfterMulligan, finalResult.topDeckChampion, finalResult.topDeckChampionMulligan, finalResult.didNot];
  const dataY = ["Both lv3 AND lv4", "Both after mulligan", "Topdecked from evo", "Topdecked after mulligan", "Not having both"];

  return createPieData(dataX, dataY, "pie");

}