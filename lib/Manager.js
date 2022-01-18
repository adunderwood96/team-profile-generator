const Employee = require('./Employee');

//  Manager class extends the class of Employee so you don't have to grab repeated data again. Adds officeNumber to pull manager's office number.
class Manager extends Employee {
    // storing information on a new manager
    constructor(name, id, email, officeNumber) {
        // Super is used to call functions on the parent class of Employee
        super(name, id, email);
        // This stores the office number
        this.officeNumber = officeNumber;

    }

    // This code will return the office number and manager role
    getOfficeNumber() {
        return this.officeNumber;
    }
    
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;