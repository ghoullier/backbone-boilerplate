define(function(require, exports, module) {
  'use strict';

  var $ = require('jquery')
    , Backbone = require('backbone')
    , Mediator = Backbone.Mediator
    , HomeView = require('views/home')
    , HelpView = require('views/help')

  module.exports = Backbone.Router.extend({
    initialize: function() {
      this.$container = $('#view-container').on('click', 'a', this.onClickLink)
    },
    routes: {
      '': 'index',
      'help': 'help'
    },
    index: function() {
      console.log('router:index')
      this.loadView(HomeView)
    },
    help: function() {
      console.log('router:help')
      this.loadView(HelpView)
    },
    loadView: function(View) {
      if (this._view) {
        this._view.remove()
      }
      this._view = new View()
      this.$container.append(this._view.el)
    },
    onClickLink: function(event) {
      event.preventDefault()
      var route = $(event.currentTarget).attr('href')
      Mediator.publish('app:navigate', route)
    }
  })
})
