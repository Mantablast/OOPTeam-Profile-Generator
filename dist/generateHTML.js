const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern')



//Where the html will be generated
function generateHtml(Team) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <title>My Team</title>
</head>
<body>
    <header><nav class="navbar navbar-dark bg-primary">
    My Team Info
    </nav>
    </header>
    <div class="card border-dark mb-3 mx-auto" style="max-width: 18rem;">
    <div class="card-header"><h1>Name : ${Team[0].name}</h1></div>
    <div class="card-body text-dark">
    <h3 class="card-title">Manager</h3>
    <h4>Employee ID: ${Team[0].id}</h4>
    <p class="card-text">
    <a href = "mailto: ${Team[0].email}">${Team[0].email}</a>
    <h4>Office #: ${Team[0].officeNumber}</h4>
    </p>
    </div>
    </div>
    ${teamGen(Team)}
    
    `;
} 


Team.forEach(function teamGen(Team) {
    
  
// function teamGen(Team) {
// for (i = 1; i < Team.length; i++) {
if(Team[i].getRole() === "Intern") {
    return `
    <div class="card border-dark mb-3 mx-auto" style="max-width: 18rem;">
    <div class="card-header"><h1>Name : ${Team[i].name}</h1></div>
    <div class="card-body text-dark">
    <h3 class="card-title">Intern</h3>
    <h4>Employee ID: ${Team[i].id}</h4>
    <p class="card-text">
    <a href = "mailto: ${Team[i].email}">${Team[i].email}</a>
    <h4>School: ${Team[i].school}</h4>
    </p>
    </div>
    </div>
    `;
} else { 'Engineer'
    return `
    <div class="card border-dark mb-3 mx-auto" style="max-width: 18rem;">
    <div class="card-header"><h1>Name : ${Team[i].name}</h1></div>
    <div class="card-body text-dark">
    <h3 class="card-title">Engineer</h3>
    <h4>Employee ID: ${Team[i].id}</h4>
    <p class="card-text">
    <a href = "mailto: ${Team[i].email}">${Team[i].email}</a>
    <h4>Office #: ${Team[i].github}</h4>
    </p>
    </div>
    </div>
    `;
}


})

function footerGen() {
    return`
    </body>
    </html>
    `;
}
module.exports = generateHtml;

//append to data variable continuously until loop is over
