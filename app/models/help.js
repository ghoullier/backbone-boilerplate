define([
  'models/base/model'
], function(Model) {
  'use strict';

  return Model.extend({
    autoFetch: true,
    urlRoot: '/api/help',
    defaults: {
      title: 'Default Help Title',
      body: 'Default Help Body'
    }
  })
})
