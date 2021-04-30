const fs = require('fs'); //update delete write etc
const inquirer = require('inquirer');
const path = require('path');
const generateHtml = require("./dist/generateHTML");
const Employee = require("./lib/Employee");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
let myNewEmployee = "";

let Team = [];

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
            name: 'id',
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
            default: () => { },
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
        .then(function (myNewEmployee) {
            console.log(myNewEmployee);
            console.log("Great!  Lets add your team members!")
            const manager = new Manager(myNewEmployee.name, myNewEmployee.id, myNewEmployee.email,myNewEmployee.officeNumber);
            Team.push(manager);
            questions2();
        })

}
const questions2 = () => {
    //Team members to add
    inquirer.prompt([
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
                },
                {
                    name: 'Entries complete.  Generate HTML',
                }
            ],
        }
    ])
    .then(({role})=>{
        console.log(role);
        addTeamMembers(role);
    })
    
}

function addTeamMembers(role) {
        switch(role) {
            case 'Engineer':  // if (role === 'value1')
            inquirer.prompt([
                {
                    message: "Please enter the Engineer's name.",
                    name: "name",
                    type: "input",
                    validate: userInput => {
                        if (userInput) {
                            return true;
                        } else {
                            console.log('Engineer name is required.  Thank you.');
                            return false;
                        }
                    }
                },
                {
                    message: "Please enter the Engineer's employee ID number.",
                    name: "id",
                    type: "input",
                    validate: userInput => {
                        if (userInput) {
                            return true;
                        } else {
                            console.log('Engineer employee ID number is required.  Thank you.');
                            return false;
                        }
                    }
                },
                {
                    message: "Please enter the Engineer's email.",
                    name: "email",
                    type: "input",
                    default: () => { },
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
                    message: "Please the engineer's Github username.",
                    name: "github",
                    type: "input",
                    validate: userInput => {
                        if (userInput) {
                            return true;
                        } else {
                            console.log('Github name is required.  Thank you.');
                            return false;
                        }
                    }
                },
            ])
            .then(function (myNewEmployee) {
                console.log(myNewEmployee)
                console.log("Team member added")
                const engineer = new Engineer(myNewEmployee.name, myNewEmployee.id, myNewEmployee.email,myNewEmployee.github);
                Team.push(engineer);
                questions2();
            })

            break;
          
            case 'Intern':  // if (role.name === 'value2')
            inquirer.prompt([
                {
                    message: "Please enter the intern's name.",
                    name: "name",
                    type: "input",
                    validate: userInput => {
                        if (userInput) {
                            return true;
                        } else {
                            console.log('Intern name is required.  Thank you.');
                            return false;
                        }
                    }
                },
                {
                    message: "Please enter the interns's employee ID number.",
                    name: "id",
                    type: "input",
                    validate: userInput => {
                        if (userInput) {
                            return true;
                        } else {
                            console.log('Intern employee ID number is required.  Thank you.');
                            return false;
                        }
                    }
                },
                {
                    message: "Please enter the Intern's email.",
                    name: "email",
                    type: "input",
                    default: () => { },
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
                    message: "Please enter the intern's school name.",
                    name: "school",
                    type: "input",
                    validate: userInput => {
                        if (userInput) {
                            return true;
                        } else {
                            console.log('Intern name is required.  Thank you.');
                            return false;
                        }
                    }
                }
            ])
            .then(function (myNewEmployee) {
                // console.log(myNewEmployee)
                console.log("Team member added")
                const intern = new Intern(myNewEmployee.name, myNewEmployee.id, myNewEmployee.email,myNewEmployee.school);
                Team.push(intern);
                console.log(myNewEmployee)
                questions2();
            })
            break;
          
            case 'Entries complete.  Generate HTML':
            console.log("Questions complete");

            // Team.push(myNewEmployee);
            writeToFile(myNewEmployee);
            console.log(Team);
            }      
}

function writeToFile (myNewEmployee) {
    fs.writeFileSync(path.join(process.cwd(), "myTeam.html"), generateHtml(Team), "utf8");
};



questions1();