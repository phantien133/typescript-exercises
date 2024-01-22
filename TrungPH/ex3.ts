interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
      type: 'user',
      name: 'Max Mustermann',
      age: 25,
      occupation: 'Chimney sweep'
  },
  {
      type: 'admin',
      name: 'Jane Doe',
      age: 32,
      role: 'Administrator'
  },
  {
      type: 'user',
      name: 'Kate Müller',
      age: 23,
      occupation: 'Astronaut'
  },
  {
      type: 'admin',
      name: 'Bruce Willis',
      age: 64,
      role: 'World saver'
  }
];

export function logPerson(person: Person) {
  let additionalInformation: string;
  if (person.type === 'admin') {
      additionalInformation = person.role;
  } else {
      additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);