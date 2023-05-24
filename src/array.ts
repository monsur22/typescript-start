//Array type annotation
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

//Array generic type
let numbers1: Array<number> = [1, 2, 3, 4, 5];
let names1: Array<string> = ["Alice", "Bob", "Charlie"];

//Array literal
let numbers2 = [1, 2, 3, 4, 5]; // numbers is inferred as number[]
let names2 = ["Alice", "Bob", "Charlie"]; // names is inferred as string[]

// Accessing array elements:
let numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3[0]); // Output: 1
console.log(numbers3[2]); // Output: 3

//Array methods
let numbers4 = [1, 2, 3, 4, 5];
numbers.push(6); // Add an element to the end of the array
console.log(numbers4); // Output: [1, 2, 3, 4, 5, 6]

let removedElement = numbers4.pop(); // Remove and return the last element
console.log(removedElement); // Output: 6
console.log(numbers4); // Output: [1, 2, 3, 4, 5]
