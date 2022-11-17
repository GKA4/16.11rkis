class Position{
	constructor(name) {
		  this.name = name;
	  }
  }
  class Department{
	constructor(name) {
		  this.name = name;
	  }
  }
  class Employee {
	  constructor(name, position, department) {
		  this.name = name;
		  this.position = position;
		  this.department = department;
	  }
  }
  let position = new Position('EREVAN');
  let department = new Department('Razrabotchik');
  let employee = new Employee('Denisjhan', position, department);
  
  console.log(employee.name);
  console.log(employee.position.name);
  console.log(employee.department.name);