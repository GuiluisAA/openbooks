import DS from 'ember-data';

export default DS.Model.extend({

  googleID: DS.attr('string'),
  title: DS.attr('string'),
  authors: DS.attr(),
  thumbnail: DS.attr('string'),

});
