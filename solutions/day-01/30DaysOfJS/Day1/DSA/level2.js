let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// string to array
const cleanedText = text.replace(/[^\w\s]/g, '');
console.log(cleanedText);
const words = cleanedText.split(' ');

console.log(words)
console.log(words.length)