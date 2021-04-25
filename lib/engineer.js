// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username
Engineer.prototype.getGithubUsername = function() {}

// getGithub()
Engineer.prototype.getGithub = function() {}

// getRole() // Overridden to return 'Engineer'
Engineer.prototype.getRole = function() {}

class Engineer extends Employee {
    constructor(name = '') {
      super(name);
  
      this.github = github;
}




module.exports = Engineer;