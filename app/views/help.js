define([
  'models/help',
  'views/base/view',
  'text!views/templates/help.hbs'
], function(Model, View, template) {
  'use strict';

  return View.extend({
    initialize: function(args) {
      // Create new model instance
      this.model = new Model({
        id: args.modelId
      })
      // Call super
      this.constructor.__super__.initialize.apply(this, arguments)
    },
    template: template
  })
})
