function removeFirstAndLastChar(str) {
  if (str.length <= 2) {
    return ""; // Return an empty string if the input is too short
  }
  return str.slice(1, -1);
}
