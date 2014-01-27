define(function(require, exports, module) {
  'use strict';

  var View = require('./base/view')
    , template = require('text!./templates/home.hbs')
    , Model =  require('models/home')

  module.exports = View.extend({
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
