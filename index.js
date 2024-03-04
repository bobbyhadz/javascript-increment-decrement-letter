// EXAMPLE 1 - Increment Letters in JavaScript

function getNextChar(char) {
  return String.fromCharCode(char.charCodeAt(0) + 1);
}

console.log(getNextChar('a')); // 👉️ b
console.log(getNextChar('A')); // 👉️ B

// ------------------------------------------------------------------

// // EXAMPLE 2 - Handle incrementing lowercase and uppercase `z`

// function getNextChar(char) {
//   if (char === 'z') {
//     return 'a';
//   }

//   if (char === 'Z') {
//     return 'A';
//   }

//   return String.fromCharCode(char.charCodeAt(0) + 1);
// }

// console.log(getNextChar('z')); // a
// console.log(getNextChar('Z')); // A

// ------------------------------------------------------------------

// // EXAMPLE 3 - Decrement Letters in JavaScript

// function getPrevChar(char) {
//   return String.fromCharCode(char.charCodeAt(0) - 1);
// }

// console.log(getPrevChar('z')); // y
// console.log(getPrevChar('Z')); // Y
