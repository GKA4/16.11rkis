class Employee {
	#name;
	#salary;
	
	constructor(name, salary) {
		this.#name = name;
		this.#salary = salary;
	}
	getName() {
		return this.#name;
	}
	getSalary(){
	  return this.#salary
	}
}

let employees = [
  new Employee('lol', 4500),
  new Employee('kek', 2700),
  new Employee('cheburek', 3200),
  new Employee('PogU', 6400)
  ]
  
for (let employee of employees) {
	console.log(employee.getName() + " " + employee.getSalary());
}