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
      this.route('help', 'help')
    },
    routes: {
      '': 'index'
    },
    index: function() {
      this.loadView(HomeView)
    },
    help: function() {
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
