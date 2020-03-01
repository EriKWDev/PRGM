class Student {
	fullName: string;
	constructor(public firstName: string, public middleInitial: string, public lastName: string) {
		this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
	}

	sayHi() {
		return this.fullName + ' says hi!';
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

function greeter(person: Person) {
	return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = new Student('Jane', 'M.', 'User');

document.body.textContent = greeter(user);
