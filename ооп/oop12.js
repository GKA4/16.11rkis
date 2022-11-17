class Employee{
    constructor(name,zp){
        this.name = name;
		this.surn = zp;
    }
    show() {
		return this.name;
        
	}
    show2(){
        return this.zp;
    }
    aee(){
        this.salary = this.salary + (this.salary/10);
        return this.salary;
    }
}
let User = new Employee('john', 1312312313);
console.log(User.show);