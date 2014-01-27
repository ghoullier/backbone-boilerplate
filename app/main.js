// Load requirejs config
require(['config'], function() {
  // Load application module
  require(['app'], function(app) {
    // Start application
    app.start()
  })
})
