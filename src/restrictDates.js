function restrictPastDates(a, b) {
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

  a.setAttribute("min", `${todayDate}`);
  b.setAttribute("min", `${todayDate}`);
  a.addEventListener("input", function() {
    let dateFrom = a.value;
    b.value = dateFrom;
    b.setAttribute("min", `${dateFrom}`);
  });
}

export default restrictPastDates;
