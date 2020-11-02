function restrictPastDates() {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  ++month;
  let day = currentDate.getDate();
  if (day < 10)
    day = "0" + day;
  let todayDate = year + '-' + month + '-' + day;

  document.querySelector("#dateFrom").setAttribute("min", `${todayDate}`);
}

function fixDateTo() {
  let dateFrom = document.querySelector("#dateFrom").value;
  document.querySelector("#dateTo").value = dateFrom;
  document.querySelector("#dateTo").setAttribute("min", `${dateFrom}`);
}

export { restrictPastDates, fixDateTo };
