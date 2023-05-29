class Cattle {
    makeSound(): void {
      console.log("The cattle makes a sound.");
    }
  }

  class Cow extends Cattle {
    makeSound(): void {
      console.log("The cow sound Humba.");
    }
  }

  const cattle = new Cattle();
  cattle.makeSound(); // Output: "The cattle makes a sound."

  const cow = new Cow();
  cow.makeSound(); // Output: "The dog barks."
