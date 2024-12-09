// A function delay(ms) that returns a Promise which resolves after ms milliseconds
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
