function dateDiffInDays(a, b) {
  const milisecondsPerDay = 1000 * 60 * 60 * 24;
  a = new Date(a.value);
  b = new Date(b.value);
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / milisecondsPerDay);
}

export default dateDiffInDays;
