  import DS from 'ember-data';

export default DS.Model.extend({
  lastUpdated: DS.attr('string'),
  link:        DS.attr('string'),
  description: DS.attr('string'),
  type:        DS.attr('string')
});
