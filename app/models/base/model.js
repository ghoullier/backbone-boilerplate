define(function(require, exports, module) {
  'use strict';

  var Backbone = require('backbone')

  module.exports = Backbone.Model.extend({
    autoFetch: false,
    initialize: function() {
      if (this.autoFetch) {
        this.fetch()
      }
    }
  })
})
