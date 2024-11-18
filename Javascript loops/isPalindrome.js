function isPalindrome(str) {
  // Remove spaces, punctuation, and convert to lowercase
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  // Reverse the cleaned string
  const reversedStr = cleanedStr.split("").reverse().join("");
  // Check if the original cleaned string matches the reversed string
  return cleanedStr === reversedStr;
}
