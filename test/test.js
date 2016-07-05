
var expect = require('chai').expect;

describe('mocha-chai-init', function() {
  describe('testFunction', function() {
      it('Should expect to equal', function() {
            expect(5).to.be.equal(5);                
      });
  });
});