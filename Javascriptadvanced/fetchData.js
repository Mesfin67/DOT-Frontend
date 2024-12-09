// A a function fetchData() that simulates fetching data from an API. It should return a Promise that resolves with a random number between 1 and 100 after a delay of 2 seconds
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      resolve(randomNumber);
    }, 2000);
  });
}
