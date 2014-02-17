define([
  'jquery',
  'backbone',
  'views/home',
  'views/help'
], function($, Backbone, HomeView, HelpView) {
  'use strict';

  var Mediator = Backbone.Mediator

  return Backbone.Router.extend({
    initialize: function() {
      this.$container = $('#view-container').on('click', 'a', this.onClickLink)
      this.route('help/:id', 'help')
    },
    routes: {
      '': 'index'
    },
    index: function() {
      this.loadView(HomeView)
    },
    help: function(id) {
      this.loadView(HelpView, {
        modelId: id
      })
    },
    loadView: function(View, args) {
      if (this._view) {
        this._view.remove()
      }
      this._view = new View(args)
      this.$container.append(this._view.el)
    },
    onClickLink: function(event) {
      event.preventDefault()
      var route = $(event.currentTarget).attr('href')
      Mediator.publish('app:navigate', route)
    }
  })
})
