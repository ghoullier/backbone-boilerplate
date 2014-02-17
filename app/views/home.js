define([
  'models/home',
  'views/base/view',
  'text!views/templates/home.hbs'
], function(HomeModel, BaseView, template) {
  'use strict';

  return BaseView.extend({
    template: template,
    events: {
      'click .body': 'onClickBody'
    },
    model: new HomeModel(),
    onClickBody: function() {
      this.model.set('body', Date.now())
    }
  })
})
