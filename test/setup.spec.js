'use strict';

const mongoose = require('mongoose');
const env = require('@naxmefy/env');
const lib = require('..');

before(function (done) {
  lib(mongoose, {

  });
  mongoose.connect(
    env('MONGODB_URI', 'mongodb://localhost/support-test'), {

    }, done);
});

after(function (done) {
  mongoose.connection.db.dropDatabase(done);
});
