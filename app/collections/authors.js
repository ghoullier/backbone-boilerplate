define([
  'collections/base/collection',
  'models/author'
], function(BaseCollection, AuthorModel) {
  'use strict';

  return BaseCollection.extend({
    model: AuthorModel,
    defaults: {
      name: 'Default Author Name'
    }
  })
})
