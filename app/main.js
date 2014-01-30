// Load requirejs config
require(['config'], function() {
  // Load application module
  require(['app'], function(App) {
    // Start application
    App.start()
  })
})
