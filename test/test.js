var request = require("supertest");
var app = require('../app').app;

describe('loading express', function() {

    it('responds to /', function (done) {
        request(app).get('/').expect(200, done);
    });
});
