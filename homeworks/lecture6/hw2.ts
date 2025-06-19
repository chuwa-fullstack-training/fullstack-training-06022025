interface User {
  name: string;
  age: number;
  occupation?: string;
}

interface Admin extends User {

  role?: string;
}

type Person = User & Admin;

const persons: Person[] = [
  {
    name: "Aaron",
    age: 99,
    occupation: "TypeScript Developer",
  },
  {
    name: "Alex",
    age: 98,
    role: "System Administrator",
  },
];

// fix the error showing in the following code:
function logPerson(person: Person) {
  let additionalInformation = person.role ?? person.occupation ?? '';

  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
