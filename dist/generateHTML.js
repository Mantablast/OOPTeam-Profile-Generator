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
    <script src="https://kit.fontawesome.com/d8d0c3ee1b.js" crossorigin="anonymous"></script>
    <title>My Team</title>
</head>
<body>
    <header><nav class="navbar navbar-dark bg-info">
    <center><h1>My Team Info</h1></center>
    </nav>
    </header>
    <center>
    <div class="card border-dark mb-3 mx-auto" style="max-width: 18rem;">
    <div class="card-header"><h1>Name : ${Team[0].name}</h1></div>
    <div class="card-body text-dark">
    <h3 class="card-title"><i class="fas fa-id-card-alt"></i>Manager</h3>
    <h4>Employee ID: ${Team[0].id}</h4>
    <p class="card-text">
    <a href = "mailto: ${Team[0].email}">${Team[0].email}</a>
    <h4>Office #: ${Team[0].officeNumber}</h4>
    </p>
    </div>
    </div>
    
    ${teamGen(Team)}
    ${footerGen()}
    `;
} 

    function teamGen (Team) {
        var cards = ""
        for (i = 1; i < Team.length; i++) {
            let teamMateRole = Team[ i ].getRole();
            let teamMateName = Team[ i ].name;
            let teamMateId = Team[ i ].id;
            let teamMateEmail = Team[ i ].email;
            let teamMateSchool = Team[ i ].school;
            let teamMateGithub = Team[ i ].github;
            if (teamMateRole === "Intern") {
               cards = cards + `
        <div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-header"><h1>Name : ${ teamMateName }</h1></div>
        <div class="card-body text-dark">
        <h3 class="card-title"><i class="fas fa-graduation-cap"></i>Intern</h3>
        <h4>Employee ID: ${ teamMateId }</h4>
        <p class="card-text">
        <a href = "mailto: ${ teamMateEmail }">${ teamMateEmail }</a>
        <h4>School: ${ teamMateSchool }</h4>
        </p>
        </div>
        </div>
        `;
            } else {
                cards = cards + `
        <div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-header"><h1>Name : ${ teamMateName }</h1></div>
        <div class="card-body text-dark">
        <h3 class="card-title"><i class="fas fa-tools"></i>Engineer</h3>
        <h4>Employee ID: ${ teamMateId }</h4>
        <p class="card-text">
        <a href = "mailto: ${ teamMateEmail }">${ teamMateEmail }</a>
        <h4>Github: <a href="https://github.com/${ teamMateGithub }">${ teamMateGithub }</a></h4>
        </p>
        </div>
        </div>
        `;
            }
        }
        console.log(cards)
        footerGen();
        return cards
        
}
// for (i = 1; i < Team.length; i++) {


function footerGen() {
    return`
    </center>
    
    </body>
    </html>
    `;
}
module.exports = generateHtml;

//append to data variable continuously until loop is over
