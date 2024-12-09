// 1. A function delay(ms) that returns a Promise which resolves after ms milliseconds
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// 2. A a function fetchData() that simulates fetching data from an API. It should return a Promise that resolves with a random number between 1 and 100 after a delay of 2 seconds
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      resolve(randomNumber);
    }, 2000);
  });
}
//3. A function processData(data) that processes the data (simply logs the data to the console). It should return a Promise that resolves with the data multiplied by 2 after a delay of 1 second
function processData(data) {
  return new Promise((resolve) => {
    console.log("Processing data:", data);
    setTimeout(() => {
      const processedData = data * 2;
      resolve(processedData);
    }, 1000);
  });
}
//4.Chain of functions together using Promises so that fetchData() is called first, and once it resolves, processData() is called with the fetched data
fetchData()
  .then((data) => {
    console.log("Fetched data:", data);
    return processData(data);
  })
  .then((processedData) => {
    console.log("Processed data:", processedData);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
