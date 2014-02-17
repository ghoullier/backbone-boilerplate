define([
  'underscore',
  'views/base/view'
], function(_, BaseView) {
  'use strict';

  return BaseView.extend({
    className: 'collection-view',
    container: 'ol',
    ItemView: null,
    initialize: function() {
      console.log('collection-view')
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
        , data = this.getCollectionData()
        , ItemView = this.ItemView
      view.$container.empty()
      _.each(data, function(model) {
        var item = new ItemView({
          model: model
        })
        view.$container.append(item.el)
      })
    }
  })
})
