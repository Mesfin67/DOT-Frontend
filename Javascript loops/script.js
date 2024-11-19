// Program 1: Leap Year
function checkLeapYear() {
  const year = document.getElementById("leapYearInput").value;
  const result =
    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
      ? `${year} is a leap year.`
      : `${year} is not a leap year.`;
  document.getElementById("leapYearResult").innerText = result;
}

// Program 2: 1st January Sunday
function checkFirstJanuarySunday() {
  const years = [];
  for (let year = 2014; year <= 2050; year++) {
    if (new Date(year, 0, 1).getDay() === 0) {
      years.push(year);
    }
  }
  document.getElementById(
    "firstJanuaryResult"
  ).innerText = `1st January will be Sunday in the years: ${years.join(", ")}`;
}

// Program 3: Odd or Even
function checkOddEven() {
  let result = "";
  for (let i = 0; i <= 15; i++) {
    result += `${i} is ${i % 2 === 0 ? "Even" : "Odd"}.\n`;
  }
  document.getElementById("oddEvenResult").innerText = result;
}

// Program 4: Palindrome Check
function checkPalindrome() {
  const str = document.getElementById("palindromeInput").value.toLowerCase();
  const reversed = str.split("").reverse().join("");
  const result =
    str === reversed
      ? `"${str}" is a palindrome.`
      : `"${str}" is not a palindrome.`;
  document.getElementById("palindromeResult").innerText = result;
}
