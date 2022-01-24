// required packages/files
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHTML = require("./src/generateHTML.js");

const fs = require("fs");

const team = [];

// generalized questions for each employee 
function createTeam() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the Employee's Name: ",
            name: "name"
        },

        {
            type: "input",
            message: "Enter the Employee's ID: ",
            name: "id"
        },

        {
            type: "input",
            message: "Enter the Employee's Email: ",
            name: "email"
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
                addEngineer(response.name, response.id, response.email);
            else if (response.role === "Intern")
                addIntern(response.name, response.id, response.email);
        });

}

// add manager as employee (question prompts regarding manager)
function addManager() {

    inquirer.prompt([
        {
            type: "input",
            message: "Enter the Manager's Name: ",
            name: "name"
        },

        {
            type: "input",
            message: "Enter the Manager's ID: ",
            name: "id"
        },

        {
            type: "input",
            message: "Enter the Manager's Email: ",
            name: "email"
        },
      
        {
            type: "input",
            name: "office",
            message: "Enter the Manager's office number"
        }
    ])
        .then(response => {
            const newManager = new Manager(response.name, response.id, response.email, response.office);
            team.push(newManager);
            addEmployee();
        })
}

// add engineer as employee (add github for role)
function addEngineer(name, id, email) {
    inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's Github username"
        }
    ])
        .then(response => {
            const newEngineer = new Engineer(name, id, email, response.github);
            team.push(newEngineer);
            addEmployee();
        })
}

// add intern as employee (add school for role)
function addIntern(name, id, email) {
    inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school"
        }
    ])
        .then(response => {
            const newIntern = new Intern(name, id, email, response.school);
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
        (err) => err ? console.error(err) : console.log("\nYour Team HTML has been created in the /dist folder.")
    );
}

addManager();