'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.SupportSchema({

}, {
  autoIncrementedId: true,
  timestamps: true
});

const model = mongoose.model('Model', schema);
module.exports = model;


