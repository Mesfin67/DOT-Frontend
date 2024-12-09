//A function processData(data) that processes the data (simply logs the data to the console). It should return a Promise that resolves with the data multiplied by 2 after a delay of 1 second
function processData(data) {
  return new Promise((resolve) => {
    console.log("Processing data:", data);
    setTimeout(() => {
      const processedData = data * 2;
      resolve(processedData);
    }, 1000);
  });
}
