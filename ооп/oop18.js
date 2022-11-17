class Employee {
	#name;
	#age;
	#salary;
	constructor(name, age, salary) {
		this.#name = name;
        this.#age = age;
        this.#salary = salary;
	}
    setName(name) {
		this.#name = name;
	}
	setAge(age) {
		if (age > 0 & age < 120) {
			this.#age = age;
		} else {
			throw new Error('age is incorrect');
		}
    }
    setSalary(salary) {
		this.#salary = salary + '$';
	}
    getName() {
        return this.#name;
    } 
    getAge() {
        return this.#age;
    }
    getSalary() {
        return this.#salary;
    }
   
}    
let employee = new Employee
employee.setName('john');
employee.setAge(20);
employee.setSalary(330);
console.log(employee.getName());
console.log(employee.getAge());
console.log(employee.getSalary());