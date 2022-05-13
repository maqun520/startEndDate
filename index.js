/*根据传入时间加一天 传入时间格式为yyyy-MM-dd*/
function addOneDay(currentDay) {
  let d = new Date(currentDay);
  d = +d + 1000 * 60 * 60 * 24;
  d = new Date(d);
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}

/*将字符串类型时间转换为yyyy-MM-dd格式*/
function simpleDate(oldDate) {
  let dateArr = oldDate.split("-");
  dateArr["1"] = dateArr["1"].length == 1 ? "0" + dateArr["1"] : dateArr["1"];
  dateArr["2"] = dateArr["2"].length == 1 ? "0" + dateArr["2"] : dateArr["2"];
  return dateArr.join("-");
}

function getEveryDay(startDate, endData) {
  let dateList = [startDate];
  let dayCount = (new Date(endData) - new Date(startDate)) / (1000 * 60 * 60 * 24);
  for (let i = 0; i < dayCount; i++) {
      let currentDay = addOneDay(dateList[i]);
      currentDay = simpleDate(currentDay);
      dateList.push(currentDay);
  }
  console.log(dateList)
  return dateList;
}

getEveryDay("2022-1-21", "2022-10-21")
