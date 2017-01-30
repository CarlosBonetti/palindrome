var request = require('supertest');
var server = require('../src/server');

describe('GET /api/palindrome', function() {
  var url = '/api/palindrome';

  it('should respond with 400 when no parameter is provided', function(done) {
    request(server)
      .get(url)
      .expect(400, done);
  });

  it('should respond with 400 when parameter is NOT a palindrome', function(done) {
    request(server)
      .get(url)
      .query({ s: 'MACACO' })
      .expect(400, done);
  });

  it('should respond with 200 when parameter IS a palindrome', function(done) {
    request(server)
      .get(url)
      .query({ s: 'ABBA' })
      .expect(200, done);
  });
});
