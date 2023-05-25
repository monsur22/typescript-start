function processInput(input: string): string;
function processInput(input: number): number;
function processInput(input: string | number): string | number  {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  if (typeof input === "number") {
    return input * 2;
  }
  return input;
}

console.log(processInput("hello")); // Output: "HELLO"
console.log(processInput(5)); // Output: 10
