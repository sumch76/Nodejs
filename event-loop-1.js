const fs = require("fs");
const a = 100;


setTimeout(() => console.log("Timer expired"),0);

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});
setImmediate(() => console.log("setImmediate"));


function printA() {
  console.log("a=", a);
}

printA();
console.log("Last line of the file.");

// a=100
// Last line of the file.
// Timer expired
// setImmediate
// File Reading CB
