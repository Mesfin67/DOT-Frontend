// function that takes an object and prints its keys and values to the console using the for...in loop
function printKv(obj) {
  for (const key in obj) {
    console.log(`${key},${obj[key]}`);
  }
}
