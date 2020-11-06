let a = dateCheckIn.getTime();
let b = dateCheckOut.getTime();
for (let i = 0; i < x.length; i++) {
  let c = x[i].dateFrom.getTime();
  let d = x[i].dateTo.getTime();
  if (
    a < c && b > c ||
    a < d && b > d ||
    a < c && b > d ||
    a > c && b < d
  )
    ++count;
}
