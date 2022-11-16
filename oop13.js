
class Employee {
	#name;
	#age;
	#salary;
	
	  constructor(name, age, salary) {
		  this.#name = name;
		  this.#age = age;
		  this.#salary = salary;
	  }
	  zxc() {
		  return this.#name + ', ' + this.#age + ' dead, zp: ' + this.#salary;
	  }
  }
  
  let employee = new Employee('Boba_bilder', 11, 12313123123123123123131);
  
  console.log(employee.zxc());