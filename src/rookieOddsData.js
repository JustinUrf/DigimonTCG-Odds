import rookieOdds from "./RookieOdds";
import shuffleArray from "./shuffleArray";
import createPieData from "./createPieData";

export default function rookieOddsData(deck) {
  let brickResult = {
    "rookie": 0,
    "rookieWithMulligan": 0,
    "noRookie": 0
  };

  for (let loop = 0; loop < 1000; loop++) {
    let result = rookieOdds(deck);

    if (result === true) {
      brickResult.rookie += 1;
    } else if (result === false) {
      brickResult.noRookie += 1;
    } else if (result === "mulliganRookie") {
      let resultAfterMulligan = rookieOdds(deck);
      if (resultAfterMulligan === true) {
        brickResult.rookieWithMulligan += 1;
      } else {
        brickResult.noRookie += 1;
      }
    }
  }
  const rookieDataX = [brickResult.rookie, brickResult.rookieWithMulligan, brickResult.noRookie]
  const rookieDataY = ["Rookie", "Rookies W/ Mulligan", "No Rookie"]

  return createPieData(rookieDataX, rookieDataY, "pie");
}