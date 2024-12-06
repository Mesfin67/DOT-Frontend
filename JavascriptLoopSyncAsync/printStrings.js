//function that takes an array of strings and prints each string to the console with a delay of 1 second between each print using setTimeout() method
function printStringsWithDelay(strings) {
  strings.forEach((str, index) => {
    setTimeout(() => {
      console.log(str);
    }, index * 1000);
  });
}
