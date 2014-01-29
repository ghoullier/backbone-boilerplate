define(function(require, exports, module) {
  'use strict';

  var View = require('./base/view')
    , template = require('text!./templates/help.hbs')
    , Model =  require('models/help')

  module.exports = View.extend({
    initialize: function(args) {
      // Create new model instance
      this.model = new Model({
        id: args.modelId
      })
      // Call super
      this.constructor.__super__.initialize.apply(this, arguments)
      // Load model from Web Service
      this.model.fetch()
    },
    template: template,
    model: new Model()
  })
})
