define([
  'models/help',
  'views/base/view',
  'text!views/templates/author-item.hbs'
], function(HelpModel, BaseView, template) {
  'use strict';

  return BaseView.extend({
    template: template
  })
})
