const Manager = require('../lib/Manager')

describe('Testing intern constructor', () => {
    describe('Testing all properties', () => {
        test('name property', () => {
            const Aimee = new Manager('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.name).toEqual('Aimee')
        })
        test('id property', () => {
            const Aimee = new Manager('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.id).toEqual(12345)
        })
        test('email property', () => {
            const Aimee = new Manager('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.email).toEqual("ajesso@post.com")
        })
        test('office number property', () => {
            const Aimee = new Manager('Aimee', 12345, "ajesso@post.com", 5678)
            expect(Aimee.officeNumber).toEqual(5678)
        })
    })
    describe('Testing all methods', () => {
        test('getName method', () => {
            const Aimee = new Manager('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.getName()).toEqual('Aimee')
        })
        test('getId method', () => {
            const Aimee = new Manager('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.getId()).toEqual(12345)
        })
        test('getEmail method', () => {
            const Aimee = new Manager('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.getEmail()).toEqual('ajesso@post.com')
        })
        test('getOfficeNumber method', () => {
            const Aimee = new Manager('Aimee', 12345, "ajesso@post.com", 5678)
            expect(Aimee.getOfficeNumber()).toEqual(5678)
        })
        test('getRole method', () => {
            const Aimee = new Manager('Aimee', 12345, "ajesso@post.com", 5678, "Manager")
            expect(Aimee.getRole()).toEqual('Manager')
        })
    })
})