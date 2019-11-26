// require testing modules
const mocha = require('mocha')
const chai = require('chai')
const expect = require('chai').expect

// require the module that we are putting to the test


// prove all the things
describe('My comprehension of the JS basics is solid', () => {

    it('and this proves my awesomeness with JS', () => {
        expect('look its a string').to.be.a('string');
        expect({car: 'ford'}).to.be.an('object');
        expect(null).to.be.a('null');
        expect(undefined).to.be.an('undefined');
        expect([]).to.be.an('array').that.is.empty;
        expect([ 1, 2, 3, 4, 5]).to.be.an('array').that.includes(5);
        expect({}).to.not.be.an('array')
        expect({make: 'tesla', model: 'cybertruck'}).to.have.a.property('model');
        expect({make: 'tesla', model: 'cybertruck'}).to.include({make: 'tesla', model: 'cybertruck'});
    })
    it('includes testing skills', () => {
        expect()
    })
})
