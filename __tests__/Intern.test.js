const Intern = require('../lib/Intern')

describe('Testing intern constructor', () => {
    describe('Testing all properties', () => {
        test('name property', () => {
            const Aimee = new Intern('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.name).toEqual('Aimee')
        })
        test('id property', () => {
            const Aimee = new Intern('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.id).toEqual(12345)
        })
        test('email property', () => {
            const Aimee = new Intern('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.email).toEqual("ajesso@post.com")
        })
        test('school property', () => {
            const Aimee = new Intern('Aimee', 12345, "ajesso@post.com", "UofT")
            expect(Aimee.school).toEqual("UofT")
        })
    })
    describe('Testing all methods', () => {
        test('getName method', () => {
            const Aimee = new Intern('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.getName()).toEqual('Aimee')
        })
        test('getId method', () => {
            const Aimee = new Intern('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.getId()).toEqual(12345)
        })
        test('getEmail method', () => {
            const Aimee = new Intern('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.getEmail()).toEqual('ajesso@post.com')
        })
        test('getGithub method', () => {
            const Aimee = new Intern('Aimee', 12345, "ajesso@post.com", "UofT")
            expect(Aimee.getSchool()).toEqual('UofT')
        })
        test('getRole method', () => {
            const Aimee = new Intern('Aimee', 12345, "ajesso@post.com", "Octocat", "Intern")
            expect(Aimee.getRole()).toEqual('Intern')
        })
    })
})