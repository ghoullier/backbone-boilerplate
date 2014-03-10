define([
  'handlebars'
], function(Handlebars) {
  'use strict';

  /**
   * Example
   * {{join list}}
   * {{join list ';'}}
   */
  Handlebars.registerHelper('join', function(list, separator, options) {
    // Manage optionnal parameter
    if ('undefined' === typeof options) {
      options = separator
      separator = '-'
    }
    return list.join(separator)
  })

  return Handlebars
})
