requirejs.config({
  paths: {
    'underscore': '../vendor/bower/underscore/underscore',
    'jquery': '../vendor/bower/jquery/jquery',
    'chaplin': '../vendor/bower/chaplin/chaplin',
    'backbone': '../vendor/bower/backbone/backbone',
    'handlebars': '../vendor/bower/handlebars/handlebars',
    'text': '../vendor/bower/requirejs-text/text'
  },
  shim: {
    'handlebars': {
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
