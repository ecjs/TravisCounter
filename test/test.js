var chai = require('chai');
var expect = chai.expect;

var c = require('../server');
var newObject = new c.Counter();

describe('Simple Counter Object', function() {
  it('should be able to create a new object', function(done) {
    expect(newObject).to.be.instanceof(c.Counter);
    done();
  });

  it('should have a value of zero', function(done) {
    expect(newObject.getValue()).to.eql(0);
    done();
  });

  it('should be able to increment by one', function(done) {
    newObject.increment();
    expect(newObject.getValue()).to.eql(1);
    done();
  });
});
