define(function(require, exports, module) {
  'use strict';

  var Backbone = require('backbone')
    , Mediator = Backbone.Mediator
    , MainRouter = require('routers/main')
    , started = false

  function start() {
    if (!started) {
      // Initialize router
      app.router = new MainRouter()
      // Subscribe navigate topic
      Mediator.subscribe('app:navigate', navigate)
      // Start bootstrap history manager
      Backbone.history.start({
        pushState: true
      })
    }
  }

  function navigate(route) {
    app.router.navigate(route, {
      trigger: true
    })
  }

  var app = module.exports = {
    start: start
  }

})
