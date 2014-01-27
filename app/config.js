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
    'underscore': '../vendor/vendor/underscore/underscore',
    'jquery': '../vendor/vendor/jquery/jquery',
    'backbone': '../vendor/vendor/backbone/backbone',
    'backbone-mediator': '../vendor/vendor/Backbone-Mediator/backbone-mediator',
    'handlebars': '../vendor/vendor/handlebars/handlebars',
    'text': '../vendor/vendor/requirejs-text/text'
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
