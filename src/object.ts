type Person = {
    name: string;
    age: number;
    isAdmin: boolean;
  };

let person: Person = {
    name: "Alice2",
    age: 30,
    isAdmin: true
};
//   let person = {
//     name: "Alice",
//     age: 30,
//     isAdmin: true
//   };

    console.log(person.name); // Output: "Alice"
    console.log(person["age"]); // Output: 30
