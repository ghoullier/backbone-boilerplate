define([
  'models/base/model'
], function(Model) {
  'use strict';

  return Model.extend({
    defaults: {
      title: 'Default Title',
      body: 'Default Body'
    }
  })
})
