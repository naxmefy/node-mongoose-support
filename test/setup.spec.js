'use strict';

const mongoose = require('mongoose');
const env = require('@naxmefy/env');

before(function (done) {
  mongoose.connect(
    env('MONGODB_URI', 'mongodb://localhost/support-test'), {

    }, done);
});

after(function (done) {
  mongoose.connection.db.dropDatabase(done);
});
