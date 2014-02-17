define([
  'models/help',
  'views/base/view',
  'text!views/templates/help.hbs'
], function(HelpModel, BaseView, template) {
  'use strict';

  return BaseView.extend({
    initialize: function(args) {
      // Create new model instance
      this.model = new HelpModel({
        id: args.modelId
      })
      // Call super
      this.constructor.__super__.initialize.apply(this, arguments)
    },
    template: template
  })
})
