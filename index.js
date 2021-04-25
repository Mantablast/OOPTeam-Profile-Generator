const fs = require('fs'); //update delete write etc
const inquirer = require('inquirer');
const path = require('path');
const generateHtml = require("./dist/generateHTML");
// const Employee = require("./lib/Employee");


const questions1 = () => {
    inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'Hi, what is your name? (Required)',
        validate: userInput => {
            if (userInput) {
            return true;
            } else {
            console.log('Your name is required!  Thank you.');
            return false;
            }
            }
        },
        {
        type: 'input',
        name: 'empID',
        message: 'Please enter your employee ID number. (Required)',
        validate: userInput => {
            if (userInput) {
            return true;
            } else {
            console.log('Your employee number is required!  Thank you.');
            return false;
            }
            }
        },
        {
        message: "Please enter your email",
        name: "email",
        type: "input",
        default: () => {},
        validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log("Please enter a valid email")
                return false;
            }
            }
        },
        {
        type: 'input',
        name: 'officenum',
        message: 'What is your office number? (Required)',
        validate: projectInput => {
            if (projectInput) {
            return true;
            } else {
            console.log('Your name is required!  Thank you.');
            return false;
            }
            }
        }
    ])
    .then(function(managerresponse) {
        console.log(managerresponse);
        console.log("Great!  Lets add your team members!")
        questions2();
    })
    
}
const questions2 = () => {
    //Team members to add
    inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: 'What is the name of your first team member? (Required)',
    validate: userInput => {
        if (userInput) {
        return true;
        } else {
        console.log('The team member name is required!  Thank you.');
        return false;
        }
        }
    },
    {
    type: 'input',
    name: 'empID',
    message: 'Please enter their employee ID number. (Required)',
    validate: userInput => {
        if (userInput) {
        return true;
        } else {
        console.log('Please enter their employee ID number.  Thank you.');
        return false;
        }
        }
    },
    {
    message: "Please enter the team member email",
    name: "email",
    type: "input",
    default: () => {},
    validate: function (email) {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
            return true;
        } else {
            console.log("Please enter a valid email")
            return false;
        }
        }
    },
    {
        type: 'list',
        message: "Please indicat your team member's role.",
        name: 'role',
        choices: [
            {
                name: 'Engineer',
            },
            {
                name: 'Intern',
            }
        ],
        validate: function (role) {
            if(role === "Engineer") {
                inquirer.prompt([
                {
                message: "Please the member's Github username.",
                name: "github",
                type: "input",
                }
            ])
            } else {
                inquirer.prompt([
                {
                message: "Please the member's school name.",
                name: "school",
                type: "input",
                }
            ])
            }
        }
    }
    ])
    .then(function(teamresponse) {
        console.log(teamresponse);
    })
}





//I don't think this function will work because information will be pulled from multiple js files*
// function writeToFile(response) {
//     const wholeObject = generateHtml(response);
//     console.log(wholeObject);
//     fs.writeFileSync(path.join(process.cwd(), "myTeam.html"), wholeObject);
// };

questions1();