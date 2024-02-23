export interface IUser {
	name: string;
	age: number;
	occupation: string
};

export const users: Array<IUser> = [
	{
			name: 'Max Mustermann',
			age: 25,
			occupation: 'Chimney sweep'
	},
	{
			name: 'Kate Müller',
			age: 23,
			occupation: 'Astronaut'
	}
];

export function logPerson(user: IUser) {
	console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);