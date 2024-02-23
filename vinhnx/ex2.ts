interface IUser {
	name: string;
	age: number;
	occupation: string;
}

interface IAdmin {
	name: string;
	age: number;
	role: string;
}

export type TPerson = IUser | IAdmin;

export const persons: TPerson[] = [
	{
			name: 'Max Mustermann',
			age: 25,
			occupation: 'Chimney sweep'
	},
	{
			name: 'Jane Doe',
			age: 32,
			role: 'Administrator'
	},
	{
			name: 'Kate Müller',
			age: 23,
			occupation: 'Astronaut'
	},
	{
			name: 'Bruce Willis',
			age: 64,
			role: 'World saver'
	}
];

export function logPerson(user: TPerson) {
	console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);