//function that takes an array of numbers and returns a new array with each number doubled Using the for...of loop
function doubleNumbers(numbers) {
  const doubled = [];
  for (const number of numbers) {
    doubled.push(number * 2);
  }
  return doubled;
}
