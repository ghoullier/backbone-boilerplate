define([
  'models/base/model'
], function(BaseModel) {
  'use strict';

  return BaseModel.extend({
    defaults: {
      title: 'Default Title',
      body: 'Default Body'
    }
  })
})
