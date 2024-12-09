//Chain of functions together using Promises so that fetchData() is called first, and once it resolves, processData() is called with the fetched data
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
