requirejs.config({
  map: {
    '*': {
      'backbone': 'backbone-mediator'
    },
    'backbone-mediator': {
      'backbone': 'backbone'
    }
  },
  paths: {
    'underscore': '../vendor/bower/underscore/underscore',
    'jquery': '../vendor/bower/jquery/jquery',
    'backbone': '../vendor/bower/backbone/backbone',
    'backbone-mediator': '../vendor/bower/Backbone-Mediator/backbone-mediator',
    'handlebars': '../vendor/bower/handlebars/handlebars',
    'text': '../vendor/bower/requirejs-text/text'
  },
  shim: {
    'handlebars': {
      deps: ['text'],
      exports: 'Handlebars'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
})
