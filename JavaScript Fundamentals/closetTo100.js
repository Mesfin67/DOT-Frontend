function closestTo100(num1, num2) {
  const diff1 = Math.abs(100 - num1);
  const diff2 = Math.abs(100 - num2);

  if (diff1 < diff2) {
    return num1;
  } else if (diff2 < diff1) {
    return num2;
  } else {
    return "Both values are equally close to 100.";
  }
}
