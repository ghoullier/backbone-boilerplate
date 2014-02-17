define([
  'models/base/model'
], function(BaseModel) {
  'use strict';

  return BaseModel.extend({
    defaults: {
      title: 'Liste des auteurs'
    }
  })
})
