import securityOdds from "./securityOdds";
import createGroupBarChart from "./createGroupBarChart";

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

  for (let loop = 0; loop < 10000; loop++) {
    let result = securityOdds(deck)

    for (const property in result) {
      securityObj[property][result[property]] += 1;
    }
  }
  let lv3Group = [securityObj[1].lv3, securityObj[2].lv3, securityObj[3].lv3, securityObj[4].lv3, securityObj[5].lv3]
  
  let lv4Group = [securityObj[1].lv4, securityObj[2].lv4, securityObj[3].lv4, securityObj[4].lv4, securityObj[5].lv4]

  let lv5Group = [securityObj[1].lv5, securityObj[2].lv5, securityObj[3].lv5, securityObj[4].lv5, securityObj[5].lv5]

  let lv6Group = [securityObj[1].lv6, securityObj[2].lv6, securityObj[3].lv6, securityObj[4].lv6, securityObj[5].lv6]

  let lv7Group = [securityObj[1].lv7, securityObj[2].lv7, securityObj[3].lv7, securityObj[4].lv7, securityObj[5].lv7]

  let optionGroup = [securityObj[1].option, securityObj[2].option, securityObj[3].option, securityObj[4].option, securityObj[5].option]

  let tamerGroup = [securityObj[1].tamer, securityObj[2].tamer, securityObj[3].tamer, securityObj[4].tamer, securityObj[5].tamer]
  
  const xAxis = ["Sec 1", "Sec 2", "Sec 3", "Sec 4", "Sec 5"]
  const lv3DataGroup = createGroupBarChart(xAxis, lv3Group, "lv3", "bar")
  const lv4DataGroup = createGroupBarChart(xAxis, lv4Group, "lv4", "bar")
  const lv5DataGroup = createGroupBarChart(xAxis, lv5Group, "lv5", "bar")
  const lv6DataGroup = createGroupBarChart(xAxis, lv6Group, "lv6", "bar")
  const lv7DataGroup = createGroupBarChart(xAxis, lv7Group, "lv7", "bar")
  const optionDataGroup = createGroupBarChart(xAxis, optionGroup, "Options", "bar")
  const tamerDataGroup = createGroupBarChart(xAxis, tamerGroup, "Tamers", "bar")

  const finalGroupBar = [lv3DataGroup, lv4DataGroup, lv5DataGroup, lv6DataGroup, lv7DataGroup, optionDataGroup, tamerDataGroup]

  return finalGroupBar
}