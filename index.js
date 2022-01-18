const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHTML = require("./src/generateHTML.js");

const fs = require("fs");

const team = [];

function createTeam() {

    inquirer.prompt([
        {
            type: "input",
            message: "Enter the Employee's Name: ",
            name: "name"
        },

        {
            type: "input",
            message: "Enter the Employee's Email: ",
            name: "email"
        },

        {
            type: "input",
            message: "Enter the Employee's ID: ",
            name: "id"
        },

        {
            type: "list",
            message: "Select the Employee's role: ",
            name: "role",
            choices: ["Engineer", "Intern"]
        }
    ])
        .then(response => {
            if (response.role === "Engineer")
                addEngineer(response.name, response.email, response.id);
            else if (response.role === "Intern")
                addIntern(response.name, response.email, response.id);
        });

}

// add manager as employee
function addManager() {

    inquirer.prompt([
        {
            type: "input",
            message: "Enter the Manager's Name: ",
            name: "name"
        },

        {
            type: "input",
            message: "Enter the Manager's Email: ",
            name: "email"
        },

        {
            type: "input",
            message: "Enter the Manager's ID: ",
            name: "id"
        },
        {
            type: "input",
            name: "office",
            message: "Enter the Manager's office number"
        }
    ])
        .then(response => {
            const newManager = new Manager(response.name, response.email, response.id, response.office);
            team.push(newManager);
            addEmployee();
        })
}

// add engineer as employee 
function addEngineer(name, email, id) {
    inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's Github username"
        }
    ])
        .then(response => {
            const newEngineer = new Engineer(name, email, id, response.github);
            team.push(newEngineer);
            addEmployee();
        })
}

// add intern as employee 
function addIntern(name, email, id) {
    inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school"
        }
    ])
        .then(response => {
            const newIntern = new Intern(name, email, id, response.school);
            team.push(newIntern);
            addEmployee();
        })
}

// confirmation
function addEmployee() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "addEmployee",
            message: "Add another Employee to the team?"
        }
    ])
        .then(response => {
            if (response.addEmployee === true) {
                createTeam();
            } else {
                writeToFile("./dist/index.html", team);
            }
        })
}

// write data to html 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data),
        (err) => err ? console.error(err) : console.log("\nYour HTML has been created.")
    );
}

addManager();