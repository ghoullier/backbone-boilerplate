define(function(require, exports, module) {
  'use strict';

  var Model = require('./base/model')

  module.exports = Model.extend({
    defaults: {
      title: 'Default Help Title',
      body: 'Default Help Body'
    }
  })
})
