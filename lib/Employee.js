class Employee {
    // Constructor for creating a new employee with supplied information. Employees encompass Intern, Engineer, and Manager.
    constructor(name, id, email) {
        // This stores the employee name
        this.name = name;
        // This stores the employee id
        this.id = id;
        // This stores the employee email
        this.email = email;
    }

    //  return the name, id, email and employee role, the string: 'employee'
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;