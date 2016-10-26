'use strict';

const model = require('./fixtures/model');

describe('SupportSchema', function () {
  afterEach(function (done) {
    model.remove(done);
  });
  it('should enhance a Schema with autoIncrementedId field', function (done) {
    model.create({}, (err, doc) => {
      if (err) return done(err);

      doc._id.should.be.eql(1);
      done();
    })
  });
});
