define(function(require, exports, module) {
  'use strict'

  var Model = require('./base/model')

  module.exports = Model.extend({
    defaults: {
      title: 'Default Title',
      body: 'Default Body'
    }
  })
})
