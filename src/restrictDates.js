function restrictPastDates(id1, id2) {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  ++month;
  if (month < 10)
    month = "0" + month;
  let day = currentDate.getDate();
  if (day < 10)
    day = "0" + day;
  let todayDate = year + '-' + month + '-' + day;

  document.querySelector(id1).setAttribute("min", `${todayDate}`);
  document.querySelector(id1).addEventListener("input", function() {
    let dateFrom = document.querySelector(id1).value;
    document.querySelector(id2).value = dateFrom;
    document.querySelector(id2).setAttribute("min", `${dateFrom}`);
  });
}

export default restrictPastDates;
