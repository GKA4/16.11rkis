class Empoloyee{
    show(name, salary){
        return name + 'idy v magaz'+ salary;
    }
}


let user = new Empoloyee();
user.name = "Alisa";
user.salary = 500;
console.log(user.name);
console.log(user.salary);



let user2 = new Empoloyee();
user2.name = "Evgeniy";
user2.salary = 250000;

console.log(user2.name);
console.log(user2.salary);
console.log(user.show('Evgeniy' , 'Alisa'));