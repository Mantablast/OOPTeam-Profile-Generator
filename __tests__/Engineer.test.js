const Engineer = require('../lib/Engineer')

describe('Testing engineer constructor', () => {
    describe('Testing all properties', () => {
        test('name property', () => {
            const Aimee = new Engineer('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.name).toEqual('Aimee')
        })
        test('id property', () => {
            const Aimee = new Engineer('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.id).toEqual(12345)
        })
        test('email property', () => {
            const Aimee = new Engineer('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.email).toEqual("ajesso@post.com")
        })
        test('github property', () => {
            const Aimee = new Engineer('Aimee', 12345, "ajesso@post.com", "Octocat")
            expect(Aimee.github).toEqual("Octocat")
        })
    })
    describe('Testing all methods', () => {
        test('getName method', () => {
            const Aimee = new Engineer('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.getName()).toEqual('Aimee')
        })
        test('getId method', () => {
            const Aimee = new Engineer('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.getId()).toEqual(12345)
        })
        test('getEmail method', () => {
            const Aimee = new Engineer('Aimee', 12345, "ajesso@post.com")
            expect(Aimee.getEmail()).toEqual('ajesso@post.com')
        })
        test('getGithub method', () => {
            const Aimee = new Engineer('Aimee', 12345, "ajesso@post.com", "Octocat")
            expect(Aimee.getGithub()).toEqual('Octocat')
        })
        test('getRole method', () => {
            const Aimee = new Engineer('Aimee', 12345, "ajesso@post.com", "Octocat", "Engineer")
            expect(Aimee.getRole()).toEqual('Engineer')
        })
    })
})