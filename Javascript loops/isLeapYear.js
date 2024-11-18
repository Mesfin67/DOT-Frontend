function isLeapYear(year) {
  // A year is a leap year if it is divisible by 4
  // but not divisible by 100 unless it is also divisible by 400
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}
