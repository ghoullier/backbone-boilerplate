define([
  'backbone',
  'utils/mediator',
  'routers/default'
], function(Backbone, Mediator, Router) {
  'use strict';

  var started = false
    , app = {}

  function start() {
    if (!started) {
      // Initialize router
      app.router = new Router()
      // Subscribe navigate topic
      Mediator.subscribe('app:navigate', navigate)
      // Start bootstrap history manager
      Backbone.history.start({
        pushState: true
      })
    }
  }
  app.start = start

  function navigate(route) {
    app.router.navigate(route, {
      trigger: true
    })
  }

  return app
})
