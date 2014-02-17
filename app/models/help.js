define([
  'models/base/model'
], function(BaseModel) {
  'use strict';

  return BaseModel.extend({
    autoFetch: true,
    urlRoot: '/api/help',
    defaults: {
      title: 'Default Help Title',
      body: 'Default Help Body'
    }
  })
})
