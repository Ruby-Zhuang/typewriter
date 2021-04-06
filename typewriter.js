const sentence = "hello there from lighthouse labs";
const sentenceNewLineAtEnd = sentence + "\n";
let delay = 0;

for (const char of sentenceNewLineAtEnd) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;    // For each character in sentence, increase delay by 50ms
}

// // New line at the end
// setTimeout(() => {
//   console.log();
// }, delay);