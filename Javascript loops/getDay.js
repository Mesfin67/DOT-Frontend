for (let year = 2014; year <= 2050; year++) {
  const firstDay = new Date(year, 0, 1); // Month is 0-indexed (0 = January)
  if (firstDay.getDay() === 0) {
    console.log(`1st January ${year} is a Sunday.`);
  }
}
