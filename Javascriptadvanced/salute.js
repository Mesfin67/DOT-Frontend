// Delay function that returns a Promise resolving after the given number of milliseconds
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function salute() {
  console.log("Hello");
  await delay(2000);
  console.log("World");
}
// Call the async function
salute();
