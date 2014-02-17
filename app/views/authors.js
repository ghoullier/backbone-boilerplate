define([
  'collections/authors',
  'models/authors',
  'views/base/collection-view',
  'views/author-item',
  'text!views/templates/authors.hbs'
], function(AuthorsCollection, AuthorsModel, BaseCollectionView, AuthorItemView, template) {
  'use strict';

  return BaseCollectionView.extend({
    template: template,
    model: new AuthorsModel(),
    collection: new AuthorsCollection([{
      name: 'ghoullier'
    }]),
    ItemView: AuthorItemView
  })
})
