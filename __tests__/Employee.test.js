const Employee = require('../lib/Employee')

describe('Testing employee constructor', () => {
    describe('Testing all properties', () => {
        test('name property', () => {
            const Aimee = new Employee('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.name).toEqual('Aimee')
        })
        test('id property', () => {
            const Aimee = new Employee('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.id).toEqual(12345)
        })
        test('email property', () => {
            const Aimee = new Employee('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.email).toEqual("ajesso@post.com")
        })
    })
    describe('Testing all methods', () => {
        test('getName method', () => {
            const Aimee = new Employee('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.getName()).toEqual('Aimee')
        })
        test('getId method', () => {
            const Aimee = new Employee('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.getId()).toEqual(12345)
        })
        test('getEmail method', () => {
            const Aimee = new Employee('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.getEmail()).toEqual('ajesso@post.com')
        })
    })
})