class Animal {
    protected name: string;

    constructor(name: string) {
      this.name = name;
    }

    move(distance: number): void {
      console.log(`${this.name} moved ${distance} meters.`);
    }
  }

  class Dog extends Animal {
    bark(): void {
      console.log(`${this.name} barks.`);
    }
  }

  // Create instances of classes
  const animal = new Animal("Generic Animal");
  const dog = new Dog("Bobby");

  // Call methods
  animal.move(10); // Output: "Generic Animal moved 10 meters."
  dog.move(5); // Output: "Bobby moved 5 meters."
  dog.bark(); // Output: "Bobby barks."
