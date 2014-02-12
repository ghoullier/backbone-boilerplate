define(function(require, exports, module) {
  'use strict';

  var _ = require('underscore')
    , BaseView = require('views/base/view')

  module.exports = BaseView.extend({
    className: 'collection-view',
    container: 'ol',
    ItemView: null,
    initialize: function() {
      this.listenTo(this.collection, 'change reset add remove', this.render)
      // Call BaseView.initialize()
      BaseView.prototype.initialize.apply(this, arguments)
    },
    render: function() {
      // Call BaseView.render()
      BaseView.prototype.render.apply(this, arguments)
      // Render collection
      this.$container = this.$el.find(this.container)
      this.renderCollection()
    },
    getCollectionData: function() {
      return this.collection.models
    },
    renderCollection: function() {
      var view = this
        , collection = this.getCollectionData()
        , ItemView = this.ItemView
      view.$container.empty()
      _.each(collection, function(model) {
        var item = new ItemView({
          model: model
        })
        view.$container.append(item.el)
      })
    }
  })
})
