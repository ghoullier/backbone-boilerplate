define([
  'models/home',
  'views/base/view',
  'text!views/templates/home.hbs'
], function(Model, View, template) {
  'use strict';

  return View.extend({
    template: template,
    events: {
      'click .body': 'onClickBody'
    },
    model: new Model(),
    onClickBody: function() {
      this.model.set('body', Date.now())
    }
  })
})
