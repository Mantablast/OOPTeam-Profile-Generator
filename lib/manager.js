const Employee = require('./Employee')

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber
  }
  getRole() {
    return "Manager"
  }
}

// const manager = new Manager(myNewEmployee.name, myNewEmployee.id, myNewEmployee.email,myNewEmployee.officenum);


module.exports = Manager;
