// 1. Given the array const colors = ['red', 'green', 'blue'], use destructuring to assign the first, second, and third elements to variables named firstColor, secondColor, and thirdColor.
const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;

//2. Given the object const person = { name: 'Alice', age: 25, city: 'Wonderland' }, use destructuring to assign the properties name, age, and city to variables.
const person = { name: "Alice", age: 25, city: "Wonderland" };
const { name, age, city } = person;

// 3. Given the object const settings = { theme: 'dark', language: 'en' }, use destructuring to assign the properties to variables, and provide a default value of 'light' for the property mode.
const settings = { theme: "dark", language: "en" };
const { theme, language, mode = "light" } = settings;
