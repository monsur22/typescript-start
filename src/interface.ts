interface Person1 {
    name: string;
    age: number;
    greet(): void;
  }

  class Student implements Person1 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet(): void {
      console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
    }
  }

  let student = new Student("Alice", 20);
  student.greet(); // Output: "Hello, my name is Alice. I am 20 years old."
