const Employee = require('./Employee');

// engineer class
class Engineer extends Employee {
    // information on a new engineer
    constructor(name, id, email, github) {
        // Super is used to call functions on the parent class of Employee
        super(name, id, email);
        //  stores the Github user id
        this.github = github;
    }

    // return the Github username and engineer role
    getGithub() {
        return this.github;
    }
    
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;