const { greet } = require('./app');

if (greet("World") === "Hello, World!") {
  console.log("Greet test passed!");
  process.exit(0);
} else {
  console.error("Greet test failed!");
  process.exit(1);
}
