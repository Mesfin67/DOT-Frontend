let items = [];

// Function to add an item to the array
function addItem() {
  const input = document.getElementById("itemInput");
  const value = input.value.trim();

  if (value) {
    items.push(value);
    alert(`Item ${value} added to the array.`);
    input.value = "";
  } else {
    alert("Please enter a valid number.");
  }
}

// Function to display the array items
function displayItems() {
  const displayArea = document.getElementById("displayArea");
  displayArea.innerHTML = "";

  items.forEach((item, index) => {
    const element = document.createElement("p");
    element.textContent = `Element ${index + 1} = ${item}`;
    displayArea.appendChild(element);
  });
}
