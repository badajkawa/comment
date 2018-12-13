const expect = require('chai').expect;

const { user } = require('../routes/users');

let req = {
    body: {},
};

let res = {
    sendCalledWith: '',
    send: function(arg) { 
        this.sendCalledWith = arg;
    }
};
console.log(user)
describe('Greetings Route', function() {
    describe('welcome() function', function() {
        it('Should return welcome', function() {
            user.get("/welcome", res);
            expect(res.sendCalledWith).to.contain('error');
        });
    })
});