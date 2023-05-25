//Function declaration
function add(a:number,b:number):number{
    return a+b;
}

let result = add(5,6);
console.log(result);

//Function expression
const multiply = function(a: number, b: number): number {
  return a * b;
};

let result1 = multiply(2, 3); // Calling the function
console.log(result1); // Output: 6

//Arrow function
const divide = (a: number, b: number): number => {
    return a / b;
  };

  let result2 = divide(6, 2); // Calling the function
  console.log(result); // Output: 3

//   Optional and default parameters
function greet(name: string, message: string = "Hello") {
    console.log(`${message}, ${name}!`);
  }

  greet("Alice"); // Output: Hello, Alice!
  greet("Bob", "Hi"); // Output: Hi, Bob!

