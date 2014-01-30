define([
  'views/base/view',
  'text!templates/site.hbs'
], function(View, template) {
  'use strict';

  var SiteView = View.extend({
    container: 'body',
    id: 'site-container',
    tagName: 'main',
    regions: {
      main: '#main-container'
    },
    template: template
  })

  return SiteView
})
