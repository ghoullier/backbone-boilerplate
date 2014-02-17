define([
  'models/base/model'
], function(BaseModel) {
  'use strict';

  return BaseModel.extend({
    defaults: {
      name: 'Default Author Name'
    }
  })
})
