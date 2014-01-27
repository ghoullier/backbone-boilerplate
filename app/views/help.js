define(function(require, exports, module) {
  'use strict';

  var View = require('./base/view')
    , template = require('text!./templates/help.hbs')
    , Model =  require('models/help')

  module.exports = View.extend({
    template: template,
    model: new Model()
  })
})
