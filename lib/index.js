'use strict';

const supportSchema = require('./support-schema');

exports = module.exports = function (mongoose, options) {
  mongoose.SupportSchema = supportSchema(mongoose);
};
