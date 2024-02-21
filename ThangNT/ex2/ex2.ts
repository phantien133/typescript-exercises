interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: (Person)[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: "haha",
        role: 'World saver'
    },
    {
        name: 'Jane Doe',
        age: 32,
        occupation: "haha",
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: "haha",
        role: 'World saver'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        occupation: "haha",
        role: 'World saver'
    }
];

export function logPerson(user: User | Person | Admin) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
