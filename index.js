// Required Packages
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// Outside File Variables
const Manager = require('./lib/Manager');
const mgrQuestions = require('./promises/MgrQuestions');

const Engineer = require('./lib/Engineer');
const engQuestions = require('./promises/EngQuestions');

const Intern = require('./lib/Intern');
const internQuestions = require('./promises/InternQuestions');

const render = require('./lib/htmlRenderer');
