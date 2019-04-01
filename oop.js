//constructor
/*function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);    
}

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}*/


//class
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);    
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }
}

const person1 = new Person('John', 'Doe', '4-3-1980');
console.log(person1);

console.log(person1.getBirthYear());

