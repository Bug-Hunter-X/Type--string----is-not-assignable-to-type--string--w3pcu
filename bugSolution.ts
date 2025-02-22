function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(' ');
}

let user = ["Jane", "Doe"];
console.log(greeter(user[0])); // Correct: Accessing the first element
console.log(greeterArray(user)); // Correct: Handles array of strings