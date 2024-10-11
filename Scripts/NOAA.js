function generateNOAAImageUrl() {
  const now = new Date();
  const year = now.getUTCFullYear();

  const start = new Date(year, 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const julianDay = Math.floor(diff / oneDay);

  let hours = now.getUTCHours();
  let minutes = Math.floor(now.getUTCMinutes() / 10) * 10;
  if (minutes === 60) {
    minutes = 0;
    hours += 1;
  }
  const timeString = `${hours.toString().padStart(2, '0')}${minutes.toString().padStart(2, '0')}`;

  return `https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/GEOCOLOR/${year}${julianDay}${timeString}_GOES16-ABI-FD-GEOCOLOR-1808x1808.jpg`;
}
