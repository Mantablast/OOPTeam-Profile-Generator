// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()
Intern.prototype.getSchool = function() {}

// getRole() // Overridden to return 'Intern'
Intern.prototype.getRole = function() {}

class Intern extends Employee {
    constructor(name = '') {
      super(name);
  
      this.school = school;
}




module.exports = Intern;