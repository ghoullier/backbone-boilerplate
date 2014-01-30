define([
  'backbone'
], function(Backbone) {
  'use strict';

  return Backbone.Model.extend({
    autoFetch: false,
    initialize: function() {
      if (this.autoFetch) {
        this.fetch()
      }
    }
  })
})
