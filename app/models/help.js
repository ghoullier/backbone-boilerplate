define(function(require, exports, module) {
  'use strict';

  var Model = require('./base/model')

  module.exports = Model.extend({
    urlRoot: '/api/help',
    defaults: {
      title: 'Default Help Title',
      body: 'Default Help Body'
    }
  })
})
