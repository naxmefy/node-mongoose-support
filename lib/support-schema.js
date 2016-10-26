'use strict';

const _ = require('lodash');

const hidden = require('mongoose-hidden');
const relationship = require('mongoose-relationship');
const sequence = require('mongoose-sequence');

const defaultOptions = {
  autoIncrementedId: false,
  autoIncrementedIdOptions: undefined,
  plugins: [],
  relationship: {
    relationshipPathName: undefined,
    triggerMiddleware: false
  },

  toJSON: {virtuals: true},
  toObject: {virtuals: true}
};

module.exports = mongoose => {
  return class SupportSchema extends mongoose.Schema {
    constructor (fields, options) {
      _.defaults(options, defaultOptions);
      super(fields, options);

      this.plugin(hidden(_.get(this.options, 'hidden')));

      if (_.get(this.options, 'autoIncrementedId', false)) {
        this.add({
          _id: {type: Number}
        });

        this.plugin(sequence, _.get(this.options, 'autoIncrementedIdOptions'));
      }

      if (_.get(this.options, ['relationship', 'relationshipPathName'])) {
        this.plugin(relationship, _.get(this.options, 'relationship'));
      }
    }
  }
};
