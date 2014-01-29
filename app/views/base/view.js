define(function(require, exports, module) {
  'use strict'

  var _ = require('underscore')
    , $ = require('jquery')
    , Handlebars = require('handlebars')
    , Backbone = require('backbone')

  module.exports = Backbone.View.extend({
    tagName: 'section',
    className: 'view',
    initialize: function() {
      this.listenTo(this.model, 'change', this.render)
      this.render()
    },
    getTemplateFunction: function() {
      return Handlebars.compile(this.template)
    },
    getTemplateData: function() {
      return this.model.attributes
    },
    render: function() {
      var template = this.getTemplateFunction()
        , data = this.getTemplateData()
      this.$el.html(template(data))
    }
  })
})
