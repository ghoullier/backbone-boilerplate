require(['config'], function() {
  require(['application', 'routes'], function(Application, routes) {
    new Application({
      routes: routes,
      controllerSuffix: '-controller'
    })
  })
})
