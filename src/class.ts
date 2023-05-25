class PersonClass {
    name: string;
    age: number;
    id:number;
    constructor(name: string ='', age: number=0, id: number=0) {
      this.name = name;
      this.age = age;
      this.id = id;
    }

    sayHello(): void {
      console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
    }

    courseDetails(id: number, name: string): void {
      console.log(`Course ID: ${id}. Course Name: ${name}`);
    }

  }

  let person_class = new PersonClass();
  person_class.sayHello(); // Output: "Hello, my name is Alice. I am 30 years old."
  person_class.courseDetails(5,'CSE Fundamandtal');