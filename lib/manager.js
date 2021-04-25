// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'
Manager.prototype.getRole = function() {}



class Manager extends Employee {
    constructor(name = '') {
      super(name);
  
      this.officenum = officenum;
}




module.exports = Manager;