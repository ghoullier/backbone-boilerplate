define([
  'jquery',
  'backbone',
  'utils/mediator',
  'views/home',
  'views/help',
  'views/authors'
], function($, Backbone, Mediator, HomeView, HelpView, AuthorsView) {
  'use strict';

  return Backbone.Router.extend({
    initialize: function() {
      this.$container = $('#view-container').on('click', 'a', this.onClickLink)
      // Dynamic route register
      this.route('help/:id', 'help')
    },
    routes: {
      '': 'index',
      'authors': 'authors'
    },
    index: function() {
      this.loadView(HomeView)
    },
    help: function(id) {
      this.loadView(HelpView, {
        modelId: id
      })
    },
    authors: function() {
      this.loadView(AuthorsView)
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
