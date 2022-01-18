const Employee = require('./Employee');

// Intern class. Intern class extends the class of Employee so you don't have to grab repeated data again. Adds school to pull intern's school name.
class Intern extends Employee {
    // storing information on a new intern
    constructor(name, id, email, school) {
        // Super is used to call functions on the parent class of Employee
        super(name, id, email);
        // This stores the school name
        this.school = school;
    }

    // This code will return the school name and intern role
    getSchool() {
        return this.school;
    }
    
    getRole() {
        return "Intern";
    }
}
module.exports = Intern;